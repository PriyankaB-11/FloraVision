import Image from "next/image";
import { RiShoppingBag4Line } from "react-icons/ri";
import type { Plant } from "@/types";
import Button from "./Button";
import { PlantCardShape } from "./CardShapes";

type PlantCardProps = {
  plant: Plant;
  variant?: "grid" | "trending";
  imagePosition?: "left" | "right";
};

export default function PlantCard({
  plant,
  variant = "grid",
  imagePosition = "left",
}: PlantCardProps) {
  if (variant === "trending") {
    return <TrendingPlantCard plant={plant} imagePosition={imagePosition} />;
  }

  const cardId = `grid-${plant.name.replace(/\s/g, "-")}-${plant.price}`;

  return (
    <PlantCardShape
      id={cardId}
      className="w-80 h-[23rem] cursor-pointer transition duration-200 hover:scale-105 focus-within:scale-105"
    >
      <div className="absolute inset-0">
        <div className="w-60 h-[57%] -translate-y-20 mx-auto scale-110 flex items-end justify-center pointer-events-none">
          <Image
            src={plant.img}
            alt={plant.name}
            width={240}
            height={280}
            className="max-h-full w-auto object-contain"
          />
        </div>

        <div className="absolute bottom-0 left-0 right-0 flex flex-col gap-3 px-10 pb-9">
          <h3 className="text-[1.2rem] text-[var(--color-text-primary)] capitalize font-semibold leading-tight min-h-[1.5rem]">
            {plant.name}
          </h3>
          <p className="text-[0.8rem] text-[var(--color-text-secondary)] leading-snug h-12 line-clamp-3">
            {plant.title}
          </p>
          <div className="flex w-full justify-between items-center gap-2 pt-1">
            <span className="text-[var(--color-text-primary)] text-[1.2rem] font-medium leading-none">
              Rs. {plant.price}/-
            </span>
            <Button
              variant="icon"
              size="icon"
              aria-label={`Add ${plant.name} to cart`}
              className="shrink-0"
            >
              <RiShoppingBag4Line />
            </Button>
          </div>
        </div>
      </div>
    </PlantCardShape>
  );
}

function TrendingPlantCard({
  plant,
  imagePosition,
}: {
  plant: Plant;
  imagePosition: "left" | "right";
}) {
  return (
    <div className="w-full md:min-h-80 lg:min-h-[25rem] grid grid-cols-1 md:grid-cols-2 items-center rounded-[2rem] md:rounded-[5rem] lg:rounded-[8rem] bg-[var(--color-primary)] border-2 border-[var(--border-secondary-color)] backdrop-blur-sm overflow-hidden box-border">
      <div
        className={`flex items-end justify-center px-4 pt-4 md:pt-0 -translate-y-12 md:-translate-y-16 order-1 ${
          imagePosition === "right" ? "md:order-2" : ""
        }`}
      >
        <Image
          src={plant.img}
          alt={plant.name}
          width={448}
          height={400}
          className="max-h-[18rem] w-auto object-contain"
        />
      </div>
      <div
        className={`flex flex-col gap-4 justify-center px-6 md:px-10 lg:px-20 py-8 md:py-10 order-2 ${
          imagePosition === "right" ? "md:order-1" : ""
        }`}
      >
        <h3 className="text-[var(--color-text-primary)] capitalize font-bold text-[1.5rem] leading-snug">
          {plant.name}
        </h3>
        <p className="text-[var(--color-text-secondary)] font-medium text-[0.8rem] leading-relaxed">
          {plant.title}
        </p>
        <span className="text-[var(--color-text-primary)] font-bold text-[1.5rem] leading-none">
          Rs. {plant.price}/-
        </span>
        <div className="flex flex-wrap gap-4 items-center">
          <Button size="lg">Explore</Button>
          <Button variant="icon" size="icon" aria-label="Add to cart">
            <RiShoppingBag4Line />
          </Button>
        </div>
      </div>
    </div>
  );
}
