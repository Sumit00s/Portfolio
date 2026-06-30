"use client";

import React, { useState, useEffect } from "react";

export function AgeTicker() {
  const [age, setAge] = useState("");

  useEffect(() => {
    const birthDate = new Date("2004-05-20T00:00:00+05:30");
    const interval = setInterval(() => {
      const now = new Date();
      const diff = now.getTime() - birthDate.getTime();
      const ageInYears = diff / (365.2425 * 24 * 60 * 60 * 1000);
      setAge(ageInYears.toFixed(9));
    }, 50);
    return () => clearInterval(interval);
  }, []);

  if (!age) return null;

  return (
    <span className="font-mono text-[10px] text-[#646464] dark:text-[#A0A0A0] select-none tracking-tight">Since {age} years
    </span>
  );
}
