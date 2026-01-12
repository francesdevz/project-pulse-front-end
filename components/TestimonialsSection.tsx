import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Engineering Manager",
    company: "TechStart Inc",
    content:
      "Project Pulse helped us identify blockers that would have caused a 3-week delay. Now we catch issues in real-time.",
    rating: 5,
  },
  {
    name: "Marcus Rodriguez",
    role: "Director of Delivery",
    company: "Enterprise Solutions",
    content: "The transparency across our 50+ person team is unprecedented. Status meetings are now 80% shorter.",
    rating: 5,
  },
  {
    name: "Emily Watson",
    role: "Product Lead",
    company: "Digital Innovations",
    content: "We reduced project delays by 40% in the first quarter. The predictive analytics are game-changing.",
    rating: 5,
  },
]

export function TestimonialsSection() {
  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6 text-balance">Trusted by Leading Teams</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            See how teams are transforming their project outcomes
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8">
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-muted-foreground mb-6 leading-relaxed italic">"{testimonial.content}"</p>
              <div className="border-t border-border pt-6">
                <p className="font-semibold text-foreground">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">
                  {testimonial.role} at {testimonial.company}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
