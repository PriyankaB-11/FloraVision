"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { FaPlay, FaChevronRight } from "react-icons/fa";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import type { Plant, Review } from "@/types";
import Button from "./Button";
import TestimonialCard from "./TestimonialCard";
import { PlantCardShape } from "./CardShapes";

type HeroBannerProps = {
  sliderPlants: Plant[];
  featuredReview: Review;
};

export default function HeroBanner({
  sliderPlants,
  featuredReview,
}: HeroBannerProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    slides: { perView: 1, spacing: 10 },
  });

  useEffect(() => {
    const interval = setInterval(() => {
      instanceRef.current?.next();
    }, 5000);
    return () => clearInterval(interval);
  }, [instanceRef]);

  return (
    <header
      id="home"
      className="grid grid-cols-1 md:grid-cols-[65%_35%] lg:grid-cols-[60%_40%] px-5 lg:px-10"
    >
      <div className="order-2 md:order-1 flex flex-col justify-between">
        <div className="text-center md:text-start mt-8 md:mt-0">
          <h1 className="text-[var(--color-text-primary)] font-semibold text-[2.5rem] md:text-[4rem] lg:text-[6rem] leading-[1.2]">
            Earth’s Exhale
          </h1>
          <p className="text-[var(--color-text-secondary)] font-medium md:ml-1 lg:ml-2 italic max-w-2xl">
            &quot;Earth Exhale&quot; symbolizes the purity and vitality of the
            Earth&apos;s natural environment and its essential role in sustaining
            life.
          </p>
          <div className="flex flex-wrap justify-center md:justify-start gap-5 items-center mt-5">
            <Button size="md">Buy Now</Button>
            <button
              type="button"
              className="inline-flex items-center gap-2 text-[var(--color-text-primary)] hover:opacity-80 transition-opacity cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              <span className="w-10 h-10 shrink-0 border-2 border-[var(--color-text-primary)] rounded-full inline-flex justify-center items-center box-border">
                <FaPlay className="text-[0.9rem] ml-[0.15rem]" aria-hidden="true" />
              </span>
              <span className="text-sm font-medium">Live Demo...</span>
            </button>
          </div>
        </div>

        <div className="flex justify-center md:justify-start mt-9 md:mt-28 lg:mt-36">
          <TestimonialCard review={featuredReview} variant="compact" />
        </div>
      </div>

      <div className="flex justify-center mt-12 order-1 md:order-2">
        <PlantCardShape id="hero-slider" className="w-64 h-[19rem] lg:w-72 lg:h-[21rem]">
          <div className="absolute inset-0 px-2 pb-2 flex flex-col overflow-hidden">
            <div className="flex-1 min-h-0 overflow-hidden">
              <div className="h-full flex keen-slider" ref={sliderRef}>
                {sliderPlants.map((plant) => (
                  <div
                    className="min-w-full h-full p-3 flex flex-col justify-end keen-slider__slide"
                    key={plant.name}
                  >
                    <div className="flex-[0_0_65%] flex items-center justify-center">
                      <Image
                        src={plant.img}
                        alt={plant.name}
                        width={260}
                        height={220}
                        className="max-h-full w-auto object-contain object-center"
                      />
                    </div>
                    <div className="flex-[0_0_35%] flex flex-col justify-center items-start pl-3 pr-1">
                      <span className="text-[var(--color-text-secondary)] text-[0.8rem] leading-tight">
                        {plant.category ?? "Indoor Plant"}
                      </span>
                      <h3 className="text-[var(--color-text-primary)] text-[1.2rem] font-normal mt-1 leading-tight">
                        {plant.name}
                      </h3>
                      <Button
                        size="sm"
                        borderTone="secondary"
                        className="mt-3"
                      >
                        Buy Now
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex justify-center items-center gap-2 pt-2 shrink-0">
              {sliderPlants.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  aria-label={`Go to slide ${idx + 1}`}
                  onClick={() => instanceRef.current?.moveToIdx(idx)}
                  className={`h-2 rounded-full cursor-pointer transition-all ${
                    currentSlide === idx
                      ? "bg-[var(--color-text-primary)] w-4"
                      : "bg-[var(--border-primary-color)] w-2"
                  }`}
                />
              ))}
            </div>
          </div>
          <button
            type="button"
            aria-label="Next slide"
            className="absolute bottom-[28%] right-[10%] z-10 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            onClick={() => instanceRef.current?.next()}
          >
            <FaChevronRight className="text-[var(--color-text-primary)] text-[0.9rem]" />
          </button>
        </PlantCardShape>
      </div>
    </header>
  );
}
