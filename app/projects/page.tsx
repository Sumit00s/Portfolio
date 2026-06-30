import { Metadata } from "next";
import { ProjectCard } from "@/components/ProjectCard";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Projects | Sumit Sonawane",
  description: "Detailed breakdown of software projects built by Sumit Sonawane, including SaaS platforms, voice-agent mock interview tools, and Instagram comment automation.",
};

export default function Projects() {
  return (
    <main className="w-full min-h-screen flex flex-col items-center bg-[#FFFFFF] dark:bg-[#121212]">
      {/* Header Row */}
      <div className="w-full border-b-[1px] border-dashed border-[#ABABAB] dark:border-[#444444]">
        <div className="max-w-[701px] mx-auto w-full border-x-[1px] border-dashed border-[#ABABAB] dark:border-[#444444] px-[17px] py-[13px] md:px-[22px] md:py-[17px] gap-[8px]">
          <h1 className="font-sans font-normal text-[24px] text-[#0162EA] uppercase">PROJECTS</h1>
          <p className="font-sans font-normal text-[14px] md:text-[16px] text-[#000000] dark:text-[#E0E0E0] leading-snug w-full max-w-[636px]">
            Not side projects — real products. Real users. Real problems solved. Each one taught me something no tutorial ever could.
          </p>
        </div>
      </div>

      {/* Projects List Row */}
      <div className="w-full border-b-[1px] border-dashed border-[#ABABAB] dark:border-[#444444]">
        <div className="max-w-[701px] mx-auto w-full border-x-[1px] border-dashed border-[#ABABAB] dark:border-[#444444] flex flex-col items-center pb-[38px] pt-[20px] px-4 md:px-0">
          <div className="flex flex-col gap-[31px] w-full max-w-[636px]">
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
          </div>
        </div>
      </div>

      {/* Footer Row */}
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
