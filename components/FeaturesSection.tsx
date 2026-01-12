import { CheckCircle2, BarChart3, Users, AlertCircle, Zap, Target } from "lucide-react"

const features = [
  {
    icon: AlertCircle,
    title: "Proactive Issue Detection",
    description: "AI-powered early warning system identifies risks before they become critical delays.",
  },
  {
    icon: BarChart3,
    title: "Real-Time Analytics",
    description: "Visual project health dashboard with burndown charts, velocity tracking, and predictive analytics.",
  },
  {
    icon: Users,
    title: "Live Collaboration",
    description:
      "Instant team synchronization with real-time updates, comments, and status changes across all devices.",
  },
  {
    icon: Target,
    title: "Smart Planning",
    description: "Intelligent resource allocation and timeline optimization based on historical data patterns.",
  },
  {
    icon: Zap,
    title: "Automated Workflows",
    description: "Streamline repetitive tasks and notifications to keep your team focused on delivery.",
  },
  {
    icon: CheckCircle2,
    title: "Transparency First",
    description: "Complete visibility into blockers, dependencies, and progress for every stakeholder.",
  },
]

export function FeaturesSection() {
  return (
    <section id="features" className="relative py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6 text-balance">
            Built for Teams Fighting Delays
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            Every feature designed with one goal: help you overcome project delays and deliver on time.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className="group relative rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 hover:border-secondary/50 transition-all duration-300 hover:shadow-xl hover:shadow-secondary/10"
              >
                {/* Gradient background on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl pointer-events-none" />

                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-lg bg-white flex items-center justify-center mb-6 group-hover:from-primary/50 group-hover:to-secondary/50 transition-colors">
                    <Icon className="w-6 h-6 text-black" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
