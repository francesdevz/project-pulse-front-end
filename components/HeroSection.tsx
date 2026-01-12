import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Zap } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,.03)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

      {/* Gradient accents */}
      <div className="absolute top-20 right-1/3 w-72 h-72 bg-white/20 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
      <div className="absolute top-40 left-1/3 w-72 h-72 bg-white/20 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" />
      <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-white/10 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 border border-secondary/30 mb-8 text-balance">
          <Zap className="w-4 h-4 text-white" />
          <span className="text-sm text-secondary">Transform Project Delays into Success Stories</span>
        </div>

        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground mb-6 text-balance leading-tight">
          Master Your{" "}
          <span className="bg-white bg-clip-text text-transparent">
            Project Timeline
          </span>
        </h1>

        <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 text-balance leading-relaxed">
          Project Pulse is the intelligent project management platform designed specifically for teams fighting against
          delays. Gain complete visibility, collaborate in real-time, and turn challenges into victories.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <Button asChild size="lg" className="bg-white hover:bg-white/90 text-primary-foreground gap-2 h-12 px-8">
            <Link href="/register">
              Start Free Trial <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="border-border hover:bg-muted h-12 px-8 bg-transparent">
            <Link href="#features">Explore Features</Link>
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-12 border-t border-border">
          <div>
            <div className="text-3xl font-bold text-white">500+</div>
            <p className="text-sm text-muted-foreground mt-2">Teams Trusting Us</p>
          </div>
          <div>
            <div className="text-3xl font-bold text-white">35%</div>
            <p className="text-sm text-muted-foreground mt-2">Avg Timeline Improvement</p>
          </div>
          <div>
            <div className="text-3xl font-bold text-white">24/7</div>
            <p className="text-sm text-muted-foreground mt-2">Real-Time Support</p>
          </div>
          <div>
            <div className="text-3xl font-bold text-white">99.9%</div>
            <p className="text-sm text-muted-foreground mt-2">Uptime Guarantee</p>
          </div>
        </div>
      </div>
    </section>
  )
}
