"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { useThemeStore } from "@/store/themeStore";
import { FiSun, FiMoon, FiSearch, FiGithub, FiVolumeX, FiVolume2, FiMenu, FiX } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import { CommandMenu } from "./CommandMenu";
import { useAudioStore } from "@/store/audioStore";

let audioInstance: HTMLAudioElement | null = null;

export function NavBar() {
  const pathname = usePathname();
  const router = useRouter();
  const toggleTheme = useThemeStore((state) => state.toggleTheme);
  const isDarkMode = useThemeStore((state) => state.isDarkMode);
  const [isCommandOpen, setIsCommandOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isMuted = useAudioStore((state) => state.isMuted);
  const toggleMute = useAudioStore((state) => state.toggleMute);
  const setIsMuted = useAudioStore((state) => state.setIsMuted);

  // Initialize and play/pause the audio instance
  useEffect(() => {
    if (typeof window !== "undefined") {
      if (!audioInstance) {
        audioInstance = new Audio("/assets/song.mp3");
        audioInstance.loop = true;
      }

      if (!isMuted) {
        audioInstance.play().catch((err) => {
          console.log("Autoplay waiting for user interaction.", err);
        });
      } else {
        audioInstance.pause();
      }
    }
  }, [isMuted]);

  // First interaction audio play recovery
  useEffect(() => {
    const handleFirstInteraction = () => {
      if (audioInstance && !isMuted && audioInstance.paused) {
        audioInstance.play().catch(() => {});
      }
      interactionEvents.forEach((event) => {
        document.removeEventListener(event, handleFirstInteraction);
      });
    };

    const interactionEvents = ["click", "touchstart", "keydown", "mousedown"];
    interactionEvents.forEach((event) => {
      document.addEventListener(event, handleFirstInteraction);
    });

    return () => {
      interactionEvents.forEach((event) => {
        document.removeEventListener(event, handleFirstInteraction);
      });
    };
  }, [isMuted]);

  // Block scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  // Setup Command Key shortcut (Ctrl+K or Cmd+K)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === "k") {
        e.preventDefault();
        setIsCommandOpen((prev) => !prev);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Experience", href: "/#experience" },
    { label: "Projects", href: "/projects" },
    { label: "Resume", href: "/resume" },
  ];

  const handleNavClick = (href: string, e: React.MouseEvent) => {
    if (href.startsWith("/#")) {
      e.preventDefault();
      router.push("/");
      setTimeout(() => {
        const id = href.replace("/#", "");
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        } else {
          window.scrollTo({ top: 400, behavior: "smooth" });
        }
      }, 100);
    }
  };

  return (
    <>
      <header className="sticky top-0 z-50 w-full bg-[#FFFFFF]/80 dark:bg-[#121212]/80 backdrop-blur-md border-b-[1px] border-dashed border-[#ABABAB] dark:border-[#444444] transition-colors duration-200">
        <div className="max-w-[701px] mx-auto w-full flex items-center justify-between h-[56px] px-4 md:px-[30px] border-x-[1px] border-dashed border-[#ABABAB] dark:border-[#444444]">
          
          {/* Brand/Logo */}
          <Link href="/" className="font-serif text-[30px] tracking-normal text-black dark:text-white select-none">
            S S
          </Link>

          {/* Nav Items */}
          <nav className="hidden sm:flex items-center gap-[18px]">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(item.href, e)}
                  className={`font-sans text-[13px] font-medium transition-colors hover:text-blue-600 dark:hover:text-blue-400 ${
                    isActive 
                      ? "text-blue-600 dark:text-blue-400" 
                      : "text-[#646464] dark:text-[#A0A0A0]"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Right Controls */}
          <div className="flex items-center gap-3">
            {/* Search Box Pill Button */}
            <button
              onClick={() => setIsCommandOpen(true)}
              className="flex items-center gap-2 px-2.5 py-1.5 rounded-full border border-neutral-300 dark:border-neutral-700 bg-neutral-50 dark:bg-[#1C1C1E] hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors text-[#646464] dark:text-[#A0A0A0]"
            >
              <FiSearch className="w-3.5 h-3.5" />
              <span className="font-sans text-[11px] hidden xs:inline">Search...</span>
              <kbd className="font-sans text-[9px] px-1.5 py-0.5 rounded bg-neutral-200 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 text-[#8C8C8C] leading-none">
                Ctrl K
              </kbd>
            </button>

            {/* GitHub Icon Link */}
            <a
              href="https://github.com/Sumit00s"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center w-8 h-8 rounded-full border border-neutral-300 dark:border-neutral-800 hover:bg-neutral-100 dark:hover:bg-neutral-800 text-black dark:text-white transition-colors"
              title="GitHub"
            >
              <FiGithub className="w-[15px] h-[15px]" />
            </a>

            {/* Sound Toggle Button */}
            <button
              onClick={toggleMute}
              className="flex items-center justify-center w-8 h-8 rounded-full border border-neutral-300 dark:border-neutral-800 hover:bg-neutral-100 dark:hover:bg-neutral-800 text-black dark:text-white transition-colors cursor-pointer"
              title={isMuted ? "Play Music" : "Mute Music"}
            >
              {isMuted ? (
                <FiVolumeX className="w-[15px] h-[15px]" />
              ) : (
                <FiVolume2 className="w-[15px] h-[15px]" />
              )}
            </button>

            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="flex items-center justify-center w-8 h-8 rounded-full border border-neutral-300 dark:border-neutral-800 hover:bg-neutral-100 dark:hover:bg-neutral-800 text-black dark:text-white transition-colors"
              title="Toggle Theme"
            >
              {isDarkMode ? (
                <FiSun className="w-[15px] h-[15px]" />
              ) : (
                <FiMoon className="w-[15px] h-[15px] text-neutral-800" />
              )}
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="flex sm:hidden items-center justify-center w-8 h-8 rounded-full border border-neutral-300 dark:border-neutral-800 hover:bg-neutral-100 dark:hover:bg-neutral-800 text-black dark:text-white transition-colors cursor-pointer"
              title="Menu"
            >
              <FiMenu className="w-[15px] h-[15px]" />
            </button>
          </div>

        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm sm:hidden"
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 z-[70] w-[260px] bg-[#FFFFFF] dark:bg-[#121212] border-l-[1px] border-dashed border-[#ABABAB] dark:border-[#444444] shadow-2xl p-6 flex flex-col gap-6 sm:hidden text-black dark:text-white transition-colors duration-200"
            >
              {/* Header */}
              <div className="flex items-center justify-between">
                <span className="font-serif text-[26px] tracking-normal text-black dark:text-white select-none">
                  S S
                </span>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center justify-center w-8 h-8 rounded-full border border-neutral-300 dark:border-neutral-800 hover:bg-neutral-100 dark:hover:bg-neutral-800 text-black dark:text-white transition-colors cursor-pointer"
                >
                  <FiX className="w-[15px] h-[15px]" />
                </button>
              </div>

              {/* Links */}
              <nav className="flex flex-col gap-4 mt-4">
                {navItems.map((item) => {
                  const isActive = pathname === item.href;
                  return (
                    <Link
                      key={item.label}
                      href={item.href}
                      onClick={(e) => {
                        handleNavClick(item.href, e);
                        setIsMobileMenuOpen(false);
                      }}
                      className={`font-sans text-[16px] font-medium py-1 transition-colors hover:text-blue-600 dark:hover:text-blue-400 ${
                        isActive
                          ? "text-blue-600 dark:text-blue-400"
                          : "text-[#646464] dark:text-[#A0A0A0]"
                      }`}
                    >
                      {item.label}
                    </Link>
                  );
                })}
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Command Search Menu Dialog */}
      <CommandMenu isOpen={isCommandOpen} onClose={() => setIsCommandOpen(false)} />
    </>
  );
}
