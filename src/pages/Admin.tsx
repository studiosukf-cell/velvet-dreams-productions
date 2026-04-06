import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import { motion } from "framer-motion";
import { Users, FileText, BarChart3, Mail, Camera, Calendar, TrendingUp, Eye, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/useAuth";
import { useNavigate } from "react-router-dom";

const stats = [
  { label: "Total Applications", value: "1,247", change: "+12%", icon: Users },
  { label: "Active Performers", value: "86", change: "+5%", icon: Camera },
  { label: "Shoots This Month", value: "23", change: "+18%", icon: Calendar },
  { label: "Revenue (MTD)", value: "£142K", change: "+22%", icon: TrendingUp },
];

const recentApplications = [
  { name: "Jessica T.", location: "London", experience: "None", status: "New", date: "Today" },
  { name: "Marcus D.", location: "Manchester", experience: "Some", status: "Reviewed", date: "Yesterday" },
  { name: "Amy & Tom R.", location: "Bristol", experience: "Experienced", status: "Approved", date: "2 days ago" },
  { name: "Daniel K.", location: "Birmingham", experience: "None", status: "New", date: "3 days ago" },
  { name: "Rachel S.", location: "Leeds", experience: "Some", status: "Interview", date: "3 days ago" },
];

const statusColor: Record<string, string> = {
  New: "bg-blue-100 text-blue-700",
  Reviewed: "bg-amber-100 text-amber-700",
  Approved: "bg-green-100 text-green-700",
  Interview: "bg-purple-100 text-purple-700",
};

const Admin = () => (
  <Layout>
    <section className="section-padding">
      <div className="container max-w-6xl">
        <AnimatedSection>
          <p className="text-gold uppercase tracking-[0.3em] text-sm font-medium mb-4">Dashboard</p>
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-8">
            Admin <span className="gradient-gold">Backend</span>
          </h1>
        </AnimatedSection>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
          {stats.map((stat, i) => (
            <AnimatedSection key={stat.label} delay={i * 0.08}>
              <motion.div whileHover={{ y: -3 }} className="glass-card rounded-lg p-5">
                <div className="flex items-center justify-between mb-3">
                  <stat.icon size={20} className="text-gold" />
                  <span className="text-xs font-medium text-green-600 bg-green-50 px-2 py-0.5 rounded-full">{stat.change}</span>
                </div>
                <p className="font-display text-2xl font-bold">{stat.value}</p>
                <p className="text-muted-foreground text-sm">{stat.label}</p>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Recent Applications */}
          <AnimatedSection delay={0.2} className="lg:col-span-2">
            <div className="glass-card rounded-lg p-6">
              <div className="flex items-center justify-between mb-5">
                <h2 className="font-display text-xl font-semibold">Recent Applications</h2>
                <Button variant="outline" size="sm" className="border-gold/40 text-gold text-xs">View All</Button>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="text-muted-foreground text-xs uppercase border-b border-border">
                      <th className="text-left pb-3 font-medium">Name</th>
                      <th className="text-left pb-3 font-medium">Location</th>
                      <th className="text-left pb-3 font-medium">Experience</th>
                      <th className="text-left pb-3 font-medium">Status</th>
                      <th className="text-left pb-3 font-medium">Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    {recentApplications.map((app) => (
                      <tr key={app.name} className="border-b border-border/50 last:border-0 hover:bg-muted/30 transition-colors">
                        <td className="py-3 font-medium">{app.name}</td>
                        <td className="py-3 text-muted-foreground">{app.location}</td>
                        <td className="py-3 text-muted-foreground">{app.experience}</td>
                        <td className="py-3">
                          <span className={`text-xs px-2 py-1 rounded-full font-medium ${statusColor[app.status]}`}>{app.status}</span>
                        </td>
                        <td className="py-3 text-muted-foreground text-xs">{app.date}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </AnimatedSection>

          {/* Quick Actions */}
          <AnimatedSection delay={0.3}>
            <div className="glass-card rounded-lg p-6">
              <h2 className="font-display text-xl font-semibold mb-5">Quick Actions</h2>
              <div className="space-y-3">
                {[
                  { icon: FileText, label: "Review Applications", count: "14 pending" },
                  { icon: Mail, label: "Messages", count: "8 unread" },
                  { icon: Calendar, label: "Schedule Shoots", count: "3 upcoming" },
                  { icon: BarChart3, label: "Analytics Report", count: "View" },
                  { icon: Eye, label: "Content Review", count: "6 pending" },
                ].map((action) => (
                  <button
                    key={action.label}
                    className="w-full flex items-center gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors text-left"
                  >
                    <div className="w-9 h-9 rounded-lg bg-gold/10 flex items-center justify-center flex-shrink-0">
                      <action.icon size={16} className="text-gold" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium">{action.label}</p>
                      <p className="text-xs text-muted-foreground">{action.count}</p>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  </Layout>
);

export default Admin;
