"use client";

import { useState } from "react";
import Image from "next/image";
import { FaChevronRight } from "react-icons/fa";
import type { Plant } from "@/types";
import Button from "./Button";
import SectionTitle from "./SectionTitle";

const O2_COPY = {
  title: "We Have Small And Best O2 Plants Collection's",
  paragraph1:
    'Oxygen-producing plants, often referred to as "O2 plants," are those that release oxygen into the atmosphere through the process of photosynthesis.',
  paragraph2:
    "Many plants can help filter out pollutants and toxins from the air, such as formaldehyde, benzene, and trichloroethylene. This makes the air cleaner and healthier to breathe.",
};

type O2PlantsSectionProps = {
  plants: Plant[];
};

export default function O2PlantsSection({ plants }: O2PlantsSectionProps) {
  const slides = plants.slice(0, 4);
  const [activeIndex, setActiveIndex] = useState(0);
  const current = slides[activeIndex] ?? plants[0];

  const goPrev = () => setActiveIndex((i) => (i === 0 ? i : i - 1));
  const goNext = () =>
    setActiveIndex((i) => (i === slides.length - 1 ? i : i + 1));

  return (
    <section id="o2-plants" className="mt-28 mb-12 px-5 lg:px-10 flex flex-col gap-24">
      <SectionTitle title="Our Best o2" />
      <div className="w-full md:min-h-[30rem] grid grid-cols-1 md:grid-cols-2 items-center rounded-[2.5rem] md:rounded-[5rem] bg-[var(--color-primary)] border-2 border-[var(--border-primary-color)] box-border overflow-hidden">
        <div className="flex justify-center items-center py-8 lg:-translate-y-12">
          <Image
            src={current.img}
            alt={current.name}
            width={480}
            height={480}
            className="max-w-[30rem] w-full h-auto object-contain animate-fade-in"
          />
        </div>
        <div className="flex flex-col justify-center gap-6 md:gap-8 p-6 md:p-10 lg:p-16">
          <h2 className="text-[var(--color-text-primary)] font-medium text-[1.6rem] leading-snug animate-fade-right">
            {O2_COPY.title}
          </h2>
          <p className="text-[var(--color-text-secondary)] leading-relaxed animate-fade-right">
            {O2_COPY.paragraph1}
          </p>
          <p className="text-[var(--color-text-secondary)] leading-relaxed animate-fade-right">
            {O2_COPY.paragraph2}
          </p>
          <div className="w-full flex flex-wrap justify-between items-center gap-4 mt-2">
            <Button size="lg">Explore</Button>
            <div className="flex items-center justify-between gap-3 min-w-[6rem] text-[0.9rem]">
              <button
                type="button"
                aria-label="Previous slide"
                onClick={goPrev}
                className={`inline-flex items-center justify-center scale-x-[-1] cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white ${
                  activeIndex === 0
                    ? "text-[var(--border-primary-color)]"
                    : "text-[var(--color-text-primary)]"
                }`}
              >
                <FaChevronRight />
              </button>
              <span className="text-[var(--color-text-primary)] font-medium whitespace-nowrap">
                0{activeIndex + 1}/
                <span className="text-[0.7rem]"> 0{slides.length}</span>
              </span>
              <button
                type="button"
                aria-label="Next slide"
                onClick={goNext}
                className={`inline-flex items-center justify-center cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white ${
                  activeIndex === slides.length - 1
                    ? "text-[var(--border-primary-color)]"
                    : "text-[var(--color-text-primary)]"
                }`}
              >
                <FaChevronRight />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
