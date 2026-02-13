"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="container mx-auto px-6 py-16 md:py-24 max-w-4xl">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="space-y-12"
      >
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl font-serif font-bold tracking-tight text-stone-900">
            About Us
          </h1>
          <p className="text-lg text-stone-700 leading-relaxed">
            The Stanford AI for Lean club is a student-run organization focused on the intersection of artificial intelligence and formal theorem proving. We believe that formal verification is the future of mathematics and software engineering, and that AI will play a crucial role in making it accessible.
          </p>
          <p className="text-lg text-stone-700 leading-relaxed">
            Our mission is to:
          </p>
          <ul className="list-disc list-inside space-y-2 text-lg text-stone-700 pl-4">
            <li>Educate students on Lean 4 and formal verification.</li>
            <li>Research new methods for AI-assisted theorem proving.</li>
            <li>Collaborate with the global Lean community.</li>
          </ul>
        </div>

        <div className="space-y-6 pt-8 border-t border-stone-200">
          <h2 className="text-3xl font-serif font-bold text-stone-900">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6 bg-white rounded-lg shadow-sm border border-stone-100">
              <h3 className="text-xl font-bold text-stone-900">Leadership</h3>
              <p className="text-stone-600 mt-2">
                Led by passionate students and advised by faculty at Stanford.
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-sm border border-stone-100">
              <h3 className="text-xl font-bold text-stone-900">Join Us</h3>
              <p className="text-stone-600 mt-2">
                We welcome students from all backgrounds. No prior experience with Lean is required.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
