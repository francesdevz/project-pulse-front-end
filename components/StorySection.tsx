import { Lightbulb } from "lucide-react"

export function StorySection() {
  return (
    <section id="story" className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(112,192,230,.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(112,192,230,.1)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-secondary/10 border border-secondary/30">
              <Lightbulb className="w-4 h-4 text-secondary" />
              <span className="text-sm text-secondary">Our Story</span>
            </div>
            <h2 className="text-4xl font-bold text-foreground mb-6 text-balance">Why We Built Project Pulse</h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              We've all been there. A project starts on schedule, but somewhere along the way, things slip. A critical
              resource becomes unavailable. Dependencies aren't met. Scope creeps silently. Before you know it, you're
              weeks behind.
            </p>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              After witnessing too many talented teams struggle with visibility, collaboration, and proactive delay
              prevention, we decided to build something different. Something designed specifically for teams who refuse
              to accept delays as inevitable.
            </p>
            <p className="text-lg text-foreground font-semibold">
              Project Pulse is that something. A platform built on clarity, transparency, and action.
            </p>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl blur-2xl" />
            <div className="relative bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-12 text-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">💡</span>
              </div>
              <p className="text-xl font-semibold text-foreground mb-4">The Better Way to Manage Projects</p>
              <p className="text-muted-foreground text-balance">
                Not just tracking what went wrong, but predicting and preventing delays before they happen.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
