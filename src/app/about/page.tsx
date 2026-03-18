"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, User, ArrowRight, CheckCircle2, Globe, GraduationCap, Twitter } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/Button";

interface TeamMember {
  name: string;
  role: string;
  image?: string;
  github?: string;
  linkedin?: string;
  website?: string;
  scholar?: string;
  twitter?: string;
}

const leadership: TeamMember[] = [
  {
    name: "Brando Miranda",
    role: "Founder & President",
    image: "/team/Brando.png",
    github: "https://brando90.github.io/brandomiranda/",
    linkedin: "https://www.linkedin.com/in/brando-miranda-40821046/",
  },
  {
    name: "Shurui Liu",
    role: "Vice President",
    image: "/team/Shurui.jpg",
    website: "https://shurui.people.stanford.edu/",
    github: "https://github.com/srliu3264",
    linkedin: "https://www.linkedin.com/in/shurui-liu-5161042a3/"
  },
  {
    name: "Fred Rajasekaran",
    role: "Financial Officer",
    image: "/team/Fred.jpg",
    website: "https://sites.google.com/view/fredraj/"
  },
  {
    name: "Sophia",
    role: "External Relations & Financial Officer",
  },
  {
    name: "William Peng",
    role: "Compute Lead",
    image: "/team/William.jpg",
    linkedin: "https://www.linkedin.com/in/williamgpeng/",
  },
  {
    name: "Holger Molin",
    role: "Compute Lead",
    github: "https://github.com",
    linkedin: "https://linkedin.com",
  },
  {
    name: "Henry Bosch",
    role: "Leadership",
    website: "https://henrybosch.github.io/"
  },
  {
    name: "Jianfeng Xue",
    role: "Media",
    github: "https://github.com",
    linkedin: "https://linkedin.com",
  },
  {
    name: "Matt Chen",
    role: "Media",
    github: "https://github.com",
    linkedin: "https://linkedin.com",
  },
  {
    name: "Don Poindexter",
    role: "Leadership",
    image: "/team/Don_Poindexter.jpg",
    github: "https://github.com/patternscientist",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const TeamMemberCard = ({ member }: { member: TeamMember }) => (
  <motion.div 
    variants={item}
    className="flex flex-col group"
  >
    {/* Image Container */}
    <div className="relative aspect-square w-full bg-stone-200 rounded-2xl overflow-hidden mb-4 shadow-sm group-hover:shadow-md transition-all duration-300">
      {member.image ? (
        <Image
          src={member.image}
          alt={member.name}
          fill
          className="object-cover"
        />
      ) : (
        <div className="absolute inset-0 bg-gradient-to-br from-stone-200 to-stone-300 flex items-center justify-center text-stone-400">
           <User className="w-12 h-12 opacity-50" />
        </div>
      )}
    </div>

    {/* Text Content */}
    <div className="space-y-1">
      <h3 className="text-xl font-bold text-stone-900 leading-tight group-hover:text-stone-700 transition-colors">
        {member.name}
      </h3>
      <p className="text-stone-500 font-medium text-sm">
        {member.role}
      </p>
      
      {/* Social Icons Row */}
      <div className="flex items-center gap-3 pt-2">
        {member.linkedin && (
          <Link href={member.linkedin} target="_blank" className="text-stone-400 hover:text-[#0077b5] transition-colors">
            <Linkedin className="w-4 h-4" />
          </Link>
        )}
        {member.twitter && (
          <Link href={member.twitter} target="_blank" className="text-stone-400 hover:text-stone-900 transition-colors">
            <Twitter className="w-4 h-4" />
          </Link>
        )}
        {member.website && (
          <Link href={member.website} target="_blank" className="text-stone-400 hover:text-stone-900 transition-colors">
            <Globe className="w-4 h-4" />
          </Link>
        )}
        {member.scholar && (
          <Link href={member.scholar} target="_blank" className="text-stone-400 hover:text-stone-900 transition-colors">
            <GraduationCap className="w-4 h-4" />
          </Link>
        )}
        {member.github && (
          <Link href={member.github} target="_blank" className="text-stone-400 hover:text-stone-900 transition-colors">
            <Github className="w-4 h-4" />
          </Link>
        )}
      </div>
    </div>
  </motion.div>
);

export default function About() {
  return (
    <div className="container mx-auto px-6 py-16 md:py-24 max-w-6xl">
      <motion.div
        initial="hidden"
        animate="show"
        variants={container}
        className="space-y-24"
      >
        {/* Intro & Mission */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div variants={item} className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-serif font-bold tracking-tight text-stone-900">
              About Us
            </h1>
            <p className="text-lg text-stone-600 leading-relaxed">
              The Stanford AI for Lean club is a student-run organization focused on the intersection of artificial intelligence and formal theorem proving. 
            </p>
            <p className="text-lg text-stone-600 leading-relaxed">
              We believe that formal verification is the future of mathematics and software engineering, and that AI will play a crucial role in making it accessible.
            </p>
          </motion.div>
          
          <motion.div variants={item} className="bg-stone-50 p-8 rounded-3xl border border-stone-100 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-stone-100 rounded-full -mr-16 -mt-16 opacity-50" />
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-stone-100 rounded-full -ml-12 -mb-12 opacity-50" />
            
            <h3 className="font-serif font-bold text-stone-900 mb-6 text-xl relative z-10">Our Mission</h3>
            <ul className="space-y-4 relative z-10">
              {[
                "Educate students on Lean 4 and formal verification.",
                "Research new methods for AI-assisted theorem proving.",
                "Collaborate with the global Lean community."
              ].map((text, i) => (
                <li key={i} className="flex gap-3 items-start text-stone-700">
                  <CheckCircle2 className="w-5 h-5 text-stone-400 mt-0.5 flex-shrink-0" />
                  <span>{text}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Leadership Section */}
        <motion.div variants={item} className="space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-stone-200 pb-8">
            <div className="space-y-2">
              <h2 className="text-4xl font-serif font-bold text-stone-900">Team</h2>
              <p className="text-stone-500 max-w-md">
                Led by passionate students and advised by faculty at Stanford.
              </p>
            </div>
            {/* Optional: Add a "View Alumni" or similar link here if needed */}
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
            {leadership.map((member, index) => (
              <TeamMemberCard key={index} member={member} />
            ))}
          </div>
        </motion.div>

        {/* Join Us Section */}
        <motion.div variants={item} className="relative rounded-3xl overflow-hidden">
          <div className="absolute inset-0 bg-stone-900" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#333_1px,transparent_1px),linear-gradient(to_bottom,#333_1px,transparent_1px)] bg-[size:2rem_2rem] opacity-20" />
          
          <div className="relative p-10 md:p-16 text-center space-y-8">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-50">Join the Community</h2>
            <p className="text-stone-300 max-w-2xl mx-auto text-lg leading-relaxed">
              We welcome students from all backgrounds. Whether you're a math theorist, an AI researcher, or just curious, there's a place for you here.
            </p>
            <div className="pt-4">
              <Link href="mailto:contact@stanfordailean.com">
                <Button variant="primary" className="bg-white text-stone-900 hover:bg-stone-100 hover:text-stone-900 border-none">
                  Get in Touch
                </Button>
              </Link>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
