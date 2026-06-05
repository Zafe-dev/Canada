import { Hero } from "@/components/Hero";
import { ServiceSection } from "@/components/ServiceSection";
import { Advantages } from "@/components/Advantages";
import { AntiRefusal } from "@/components/AntiRefusal";
import { DisclaimerBanner } from "@/components/DisclaimerBanner";
import { CtaSection } from "@/components/CtaSection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServiceSection />
      <Advantages />
      <section className="py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <DisclaimerBanner />
        </div>
      </section>
      <AntiRefusal />
      <CtaSection />
    </>
  );
}
