"use client";

import { useId } from "react";

type SectionTitleProps = {
  title: string;
};

export default function SectionTitle({ title }: SectionTitleProps) {
  const gradientId = useId().replace(/:/g, "");

  return (
    <div className="flex items-center justify-center gap-3 md:gap-5 w-full max-w-4xl mx-auto px-2">
      <div className="w-7 md:w-10 shrink-0 rotate-180 translate-y-1">
        <SectionBracket gradientId={gradientId} />
      </div>
      <h2 className="text-center capitalize text-[1.25rem] sm:text-[1.4rem] md:text-[2rem] text-[var(--color-text-primary)] font-bold leading-tight">
        {title}
      </h2>
      <div className="w-7 md:w-10 shrink-0 translate-y-1">
        <SectionBracket gradientId={gradientId} />
      </div>
    </div>
  );
}

function SectionBracket({ gradientId }: { gradientId: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 74 75"
      fill="none"
      className="w-full h-auto"
      aria-hidden="true"
    >
      <path
        d="M71.5 72L71.5 26C71.5 13.2974 61.2025 3 48.5 3L2.99999 3.00001"
        stroke={`url(#section-bracket-${gradientId})`}
        strokeWidth={5}
        strokeLinecap="round"
      />
      <defs>
        <linearGradient
          id={`section-bracket-${gradientId}`}
          x1={72}
          y1={74}
          x2={3}
          y2={3}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#55B000" />
          <stop offset="0.500917" stopColor="white" stopOpacity="0.156606" />
          <stop offset={1} stopColor="#50790B" />
        </linearGradient>
      </defs>
    </svg>
  );
}
