"use client";

import React from "react";
import Link from "next/link";
import { Footer } from "@/components/Footer";

export default function NotFound() {
  return (
    <main className="w-full min-h-screen flex flex-col items-center bg-[#FFFFFF] dark:bg-[#121212]">
      {/* 404 Content Section Row */}
      <div className="w-full border-b-[1px] border-dashed border-[#ABABAB] dark:border-[#444444]">
        <div className="max-w-[701px] mx-auto w-full border-x-[1px] border-dashed border-[#ABABAB] dark:border-[#444444] flex flex-col items-center justify-center py-[100px] px-6 md:px-[32px] gap-[16px] min-h-[400px]">
          <h1 className="font-sans font-normal text-[80px] md:text-[130px] leading-none text-[#0162EA] tracking-tight">404</h1>
          <p className="font-sans font-normal text-[16px] md:text-[20px] text-[#000000] dark:text-[#FFFFFF] text-center max-w-[400px] leading-snug">
            Oops! There is no such page
          </p>
          <Link
            href="/"
            className="mt-6 flex items-center justify-center px-[15px] py-[8px] gap-[6px] bg-[#EDEDED] dark:bg-[#2A2A2A] border-[1px] border-[#D0D0D0] dark:border-[#555555] hover:bg-[#E2E2E2] dark:hover:bg-[#333333] transition-colors"
          >
            <span className="font-sans text-[14px] text-[#000000] dark:text-[#FFFFFF]">Return Home</span>
            <img src="/assets/icon-arrow-bottom-left.svg" className="w-[12px] h-[12px] rotate-[-135deg] dark:filter dark:invert" alt="Return" />
          </Link>
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
