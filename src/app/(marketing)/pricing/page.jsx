import PricingHero from "@/components/layout/pricing-hero"
import PricingCards from "@/components/layout/pricing-card"
import ComparisonTable from "@/components/layout/comparison-table"
import PricingFAQ from "@/components/layout/pricing-faq"

export default function PricingPage() {
    return (
        <>
        <PricingHero />
        <PricingCards />
        <ComparisonTable />
        <PricingFAQ />
        </>
    )
}