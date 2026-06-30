import { Metadata } from "next";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "About | Sumit Sonawane",
  description: "Learn more about Sumit Sonawane, an AI Full-Stack Software Engineer focused on curiosity, discipline, gym training, and building real products.",
};

export default function About() {
  return (
    <main className="w-full min-h-screen flex flex-col items-center bg-[#FFFFFF] dark:bg-[#121212]">
      {/* Row 1 */}
      <div className="w-full border-b-[1px] border-dashed border-[#ABABAB] dark:border-[#444444]">
        <div className="max-w-[701px] mx-auto w-full border-x-[1px] border-dashed border-[#ABABAB] dark:border-[#444444] flex flex-row min-h-[250px]">
          {/* Left: AB */}
          <div className="w-1/2 flex items-start justify-start border-r-[1px] border-dashed border-[#ABABAB] dark:border-[#444444] p-6">
            <span className="font-sans font-normal text-[80px] md:text-[130px] leading-none text-[#0062EA] tracking-tight">AB</span>
          </div>
          {/* Right: Text */}
          <div className="w-1/2 flex items-center justify-center p-6 md:p-10">
            <p className="font-sans font-normal text-[12px] md:text-lg text-[#000000] dark:text-[#E0E0E0] leading-snug">
              I like understanding how things work. Whether it&apos;s debugging a tricky issue, optimizing a backend, or building a product from scratch, I&apos;m happiest when I&apos;m solving real problems for real users.
            </p>
          </div>
        </div>
      </div>

      {/* Row 2 */}
      <div className="w-full border-b-[1px] border-dashed border-[#ABABAB] dark:border-[#444444]">
        <div className="max-w-[701px] mx-auto w-full border-x-[1px] border-dashed border-[#ABABAB] dark:border-[#444444] flex flex-row-reverse md:flex-row min-h-[250px]">
          {/* Left: Text (Appears first on mobile) */}
          <div className="w-1/2 flex items-center justify-center border-r-[1px] border-dashed border-[#ABABAB] dark:border-[#444444] p-6 md:p-10 order-2 md:order-1">
            <p className="font-sans font-normal text-[12px] md:text-lg text-[#000000] dark:text-[#E0E0E0] leading-snug">
              For me, every project is a conversation between curiosity and discipline — from a Krishna quotes page with 54k followers to a platform serving 10k+ students.
            </p>
          </div>
          {/* Right: OU */}
          <div className="w-1/2 flex items-end justify-end p-6 order-1 md:order-2 border-dashed border-[#ABABAB] dark:border-[#444444]">
            <span className="font-sans font-normal text-[80px] md:text-[130px] leading-none text-[#0062EA] tracking-tight">OU</span>
          </div>
        </div>
      </div>

      {/* Row 3 */}
      <div className="w-full border-b-[1px] border-dashed border-[#ABABAB] dark:border-[#444444]">
        <div className="max-w-[701px] mx-auto w-full border-x-[1px] border-dashed border-[#ABABAB] dark:border-[#444444] flex flex-row min-h-[250px]">
          {/* Left: T */}
          <div className="w-1/2 flex items-start justify-start border-r-[1px] border-dashed border-[#ABABAB] dark:border-[#444444] p-6">
            <span className="font-sans font-normal text-[80px] md:text-[130px] leading-none text-[#0062EA] tracking-tight">T</span>
          </div>
          {/* Right: Text */}
          <div className="w-1/2 flex items-center justify-center p-6 md:p-10">
            <p className="font-sans font-normal text-[12px] md:text-lg text-[#000000] dark:text-[#E0E0E0] leading-snug">
              I don&apos;t mind spending hours on a difficult bug or 4 months of zero-holiday training if it means understanding something deeply. For me, engineering is about curiosity, persistence, and building things that actually make sense.
            </p>
          </div>
        </div>
      </div>

      {/* Row 4 */}
      <div className="w-full border-b-[1px] border-dashed border-[#ABABAB] dark:border-[#444444]">
        <div className="max-w-[701px] mx-auto w-full border-x-[1px] border-dashed border-[#ABABAB] dark:border-[#444444] flex flex-row-reverse md:flex-row min-h-[250px]">
          {/* Left: Text */}
          <div className="w-1/2 flex items-center justify-center border-r-[1px] border-dashed border-[#ABABAB] dark:border-[#444444] p-6 md:p-10 order-2 md:order-1">
            <p className="font-sans font-normal text-[12px] md:text-lg text-[#000000] dark:text-[#E0E0E0] leading-snug">
              Fueled by curiosity, gym discipline, and the occasional &quot;how did I even build that&quot; moment.
            </p>
          </div>
          {/* Right: ME */}
          <div className="w-1/2 flex items-end justify-end p-6 order-1 md:order-2 border-dashed border-[#ABABAB] dark:border-[#444444]">
            <span className="font-sans font-normal text-[80px] md:text-[130px] leading-none text-[#0062EA] tracking-tight">ME</span>
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
