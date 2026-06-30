import { Metadata } from "next";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Resume | Sumit Sonawane",
  description: "View and download the Software Engineering resume of Sumit Sonawane, upcoming Software Engineer Analyst Trainee at Northern Trust.",
};

export default function Resume() {
  return (
    <main className="w-full min-h-screen flex flex-col items-center bg-[#FFFFFF] dark:bg-[#121212]">
      {/* Header Row */}
      <div className="w-full border-b-[1px] border-dashed border-[#ABABAB] dark:border-[#444444]">
        <div className="max-w-[701px] mx-auto w-full border-x-[1px] border-dashed border-[#ABABAB] dark:border-[#444444] px-[17px] py-[13px] md:px-[22px] md:py-[17px] gap-[8px]">
          <h1 className="font-sans font-normal text-[24px] text-[#0162EA] uppercase">RESUME</h1>
          <p className="font-sans font-normal text-[14px] md:text-[16px] text-[#000000] dark:text-[#E0E0E0] leading-snug w-full max-w-[636px]">
            4 months of zero-holiday training, 10k+ users shipped to, and one PDF to show for it. Here&apos;s the full picture.
          </p>
        </div>
      </div>

      {/* Resume Content Row */}
      <div className="w-full border-b-[1px] border-dashed border-[#ABABAB] dark:border-[#444444]">
        <div className="max-w-[701px] mx-auto w-full border-x-[1px] border-dashed border-[#ABABAB] dark:border-[#444444] flex flex-col items-center pb-[38px] pt-[20px] px-4 md:px-0">
          <div className="flex flex-col gap-[8px] w-full max-w-[491px]">
            {/* Download Button */}
            <div className="flex justify-end">
              <a
                href="/assets/Sumit_Sonawane_8788705720.pdf"
                download="Sumit_Sonawane_Resume.pdf"
                className="flex items-center gap-[6px] px-[12px] py-[5px] bg-[#0162EA] text-white font-sans text-[13px] hover:bg-[#0051C7] transition-colors"
              >
                ↓ Download Resume
              </a>
            </div>

            {/* Resume PDF Viewer */}
            <div className="w-full h-[500px] md:h-[650px] border-[1px] border-dashed border-[#ABABAB] dark:border-[#444444] flex justify-center overflow-hidden">
              <iframe
                src="/assets/Sumit_Sonawane_8788705720.pdf"
                className="w-full h-full border-none"
              ></iframe>
            </div>
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
