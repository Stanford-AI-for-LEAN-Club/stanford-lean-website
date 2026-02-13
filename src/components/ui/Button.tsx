"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  className?: string;
  variant?: "primary" | "outline";
}

export const Button = ({ children, href, className, variant = "primary" }: ButtonProps) => {
  const baseClasses = "inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 transform-gpu";
  
  const variants = {
    primary: "bg-stone-900 text-stone-50 hover:bg-stone-800 hover:scale-[1.02] shadow-sm hover:shadow-md",
    outline: "border border-stone-200 text-stone-900 bg-transparent hover:bg-stone-100 hover:border-stone-300",
  };

  const content = (
    <motion.div
      whileTap={{ scale: 0.98 }}
      className={cn(baseClasses, variants[variant], className)}
    >
      {children}
    </motion.div>
  );

  if (href) {
    return <Link href={href}>{content}</Link>;
  }

  return <button>{content}</button>;
};
