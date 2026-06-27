import Navbar from "@/components/Navbar";
import HeroBanner from "@/components/HeroBanner";
import PlantCard from "@/components/PlantCard";
import SectionTitle from "@/components/SectionTitle";
import TestimonialCard from "@/components/TestimonialCard";
import O2PlantsSection from "@/components/O2PlantsSection";
import Footer from "@/components/Footer";
import {
  topSellingPlants,
  trendingPlants,
  heroSliderPlants,
} from "@/data/products";
import { reviews, heroReview } from "@/data/reviews";

export default function Home() {
  return (
    <div
      className="min-h-screen flex flex-col bg-[url(/images/home/homeBG.jpg)] bg-[length:170%] bg-[position:center_top] md:bg-[length:100%] bg-no-repeat"
      style={{ backgroundColor: "var(--color-background)" }}
    >
      <Navbar />
      <main className="flex-1">
        <HeroBanner
          sliderPlants={heroSliderPlants}
          featuredReview={heroReview}
        />

        <section
          id="plants"
          className="mt-28 mb-12 px-5 lg:px-10 flex flex-col gap-24"
        >
          <SectionTitle title="Our Trendy plants" />
          <PlantCard
            plant={trendingPlants[0]}
            variant="trending"
            imagePosition="left"
          />
          <PlantCard
            plant={trendingPlants[1]}
            variant="trending"
            imagePosition="right"
          />
        </section>

        <section className="mt-28 mb-12 px-5 lg:px-10 flex flex-col gap-32">
          <SectionTitle title="Our Top Selling Plants" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 md:gap-x-16 gap-y-24 md:gap-y-28 justify-items-center w-full max-w-[68rem] mx-auto">
            {topSellingPlants.map((plant) => (
              <PlantCard key={`${plant.name}-${plant.price}`} plant={plant} />
            ))}
          </div>
        </section>

        <section className="mt-28 mb-12 px-5 lg:px-10 flex flex-col gap-24">
          <SectionTitle title="Customer Review" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 md:gap-x-16 gap-y-10 md:gap-y-12 justify-items-center w-full max-w-[68rem] mx-auto">
            {reviews.map((review) => (
              <TestimonialCard key={review.name} review={review} />
            ))}
          </div>
        </section>

        <O2PlantsSection plants={topSellingPlants} />
      </main>
      <Footer />
    </div>
  );
}
