"use client";

import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useThemeStore } from "@/store/themeStore";
import {
  FiSearch,
  FiX,
  FiFileText,
  FiHome,
  FiUser,
  FiBriefcase,
  FiFolder,
  FiLinkedin,
  FiGithub,
  FiMail,
  FiTwitter,
  FiSun,
  FiMoon
} from "react-icons/fi";

interface CommandItem {
  id: string;
  title: string;
  category: "Resume" | "Pages" | "Social Links" | "Theme";
  icon: React.ReactNode;
  action: () => void;
}

interface CommandMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CommandMenu({ isOpen, onClose }: CommandMenuProps) {
  const router = useRouter();
  const { isDarkMode, toggleTheme } = useThemeStore();
  const [search, setSearch] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Focus input when menu opens
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
      setSearch("");
      setActiveIndex(0);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const items: CommandItem[] = [
    // Resume Group
    {
      id: "view-resume",
      title: "View Resume",
      category: "Resume",
      icon: <FiFileText className="w-4 h-4" />,
      action: () => {
        window.open("/assets/Sumit_Sonawane_8788705720.pdf", "_blank");
      }
    },
    // Pages Group
    {
      id: "page-home",
      title: "Home",
      category: "Pages",
      icon: <FiHome className="w-4 h-4" />,
      action: () => {
        router.push("/");
      }
    },
    {
      id: "page-about",
      title: "About",
      category: "Pages",
      icon: <FiUser className="w-4 h-4" />,
      action: () => {
        router.push("/about");
      }
    },
    {
      id: "page-experience",
      title: "Experience",
      category: "Pages",
      icon: <FiBriefcase className="w-4 h-4" />,
      action: () => {
        router.push("/");
        setTimeout(() => {
          const element = document.getElementById("experience");
          if (element) {
            element.scrollIntoView({ behavior: "smooth" });
          } else {
            window.scrollTo({ top: 400, behavior: "smooth" });
          }
        }, 150);
      }
    },
    {
      id: "page-projects",
      title: "Projects",
      category: "Pages",
      icon: <FiFolder className="w-4 h-4" />,
      action: () => {
        router.push("/projects");
      }
    },
    {
      id: "page-resume",
      title: "Resume",
      category: "Pages",
      icon: <FiFileText className="w-4 h-4" />,
      action: () => {
        router.push("/resume");
      }
    },
    // Social Links Group
    {
      id: "social-linkedin",
      title: "LinkedIn",
      category: "Social Links",
      icon: <FiLinkedin className="w-4 h-4" />,
      action: () => {
        window.open("https://www.linkedin.com/in/sumit-sonawane-b63b9b306/", "_blank");
      }
    },
    {
      id: "social-github",
      title: "GitHub",
      category: "Social Links",
      icon: <FiGithub className="w-4 h-4" />,
      action: () => {
        window.open("https://github.com/Sumit00s", "_blank");
      }
    },
    {
      id: "social-mail",
      title: "Mail",
      category: "Social Links",
      icon: <FiMail className="w-4 h-4" />,
      action: () => {
        window.location.href = "mailto:sumitsonawane856@gmail.com";
      }
    },
    {
      id: "social-x",
      title: "X",
      category: "Social Links",
      icon: <FiTwitter className="w-4 h-4" />,
      action: () => {
        window.open("https://x.com/sumit_tsx", "_blank");
      }
    },
    // Theme Group
    {
      id: "theme-light",
      title: "Light",
      category: "Theme",
      icon: <FiSun className="w-4 h-4" />,
      action: () => {
        if (isDarkMode) toggleTheme();
      }
    },
    {
      id: "theme-dark",
      title: "Dark",
      category: "Theme",
      icon: <FiMoon className="w-4 h-4" />,
      action: () => {
        if (!isDarkMode) toggleTheme();
      }
    }
  ];

