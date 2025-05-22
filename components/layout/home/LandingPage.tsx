import {FeaturesSection} from '@components/features/home/FeatureSection/FeaturesSection';
import {DemoSection} from '@components/features/home/DemoSection/DemoSection';
import {TestimonialsSection} from '@components/features/home/TestimonialsSection/TestimonialsSection';
import {FAQSection} from '@components/features/home/FAQSection/FAQSection';
import {HowItWorksSection} from '@components/features/home/HowItWorksSection/HowItWorksSection';
import {PricingSection} from "@components/features/home/PricingSection/PricingSection";
import {CTASection} from "@components/features/home/CTASection/CTASection";
import {Hero} from "@components/features/home/Hero/Hero";
import {PlanCardProps} from "@features/home";

const plans : PlanCardProps[] = [
    { id: 'free',   name: 'Free',   price: '$0',  features: ['5 desc/day'],       actionLabel: 'Select' },
    { id: 'pro',    name: 'Pro',    price: '$49', features: ['Unlimited content'], actionLabel: 'Select' },
    { id: 'agency', name: 'Agency', price: '—',   features: ['API access'],       actionLabel: 'Contact' },
]

export default function LandingPage() {
    return (
        <main>
            <Hero />
            <HowItWorksSection />
            <FeaturesSection />
            <DemoSection />
            <TestimonialsSection />
            <PricingSection plans={plans} />
            <CTASection />
            <FAQSection />
        </main>
    )
}
