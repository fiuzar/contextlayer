// src/components/layout/Header.tsx
"use client";

import * as React from "react";
import Link from "next/link";
import { ChevronDown, Layers, Zap, Lock, BookOpen, Users, Megaphone } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";

const platformFeatures = [
  { title: "Unified Context", href: "#", description: "Keep your project DNA persistent across every AI model.", icon: <Layers className="w-4 h-4" /> },
  { title: "Multi-Model Run", href: "#", description: "Compare GPT, Claude, and Gemini outputs side-by-side.", icon: <Zap className="w-4 h-4" /> },
  { title: "Context Lock", href: "#", description: "Version-control your instructions to prevent AI drift.", icon: <Lock className="w-4 h-4" /> },
];

const useCases = [
  { title: "For Product Managers", href: "#", description: "Draft PRDs and roadmaps with consistent context." },
  { title: "For Designers", href: "#", description: "Generate copy and design briefs that stay on-brand." },
  { title: "For Founders", href: "#", description: "Scale your founder-vibe across all AI-generated content." },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 font-bold text-xl tracking-tight">
          <div className="h-7 w-7 rounded-lg bg-primary flex items-center justify-center text-primary-foreground">
            <Layers className="w-4 h-4" />
          </div>
          ContextLayer
        </Link>

        {/* Desktop Nav */}
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>
            
            {/* Platform Dropdown */}
            <NavigationMenuItem>
              <NavigationMenuTrigger>Platform</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-100 gap-3 p-4 md:w-125 md:grid-cols-2 lg:w-150">
                  {platformFeatures.map((item) => (
                    <ListItem key={item.title} title={item.title} href={item.href} icon={item.icon}>
                      {item.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            {/* Use Cases Dropdown */}
            <NavigationMenuItem>
              <NavigationMenuTrigger>Use Cases</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-100 gap-3 p-4 md:w-125 md:grid-cols-2">
                  {useCases.map((item) => (
                    <ListItem key={item.title} title={item.title} href={item.href}>
                      {item.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            {/* Resources Link */}
            <NavigationMenuItem>
              <Link href="/pricing" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Pricing
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link href="/about" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  About Us
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

          </NavigationMenuList>
        </NavigationMenu>

        {/* CTAs */}
        <div className="flex items-center gap-3">
          <Button variant="ghost" size="sm" asChild className="hidden sm:flex">
            <Link href="/login">Log in</Link>
          </Button>
          <Button size="sm" className="rounded-full px-5 font-semibold">
            Start a Project
          </Button>
        </div>
      </div>
    </header>
  );
}

const ListItem = (({ className, title, children, icon, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="flex items-center gap-2 text-sm font-medium leading-none">
            {icon && <span className="text-primary">{icon}</span>}
            {title}
          </div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";