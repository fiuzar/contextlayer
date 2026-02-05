import ProductHero from "@/components/layout/product-hero";
import SystemSpecs from "@/components/layout/system-specs";
import WorkflowPrecision from "@/components/layout/workflow-precision";
import Positioning from "@/components/layout/positioning";
import CoreConcepts from "@/components/layout/core-concepts";

export default function ProductPage() {
    return (
        <>
            <ProductHero />
            <CoreConcepts />
            <SystemSpecs />
            <WorkflowPrecision />
            <Positioning />
        </>
    );
}