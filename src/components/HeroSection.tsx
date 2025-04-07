import React from "react";
import { cn } from "@/utils/cn";
import { Spotlight } from "./ui/Spotlight";

function HeroSection() {
  return (
    <div className="relative flex h-[50rem] w-full overflow-hidden rounded-md bg-black/[0.96] antialiased md:items-center md:justify-center">
      <div
        className={cn(
          "pointer-events-none absolute inset-0 [background-size:40px_40px] select-none",
          "[background-image:linear-gradient(to_right,#171717_1px,transparent_1px),linear-gradient(to_bottom,#171717_1px,transparent_1px)]"
        )}
      />

      <Spotlight
        className="-top-40 left-0 md:-top-20 md:left-60"
        fill="white"
      />
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 pt-24 pb-16 text-center flex flex-col items-center">
        <h1 className="bg-gradient-to-br from-yellow-100 via-white to-yellow-200 bg-clip-text text-transparent text-4xl md:text-7xl font-extrabold leading-tight drop-shadow-sm">
          Master the Art of Music
        </h1>
        <p className="mt-6 max-w-4xl text-lg md:text-xl text-neutral-200 tracking-wide">
          Whether you're strumming your first chord or composing your next
          masterpiece, our immersive music experience will guide you every step
          of the way. Learn from passionate instructors, explore a wide range of
          instruments and styles, and join a global community that lives and
          breathes music.
          <br className="hidden md:block" />
          <span className="block mt-4 italic text-neutral-300">
            It's more than just learning — it's a journey of expression,
            creativity, and self-discovery.
          </span>
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4 pb-4">
          <button className="px-6 py-3 bg-white text-black font-semibold rounded-xl hover:bg-white-300 transition">
            Start Your Musical Journey
          </button>
          <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
              Explore Courses
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