  // Filter items based on search query
  const filteredItems = items.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase()) ||
    item.category.toLowerCase().includes(search.toLowerCase())
  );

  // Group filtered items by category
  const categories: { [key: string]: CommandItem[] } = {};
  filteredItems.forEach((item) => {
    if (!categories[item.category]) {
      categories[item.category] = [];
    }
    categories[item.category].push(item);
  });

  const orderedCategories = ["Resume", "Pages", "Social Links", "Theme"].filter(
    (cat) => categories[cat] && categories[cat].length > 0
  );

  // Get flattened list of active items for keyboard navigation index mapping
  const flatActiveItems = orderedCategories.reduce<CommandItem[]>((acc, cat) => {
    return [...acc, ...categories[cat]];
  }, []);

  // Handle Keyboard Navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;

      if (e.key === "ArrowDown") {
        e.preventDefault();
        setActiveIndex((prev) => (prev + 1) % Math.max(1, flatActiveItems.length));
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setActiveIndex((prev) => (prev - 1 + flatActiveItems.length) % Math.max(1, flatActiveItems.length));
      } else if (e.key === "Enter") {
        e.preventDefault();
        if (flatActiveItems[activeIndex]) {
          flatActiveItems[activeIndex].action();
          onClose();
        }
      } else if (e.key === "Escape") {
        e.preventDefault();
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, activeIndex, flatActiveItems, onClose]);

  // Click outside to close
  const handleBackdropClick = (e: React.MouseEvent) => {
    if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
      onClose();
    }
  };

  // Adjust active index when search filters the list
  useEffect(() => {
    setActiveIndex(0);
  }, [search]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleBackdropClick}
          className="fixed inset-0 z-[100] flex items-start justify-center pt-[15vh] px-4 bg-black/60 backdrop-blur-sm"
        >
          <motion.div
            ref={containerRef}
            initial={{ scale: 0.95, opacity: 0, y: -20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: -20 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            className="w-full max-w-[540px] bg-[#1c1c1e] dark:bg-[#121212] border border-[#2c2c2e] dark:border-[#2a2a2a] rounded-xl overflow-hidden shadow-2xl flex flex-col text-white"
          >
            {/* Search Input Area */}
            <div className="flex items-center px-4 py-3.5 border-b border-[#2c2c2e] dark:border-[#2a2a2a]">
              <FiSearch className="w-5 h-5 text-neutral-400 mr-3 flex-shrink-0" />
              <input
                ref={inputRef}
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Type a command or search..."
                className="w-full bg-transparent border-none outline-none font-sans text-[14px] text-white placeholder-neutral-500"
              />
              <button
                onClick={onClose}
                className="p-1 rounded hover:bg-neutral-800 transition-colors text-neutral-400 hover:text-white"
              >
                <FiX className="w-4 h-4" />
              </button>
            </div>

            {/* List Area */}
            <div className="max-h-[350px] overflow-y-auto p-2 scrollbar-thin">
              {flatActiveItems.length === 0 ? (
                <div className="py-8 text-center text-[13px] text-neutral-400 font-sans">
                  No results found.
                </div>
              ) : (
                orderedCategories.map((category) => {
                  return (
                    <div key={category} className="mb-2">
                      {/* Category Title */}
                      <div className="px-3 py-1.5 text-[11px] font-sans font-medium text-neutral-400 uppercase tracking-wider">
                        {category}
                      </div>

                      {/* Items */}
                      <div className="flex flex-col gap-[2px]">
                        {categories[category].map((item) => {
                          const globalIndex = flatActiveItems.findIndex((x) => x.id === item.id);
                          const isActive = globalIndex === activeIndex;

                          return (
                            <button
                              key={item.id}
                              onClick={() => {
                                item.action();
                                onClose();
                              }}
                              onMouseEnter={() => setActiveIndex(globalIndex)}
                              className={`w-full flex items-center px-3 py-2.5 rounded-lg text-left transition-colors font-sans text-[13px] ${
                                isActive
                                  ? "bg-blue-600 text-white"
                                  : "text-neutral-200 hover:bg-neutral-800/60"
                              }`}
                            >
                              <span className={`mr-3 ${isActive ? "text-white" : "text-neutral-400"}`}>
                                {item.icon}
                              </span>
                              <span className="flex-grow">{item.title}</span>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  );
                })
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
