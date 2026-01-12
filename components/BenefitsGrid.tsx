import { TrendingUp, Shield, Workflow, Users, Clock, Lightbulb } from "lucide-react"

const benefits = [
  {
    icon: TrendingUp,
    title: "Predictive Insights",
    description: "Machine learning identifies patterns and predicts delays weeks in advance",
  },
  {
    icon: Shield,
    title: "Risk Mitigation",
    description: "Automated risk detection with actionable recommendations",
  },
  {
    icon: Workflow,
    title: "Streamlined Workflows",
    description: "Eliminate status update meetings with automated reporting",
  },
  {
    icon: Users,
    title: "Team Alignment",
    description: "Everyone sees the same truth about project status and blockers",
  },
  {
    icon: Clock,
    title: "Time Savings",
    description: "Teams save 5+ hours per week on status tracking and reporting",
  },
  {
    icon: Lightbulb,
    title: "Data-Driven Decisions",
    description: "Make informed decisions with historical trends and benchmarking",
  },
]

export function BenefitsGrid() {
  return (
    <section id="benefits" className="relative py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6 text-balance">What You'll Gain</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            Real results from teams using Project Pulse to stay on track
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon
            return (
              <div
                key={index}
                className="rounded-xl border border-border bg-white-to-br from-card/50 to-card/30 backdrop-blur-sm p-8 hover:border-primary/50 transition-all duration-300"
              >
                <Icon className="w-8 h-8 text-white mb-4" />
                <h3 className="text-lg font-semibold text-foreground mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{benefit.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
