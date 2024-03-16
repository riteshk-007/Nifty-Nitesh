"use client";

import * as React from "react";
import { TbBulbOff, TbBulbFilled } from "react-icons/tb";
import { useTheme } from "next-themes";

export function ModeToggle() {
  const [mounted, setMounted] = React.useState(false);
  const { resolvedTheme, setTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  React.useEffect(() => setMounted(true), []);

  const toggleTheme = () => {
    setTheme(isDark ? "light" : "dark");
  };

  if (!mounted) {
    return (
      <div className="animate-pulse h-[1.2rem] w-[1.2rem] rounded-full bg-gray-500" />
    );
  }

  return (
    <button
      onClick={() => toggleTheme()}
      className=" flex items-center justify-center p-[6px] rounded-full bg-transparent  border-2 mx-2"
    >
      {isDark ? (
        <TbBulbFilled size={22} className="text-green-400" />
      ) : (
        <TbBulbOff size={22} className="text-black" />
      )}
    </button>
  );
}
