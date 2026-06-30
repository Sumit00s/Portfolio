"use client";

import React from "react";
import { TechnologyBadge } from "@/components/TechnologyBadge";
import { ProjectCard } from "@/components/ProjectCard";
import { PulsatingDot } from "@/components/PulsatingDot";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { RotatingTitle } from "@/components/RotatingTitle";

export default function Home() {
  return (
    <main className="w-full flex flex-col items-center bg-[#FFFFFF] dark:bg-[#121212]">
      {/* Banner */}
      <div className="w-full border-b-[1px] border-dashed border-[#ABABAB] dark:border-[#444444]">
        <div
          className="max-w-[701px] mx-auto w-full h-[150px] border-x-[1px] border-dashed border-[#ABABAB] dark:border-[#444444] flex items-center justify-center relative"
          style={{
            backgroundImage: "url('/assets/banner.avif')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        >
          <p className="font-serif text-[24px] md:text-[30px] text-white text-center px-4 drop-shadow-lg">
            A Laptop and an Insane Amount of Delusion.
          </p>
        </div>
      </div>

      {/* Hero Section */}
      <div className="w-full border-b-[1px] border-dashed border-[#ABABAB] dark:border-[#444444]">
        <div className="max-w-[701px] mx-auto w-full border-x-[1px] border-dashed border-[#ABABAB] dark:border-[#444444]">
          <section className="h-auto w-full relative flex items-center">
            <div className="w-full max-w-[635px] flex flex-col-reverse md:flex-row justify-between items-start md:items-center md:items-end mx-auto px-4 md:px-0 mt-[42px] mb-[52px] gap-8 md:gap-0">
              {/* Left Content */}
              <div className="w-full text-left md:text-center md:w-[409px] h-auto md:h-[206px] flex flex-col justify-between gap-6 md:gap-0 items-start md:items-start text-center md:text-left">
                <div className="flex flex-col gap-[6px] w-full">
                  <h1 className="font-serif text-[40px] md:text-[50px] leading-none text-[#000000] dark:text-[#FFFFFF]">Hey, I'm Sumit.</h1>
                  <div className="flex flex-col sm:flex-row items-start md:items-center gap-[10px] w-full min-w-[250px]">
                    <RotatingTitle />
                  </div>
                </div>

                <p className="font-sans text-[14px] md:text-[13px] text-[#000000] dark:text-[#E0E0E0] leading-snug">
                  Full-Stack Software Engineer from India who enjoys building real products that solve real problems — from idea to code to thousands of actual users using what I built.
                </p>

                <div className="flex flex-row items-center gap-[15px]">
                  <div className="flex items-center gap-2 h-auto">
                    <PulsatingDot />
                    <span className="font-sans font-medium text-[13px] text-green-600">
                      Open To <del>Work</del> , Connect & Contribute
                    </span>
                  </div>
                  <div className="flex items-center gap-[14px]">
                    <Link href="https://github.com/Sumit00s" className="text-[#727272] hover:text-[#0162EA] hover:-translate-y-[1px] transition-all duration-200"><FaGithub size={20} /></Link>
                    <Link href="https://www.linkedin.com/in/sumit-sonawane-b63b9b306/" className="text-[#727272] hover:text-[#0162EA] hover:-translate-y-[1px] transition-all duration-200"><FaLinkedin size={20} /></Link>
                    <Link href="https://x.com/sumit_tsx" className="text-[#727272] hover:text-[#0162EA] hover:-translate-y-[1px] transition-all duration-200"><FaXTwitter size={20} /></Link>
                  </div>
                </div>
              </div>

              {/* Right Avatar */}
              <div className="w-[150px] md:w-[206px] h-[150px] md:h-[206px] rounded-full overflow-hidden flex-shrink-0">
                <img src="/assets/hero-avatar.png" className=" w-full h-full object-cover" alt="Sumit Sonawane" />
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* Experience Title */}
      <div id="experience" className="w-full border-b-[1px] border-dashed border-[#ABABAB] dark:border-[#444444]">
        <div className="max-w-[701px] mx-auto w-full border-x-[1px] border-dashed border-[#ABABAB] dark:border-[#444444] px-[11px] md:px-[21px] py-[14px]">
          <h2 className="font-sans font-normal text-[24px] text-[#0162EA] uppercase">EXPERIENCE</h2>
        </div>
      </div>

      {/* Experience Content */}
      <div className="w-full border-b-[1px] border-dashed border-[#ABABAB] dark:border-[#444444]">
        <div className="max-w-[701px] mx-auto w-full border-x-[1px] border-dashed border-[#ABABAB] dark:border-[#444444] px-4 md:px-[30px] py-[30px]">
          <div className="flex flex-col gap-[30px]">
            {/* Hynts.in */}
            <div className="flex flex-col sm:flex-row w-full gap-[17px]">
              <div className="w-[47px] h-[47px] bg-[#A1A1A1] flex-shrink-0 overflow-hidden border border-black">
                <img src="/assets/hynts-logo.png" className="w-full h-full object-cover" alt="Hynts" />
              </div>
              <div className="w-full md:w-[564px] flex flex-col gap-[10px] items-center sm:items-start text-center sm:text-left">
                <div className="flex flex-col gap-[2px] w-full">
                  <div className="flex flex-row justify-between items-center w-full gap-2">
                    <h3 className="font-serif text-[18px] text-[#000000] dark:text-neutral-100">Hynts.in</h3>
                    <span className="font-sans text-[11px] text-[#737373] flex-shrink-0">Oct 2025 - Present</span>
                  </div>
                  <span className="font-sans text-[11px] text-[#9E9E9E]">— Founder</span>
                </div>
                <div className="flex flex-col gap-[8px]">
                  <p className="font-sans text-[13px] text-left text-[#646464] dark:text-[#A0A0A0] leading-snug">
                    <span className="font-bold text-[#585858] dark:text-[#A0A0A0]">• </span>Built and launched a full-stack platform on <span className="font-bold text-[#000000] dark:text-neutral-300">Next.js</span> and <span className="font-bold text-[#000000] dark:text-neutral-300">Supabase</span> for students to discover off-campus jobs and interview experiences & preparation, scaling to <span className="font-bold text-[#000000] dark:text-neutral-300">10,000+ active users</span>.
                  </p>
                  <p className="font-sans text-[13px] text-left text-[#646464] dark:text-[#A0A0A0] leading-snug">
                    <span className="font-bold text-[#585858] dark:text-[#A0A0A0]">• </span>Engineered <span className="font-bold text-[#000000] dark:text-neutral-300">server-side rendering</span>, infinite scrolling, and optimized database queries to handle <span className="font-bold text-[#000000] dark:text-neutral-300">60K+ page visits</span> with fast response times.
                  </p>
                </div>
              </div>
            </div>

            {/* Northern Trust */}
            <div className="flex flex-col sm:flex-row w-full gap-[17px]">
              <div className="w-[47px] h-[47px] bg-[#A1A1A1] flex-shrink-0 overflow-hidden border border-black">
                <img src="/assets/northern_trust_logo.jpg" className="w-full h-full object-cover" alt="Northern Trust" />
              </div>
              <div className="w-full md:w-[564px] flex flex-col gap-[10px] items-center sm:items-start text-center sm:text-left">
                <div className="flex flex-col gap-[2px] w-full">
                  <div className="flex flex-row justify-between items-center w-full gap-2">
                    <h3 className="font-serif text-[18px] text-[#000000] dark:text-neutral-100">Northern Trust</h3>
                    <span className="font-sans text-[11px] text-[#737373] flex-shrink-0">Aug 2026 - Present</span>
                  </div>
                  <span className="font-sans text-[11px] text-[#9E9E9E]">— Upcoming SWE Analyst</span>
                </div>
                <div className="flex flex-col gap-[8px]">
                  <p className="font-sans text-[13px] text-left text-[#646464] dark:text-[#A0A0A0] leading-snug">
                    <span className="font-bold text-[#585858] dark:text-[#A0A0A0]">• </span>Joining as a <span className="font-bold text-[#000000] dark:text-neutral-300">Software Engineer Analyst</span> to build scalable backend systems within a global financial services technology team.
                  </p>
                  <p className="font-sans text-[13px] text-left text-[#646464] dark:text-[#A0A0A0] leading-snug">
                    <span className="font-bold text-[#585858] dark:text-[#A0A0A0]">• </span>Bringing full-stack engineering experience and a strong <span className="font-bold text-[#000000] dark:text-neutral-300">System Design foundation</span> to contribute to high-impact, production-grade systems from day one.
                  </p>
                </div>
              </div>
            </div>

            {/* Capgemini */}
            <div className="flex flex-col sm:flex-row w-full gap-[17px]">
              <div className="w-[47px] h-[47px] bg-[#A1A1A1] flex-shrink-0 overflow-hidden border border-black">
                <img src="/assets/capgemini-logo.webp" className="w-full h-full object-cover" alt="Capgemini" />
              </div>
              <div className="w-full md:w-[564px] flex flex-col gap-[10px] items-center sm:items-start text-center sm:text-left">
                <div className="flex flex-col gap-[2px] w-full">
                  <div className="flex flex-row justify-between items-center w-full gap-2">
                    <h3 className="font-serif text-[18px] text-[#000000] dark:text-neutral-100">Capgemini</h3>
                    <span className="font-sans text-[11px] text-[#737373] flex-shrink-0">Jan 2026 - Apr 2026</span>
                  </div>
                  <span className="font-sans text-[11px] text-[#9E9E9E]">— SWE Analyst Trainee</span>
                </div>
                <div className="flex flex-col gap-[8px]">
                  <p className="font-sans text-[13px] text-left text-[#646464] dark:text-[#A0A0A0] leading-snug">
                    <span className="font-bold text-[#585858] dark:text-[#A0A0A0]">• </span>Completed intensive hands-on training in <span className="font-bold text-[#000000] dark:text-neutral-300">Java Full Stack</span> development covering <span className="font-bold text-[#000000] dark:text-neutral-300">Spring Boot</span>, Spring Security, Hibernate, and JDBC with PostgreSQL and MySQL.
                  </p>
                  <p className="font-sans text-[13px] text-left text-[#646464] dark:text-[#A0A0A0] leading-snug">
                    <span className="font-bold text-[#585858] dark:text-[#A0A0A0]">• </span>Built a Classical Business Management System as capstone project while applying testing and code quality practices using <span className="font-bold text-[#000000] dark:text-neutral-300">JUnit</span>, Mockito, and SonarQube.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Technologies Title */}
      <div className="w-full border-b-[1px] border-dashed border-[#ABABAB] dark:border-[#444444]">
        <div className="max-w-[701px] mx-auto w-full border-x-[1px] border-dashed border-[#ABABAB] dark:border-[#444444] px-[11px] md:px-[21px] py-[14px]">
          <h2 className="font-sans font-normal text-[24px] text-[#0162EA] uppercase">TECHNOLOGIES</h2>
        </div>
      </div>

      {/* Technologies Content */}
      <div className="w-full border-b-[1px] border-dashed border-[#ABABAB] dark:border-[#444444]">
        <div className="max-w-[701px] mx-auto w-full border-x-[1px] border-dashed border-[#ABABAB] dark:border-[#444444] px-4 md:px-[30px] py-[30px]">
          <div className="flex flex-col gap-[17px] w-full items-start text-left">
            {/* LANGUAGES */}
            <div className="flex flex-col gap-[7px] w-full items-start text-left">
              <span className="font-sans font-medium text-[12px] tracking-[0.21em] text-[#A8A5A5]">LANGUAGES</span>
              <div className="flex flex-wrap justify-start gap-[7.57px]">
                <TechnologyBadge icon="/assets/icon-javascript.svg" text="JavaScript" />
                <TechnologyBadge icon="/assets/icon-java.svg" text="Java" />
                <TechnologyBadge icon="/assets/icon-typescript.svg" text="TypeScript" />
                <TechnologyBadge icon="/assets/icon-python.svg" text="Python" />
                <TechnologyBadge icon="/assets/go-original.svg" text="Go" />
                <TechnologyBadge icon="/assets/cplusplus-original.svg" text="C++" />
              </div>
            </div>

            {/* FRONTEND */}
            <div className="flex flex-col gap-[7px] w-full items-start text-left">
              <span className="font-sans font-medium text-[12px] tracking-[0.21em] text-[#A8A5A5]">FRONTEND</span>
              <div className="flex flex-wrap justify-start gap-[7.57px]">
                <TechnologyBadge icon="/assets/icon-react.svg" text="React.js" />
                <TechnologyBadge icon="/assets/icon-nextjs.svg" text="Next.js" />
                <TechnologyBadge icon="/assets/icon-tailwindcss.svg" text="Tailwind CSS" />
                <TechnologyBadge icon="/assets/icon-zustand.svg" text="Zustand" />
                <TechnologyBadge icon="/assets/redux-original.svg" text="Redux" />
                <TechnologyBadge icon="/assets/icon-react-query.svg" text="TanStack Query" />
              </div>
            </div>

            {/* BACKEND & DB */}
            <div className="flex flex-col gap-[7px] w-full items-start text-left">
              <span className="font-sans font-medium text-[12px] tracking-[0.21em] text-[#A8A5A5]">BACKEND & DB</span>
              <div className="flex flex-col gap-[10px]">
                <div className="flex flex-wrap justify-start gap-[7.57px]">
                  <TechnologyBadge icon="/assets/icon-nodejs.svg" text="Node.js" borderDashed={false} />
                  <TechnologyBadge icon="/assets/icon-express.svg" text="Express.js" borderDashed={false} />
                  <TechnologyBadge icon="/assets/icon-fastapi.svg" text="FastAPI" borderDashed={false} />
                  <TechnologyBadge icon="/assets/springio-icon.svg" text="Spring Boot" borderDashed={false} />
                  <TechnologyBadge icon="/assets/icon-drizzle.svg" text="Drizzle" borderDashed={false} />
                  <TechnologyBadge icon="/assets/icon-zod.svg" text="Zod" borderDashed={false} />
                  <TechnologyBadge icon="/assets/postgresql-original-wordmark.svg" text="PostgreSQL" borderDashed={false} />
                  <TechnologyBadge icon="/assets/mysql-original-wordmark.svg" text="MySQL" borderDashed={false} />
                  <TechnologyBadge icon="/assets/graphql-icon.svg" text="GraphQL" borderDashed={false} />
                  <TechnologyBadge icon="/assets/icon-redis.svg" text="Redis" borderDashed={false} />
                  <TechnologyBadge icon="/assets/icon-mongodb.svg" text="MongoDB" />
                  <TechnologyBadge icon="/assets/icon-supabase.svg" text="Supabase" />
                </div>
              </div>
            </div>

            {/* AI */}
            <div className="flex flex-col gap-[7px] w-full items-start text-left">
              <span className="font-sans font-medium text-[12px] tracking-[0.21em] text-[#A8A5A5]">AI</span>
              <div className="flex flex-wrap justify-start gap-[7.57px]">
                <TechnologyBadge icon="/assets/icon-langchain.svg" text="LangChain" />
                <TechnologyBadge icon="/assets/icon-langgraph.svg" text="LangGraph" />
                <TechnologyBadge icon="/assets/openrouter.png" text="OpenRouter" />
                <TechnologyBadge icon="/assets/icon-hugging-face.svg" text="Hugging Face" />
              </div>
            </div>

            {/* INFRA & TOOLS */}
            <div className="flex flex-col gap-[7px] w-full items-start text-left">
              <span className="font-sans font-medium text-[12px] tracking-[0.21em] text-[#A8A5A5]">INFRA & TOOLS</span>
              <div className="flex flex-col gap-[10px]">
                <div className="flex flex-wrap justify-start gap-[7.57px]">
                  <TechnologyBadge icon="/assets/icon-docker.svg" text="Docker" borderDashed={false} />
                  <TechnologyBadge icon="/assets/icon-github.svg" text="GitHub" borderDashed={false} />
                  <TechnologyBadge icon="/assets/git-scm-icon.svg" text="Git" borderDashed={false} />
                  <TechnologyBadge icon="/assets/icon-vercel.svg" text="Vercel" borderDashed={false} />
                  <TechnologyBadge icon="/assets/icon-cloudflare.svg" text="Cloudflare" borderDashed={false} />
                  <TechnologyBadge icon="/assets/icon-aws.svg" text="AWS" borderDashed={false} />
                  <TechnologyBadge icon="/assets/icon-linux.svg" text="Linux" borderDashed={false} />
                  <TechnologyBadge icon="/assets/icon-figma.svg" text="Figma" borderDashed={false} />
                  <TechnologyBadge icon="/assets/icon-postman.svg" text="Postman" />
                  <TechnologyBadge icon="/assets/resend.png" text="Resend" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Things I've Built Title */}
      <div className="w-full border-b-[1px] border-dashed border-[#ABABAB] dark:border-[#444444]">
        <div className="max-w-[701px] mx-auto w-full border-x-[1px] border-dashed border-[#ABABAB] dark:border-[#444444] px-[11px] md:px-[21px] py-[14px]">
          <h2 className="font-sans font-normal text-[24px] text-[#0162EA] uppercase">THINGS I’VE BUILT</h2>
        </div>
      </div>

      {/* Things I've Built Content */}
      <div className="w-full border-b-[1px] border-dashed border-[#ABABAB] dark:border-[#444444]">
        <div className="max-w-[701px] mx-auto w-full border-x-[1px] border-dashed border-[#ABABAB] dark:border-[#444444] px-4 md:px-[30px] py-[30px]">
          <div className="flex flex-col gap-[31px] w-full md:w-[636px]">
            <ProjectCard
              title="Hynts.in"
              description="A full-stack platform helping students discover off-campus job openings, real interview experiences, and preparation resources, scaled to 10k active users."
              banner="/assets/hynts-banner.png"
              technologies={["Next.js", "React.js", "Supabase", "TypeScript", "TailwindCSS", "Node.js", "Google Analytics"]}
              liveLink="https://www.hynts.in/"
            />

            <ProjectCard
              title="Slide"
              description="A SaaS Instagram automation platform that helps creators auto-send personalized DM replies triggered by comment keywords, built for the creator economy."
              banner="/assets/slide-banner.png"
              technologies={["Next.js", "React.js", "Node.js", "Prisma ORM", "PostgreSQL", "Instagram Graph API", "Webhooks"]}
              repoLink="https://github.com/Sumit00s/slide"
            />

            <ProjectCard
              title="Prep.ai"
              description="An AI-powered mock interview platform with real-time voice agents that ask role-specific questions, record answers, and generate instant feedback for improvement."
              banner="/assets/prep-ai-banner.png"
              technologies={["Next.js", "Firebase", "TailwindCSS"]}
              liveLink="https://prep-ai-seven-alpha.vercel.app"
              repoLink="https://github.com/Sumit00s/Prep.ai"
            />

            <ProjectCard
              title="Krishna Speaks"
              description="A performance-optimized eBook-selling platform that grew organic traffic to 1.8K+ visitors and drove 207+ sales through seamless payment integration."
              banner="/assets/krishna-speaks-banner.png"
              technologies={["React.js", "TypeScript", "TailwindCSS", "Topmate API", "Google Analytics"]}
              liveLink="https://krishna-speaks.vercel.app"
              repoLink="https://github.com/Sumit00s/divine-krishna-landing"
            />

            <div className="flex item-center justify-end">
              <a href="/projects" className="self-start flex items-center gap-[4px] px-[10px] py-[3px] bg-[#EDEDED] dark:bg-[#2A2A2A] border-[0.7px] border-[#D0D0D0] dark:border-[#555555] hover:bg-[#E2E2E2] dark:hover:bg-[#333333] transition-colors">
                <span className="font-sans text-[12.67px] text-[#000000] dark:text-[#FFFFFF]">View all Projects</span>
                <img src="/assets/icon-arrow-bottom-left.svg" className="w-[13.37px] h-[13.37px] dark:filter dark:invert" alt="Arrow" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="w-full border-b-[1px] border-dashed border-[#ABABAB] dark:border-[#444444]">
        <div className="max-w-[701px] mx-auto w-full border-x-[1px] border-dashed border-[#ABABAB] dark:border-[#444444]">
          <Footer />
        </div>
      </div>

      {/* Bottom spacer */}
      <div className="w-full">
        <div className="max-w-[701px] mx-auto w-full h-[65px] border-x-[1px] border-dashed border-[#ABABAB] dark:border-[#444444] flex items-center justify-center">
          <span className="font-sans text-[11.5px] text-[#808080] dark:text-[#A0A0A0] select-none tracking-tight">
            Coded faster than a Red Bull pit stop 🏎️
          </span>
        </div>
      </div>
    </main>
  );
}
