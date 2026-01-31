import { Layers, Zap, Repeat, ShieldCheck } from "lucide-react";
import React from "react";
import { cn } from "@/lib/utils";
import { ContainerTextFlip } from "@/components/aceternity/container-text-flip";
import { Button } from "@/components/ui/button";

const Hero = ({ className }) => {
  return (
    // Background: bg-slate-50
    <section className={cn("h-full w-screen overflow-hidden py-32 bg-[#F8FAFC]", className)}>
      <div className="container border-t border-b border-dashed border-[#E2E8F0] mx-auto">
        
        <div className="relative flex w-full max-w-5xl flex-col justify-start border border-t-0 border-dashed border-[#E2E8F0] px-5 py-12 md:items-center md:justify-center lg:mx-auto">
          {/* Accent Text: text-emerald-500 */}
          <p className="flex items-center gap-3 text-sm font-bold tracking-widest text-[#10B981] uppercase">
            <span className="inline-block size-2 rounded bg-[#10B981] animate-pulse" />
            Beta Access Now Open
          </p>
          
          <div className="mt-3 mb-7 w-full max-w-2xl text-5xl font-semibold tracking-tighter text-[#0F172A] md:mb-10 md:text-center md:text-6xl lg:relative lg:mb-0 lg:text-left lg:text-7xl">
            <h1 className="relative z-10 inline md:mr-3">
              Explain once. <br className="block md:hidden" /> Run everywhere.
            </h1>
            <div className="h-20 md:h-24 lg:h-28">
              <ContainerTextFlip
                // Muted Text: text-slate-500
                className="absolute text-4xl font-semibold tracking-tighter text-[#64748B] md:left-1/2 md:-translate-x-1/2 md:text-5xl lg:left-auto lg:translate-x-0 lg:text-7xl"
                words={["GPT-4o", "Claude 3.5", "Gemini Pro", "Llama 3"]}
              />
            </div>
          </div>
        </div>

        {/* Surface: bg-white */}
        <div className="mx-auto flex w-full max-w-5xl flex-col items-center justify-center border border-t-0 border-b-0 border-dashed border-[#E2E8F0] bg-white py-24">
          <div className="w-full max-w-2xl space-y-8 md:text-center">
            <p className="px-5 text-[#64748B] lg:text-xl leading-relaxed">
              Stop repeating yourself. Build a persistent <span className="text-[#0F172A] font-bold underline decoration-[#10B981]/30">Context Layer</span> that keeps your project DNA consistent across every AI model.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center px-5">
              {/* Primary: bg-green-800 */}
              <Button className="h-12 px-8 rounded-lg text-md font-bold bg-[#166534] hover:bg-[#14532D] text-white shadow-md">
                Create Free Project
              </Button>
              <Button variant="outline" className="h-12 px-8 rounded-lg text-md border-[#E2E8F0] text-[#0F172A] hover:bg-slate-50">
                View Live Demo
              </Button>
            </div>
          </div>
        </div>

        {/* Feature Grid */}
        <ul className="mx-auto grid h-auto w-full max-w-5xl grid-cols-1 border border-b-0 border-dashed border-[#E2E8F0] md:grid-cols-3 bg-white">
          <li className="flex h-24 items-center gap-4 px-6 border-b border-dashed border-[#E2E8F0] md:border-b-0 lg:justify-center">
            <div className="flex size-10 items-center justify-center rounded-lg bg-[#166534]/10">
              <Layers className="size-5 text-[#166534]" />
            </div>
            <p className="text-sm font-semibold text-[#64748B]">Unified Project DNA</p>
          </li>
          <li className="flex h-24 items-center gap-4 px-6 border-l border-dashed border-[#E2E8F0] lg:justify-center">
            <div className="flex size-10 items-center justify-center rounded-lg bg-[#166534]/10">
              <Zap className="size-5 text-[#166534]" />
            </div>
            <p className="text-sm font-semibold text-[#64748B]">Multi-Model Sync</p>
          </li>
          <li className="flex h-24 items-center gap-4 px-6 border-l border-dashed border-[#E2E8F0] lg:justify-center">
            <div className="flex size-10 items-center justify-center rounded-lg bg-[#166534]/10">
              <ShieldCheck className="size-5 text-[#166534]" />
            </div>
            <p className="text-sm font-semibold text-[#64748B]">Context Lock™</p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export { Hero };