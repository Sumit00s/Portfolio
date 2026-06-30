import React from "react";
import cornerTl from "@/assets/corner-tl.svg";
import cornerTr from "@/assets/corner-tr.svg";
import cornerBl from "@/assets/corner-bl.svg";
import cornerBr from "@/assets/corner-br.svg";

interface SectionTagProps {
  text: string;
  width?: string;
}

export function SectionTag({ text, width }: SectionTagProps) {
  const cornerTlSrc = cornerTl && typeof cornerTl === "object" ? cornerTl.src : cornerTl;
  const cornerTrSrc = cornerTr && typeof cornerTr === "object" ? cornerTr.src : cornerTr;
  const cornerBlSrc = cornerBl && typeof cornerBl === "object" ? cornerBl.src : cornerBl;
  const cornerBrSrc = cornerBr && typeof cornerBr === "object" ? cornerBr.src : cornerBr;

  return (
    <div className={`relative flex items-center justify-center h-[38px] ${width ? width : "w-max px-[20px]"}`}>
      <div className="absolute top-[1px] bottom-[1px] left-[1px] right-[1px] bg-primary-light dark:bg-blue-600/15 flex items-center justify-center">
        <span className="text-primary font-sans text-[18px] leading-none whitespace-nowrap">{text}</span>
      </div>
      {/* Top Left */}
      <img src={cornerTlSrc} className="absolute top-0 left-0 w-[6px] h-[6px]" alt="" />
      {/* Top Right */}
      <img src={cornerTrSrc} className="absolute top-0 right-0 w-[5px] h-[7px]" alt="" />
      {/* Bottom Left */}
      <img src={cornerBlSrc} className="absolute bottom-0 left-[0.83px] w-[5px] h-[7px]" alt="" />
      {/* Bottom Right */}
      <img src={cornerBrSrc} className="absolute bottom-0 right-[0.83px] w-[6px] h-[6px]" alt="" />
    </div>
  );
}
