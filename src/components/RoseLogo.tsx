import React from "react";

interface RoseLogoProps {
  className?: string;
  size?: number;
  hasBackground?: boolean;
}

export const RoseLogo: React.FC<RoseLogoProps> = ({
  className = "",
  size = 48,
  hasBackground = false,
}) => {
  return (
    <div
      className={`inline-flex items-center justify-center ${
        hasBackground
          ? "bg-gradient-to-br from-luxury-red-900 to-luxury-red-950 p-3 rounded-full border border-luxury-gold-400/30 shadow-[0_0_15px_rgba(179,139,60,0.15)]"
          : ""
      } ${className}`}
      style={{ width: hasBackground ? size + 24 : size, height: hasBackground ? size + 24 : size }}
    >
      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full transition-all duration-300 hover:scale-105"
      >
        <defs>
          <linearGradient id="gold-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#F4EDD9" />
            <stop offset="30%" stopColor="#DAC184" />
            <stop offset="70%" stopColor="#B38B3C" />
            <stop offset="100%" stopColor="#795724" />
          </linearGradient>
          <filter id="gold-glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="1.5" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Outer Elegant Ring */}
        <circle
          cx="50"
          cy="50"
          r="46"
          stroke="url(#gold-grad)"
          strokeWidth="1.5"
          strokeDasharray="2 2"
          className="opacity-60"
        />
        <circle
          cx="50"
          cy="50"
          r="43"
          stroke="url(#gold-grad)"
          strokeWidth="0.75"
          className="opacity-40"
        />

        {/* Outer Petals */}
        <path
          d="M 50 15 C 32 15 22 30 22 48 C 22 68 38 82 50 82 C 62 82 78 68 78 48 C 78 30 68 15 50 15 Z"
          stroke="url(#gold-grad)"
          strokeWidth="1.5"
          strokeLinecap="round"
          className="opacity-70"
        />

        {/* Interlocking Golden Petal Outlines */}
        {/* Top/Back layers */}
        <path
          d="M 50 20 C 40 22 32 30 32 42 C 32 58 45 74 50 74 C 55 74 68 58 68 42 C 68 30 60 22 50 20 Z"
          stroke="url(#gold-grad)"
          strokeWidth="1.25"
          strokeLinecap="round"
        />

        {/* Left main petal */}
        <path
          d="M 28 42 C 28 58 40 70 50 70 C 42 66 38 52 40 40 C 42 32 46 26 50 24"
          stroke="url(#gold-grad)"
          strokeWidth="1.5"
          strokeLinecap="round"
        />

        {/* Right main petal */}
        <path
          d="M 72 42 C 72 58 60 70 50 70 C 58 66 62 52 60 40 C 58 32 54 26 50 24"
          stroke="url(#gold-grad)"
          strokeWidth="1.5"
          strokeLinecap="round"
        />

        {/* Central Rose Bud Spiral */}
        <path
          d="M 50 35 C 44 37 42 43 43 48 C 45 54 53 56 56 52 C 59 48 58 41 53 39 C 49 38 46 41 47 45 C 48 48 51 49 53 47"
          stroke="url(#gold-grad)"
          strokeWidth="1.5"
          strokeLinecap="round"
          filter="url(#gold-glow)"
        />

        {/* Two Delicate Lower Accent Leaves */}
        <path
          d="M 32 72 C 26 73 18 70 14 64 C 18 61 26 62 30 66 Z"
          fill="url(#gold-grad)"
          className="opacity-80"
        />
        <path
          d="M 68 72 C 74 73 82 70 86 64 C 82 61 74 62 70 66 Z"
          fill="url(#gold-grad)"
          className="opacity-80"
        />

        {/* Small Elegant Dots / Seeds for luxurious feel */}
        <circle cx="50" cy="8" r="1.5" fill="url(#gold-grad)" />
        <circle cx="12" cy="50" r="1.2" fill="url(#gold-grad)" />
        <circle cx="88" cy="50" r="1.2" fill="url(#gold-grad)" />
        <circle cx="50" cy="92" r="1.5" fill="url(#gold-grad)" />
      </svg>
    </div>
  );
};
