import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function CTASection() {
  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-transparent to-secondary/20 blur-3xl" />

      <div className="relative z-10 max-w-4xl mx-auto">
        <div className="rounded-2xl border border-border bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-xl p-12 sm:p-16 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6 text-balance">
            Ready to Take Control of Your Projects?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12 text-balance leading-relaxed">
            Join hundreds of teams who have eliminated project delays and delivered with confidence. Start your free
            14-day trial today.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2 h-12 px-8"
            >
              <Link href="/register">
                Start Free Trial <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-border hover:bg-muted h-12 px-8 bg-transparent"
            >
              <Link href="/login">Sign In</Link>
            </Button>
          </div>

          <p className="text-sm text-muted-foreground mt-8">
            No credit card required. 14-day free trial. Cancel anytime.
          </p>
        </div>
      </div>
    </section>
  )
}
