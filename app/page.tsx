
import { Navigation } from "@/components/navigation";
import { HeroSection } from "@/components/HeroSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { StorySection } from "@/components/StorySection";
import { BenefitsGrid } from "@/components/BenefitsGrid";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <FeaturesSection/>
      <StorySection/>
      <BenefitsGrid/>
      <TestimonialsSection/>
      <CTASection/>
      <Footer/>
    </main>
  );
}
