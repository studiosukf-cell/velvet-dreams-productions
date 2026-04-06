
-- Create admin role enum and user_roles table
CREATE TYPE public.app_role AS ENUM ('admin', 'user');

CREATE TABLE public.user_roles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  role app_role NOT NULL,
  UNIQUE (user_id, role)
);

ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;

-- Security definer function to check roles without recursion
CREATE OR REPLACE FUNCTION public.has_role(_user_id uuid, _role app_role)
RETURNS boolean
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1 FROM public.user_roles
    WHERE user_id = _user_id AND role = _role
  )
$$;

-- Only admins can view user_roles
CREATE POLICY "Admins can view roles"
ON public.user_roles FOR SELECT
TO authenticated
USING (public.has_role(auth.uid(), 'admin'));

-- Drop the overly permissive SELECT policies
DROP POLICY IF EXISTS "Authenticated users can view applications" ON public.performer_applications;
DROP POLICY IF EXISTS "Authenticated users can view contact submissions" ON public.contact_submissions;

-- Replace with admin-only SELECT policies
CREATE POLICY "Only admins can view applications"
ON public.performer_applications FOR SELECT
TO authenticated
USING (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Only admins can view contact submissions"
ON public.contact_submissions FOR SELECT
TO authenticated
USING (public.has_role(auth.uid(), 'admin'));
