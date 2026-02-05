import Image from "next/image";

import {Hero} from "@/components/layout/hero"
import Problem from "@/components/layout/problem";
import Solution from "@/components/layout/solution";
import Features from "@/components/layout/features";
import CTA from "@/components/layout/cta";

export default function Home() {
    return (
        <>
            <Hero />
            <Problem />
            <Solution />
            <Features />
            <CTA />
        </>
    );
}
