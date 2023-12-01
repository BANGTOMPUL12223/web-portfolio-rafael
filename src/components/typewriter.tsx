"use client";
import { Typewriter } from "react-simple-typewriter";

export default function TypewriterText() {
  return (
    <div className="flex md:m-0 m-auto text-xl font-semibold bg-gradient-to-r from-white to-yellow-300 text-transparent bg-clip-text">
      <Typewriter
        words={[
          "Full-stack Engineer",
          "Informatics Student",
          "Web Developer",
          "Tech Enthusiast",
        ]}
        loop
        cursor
      />
      |
    </div>
  );
}
