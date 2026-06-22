import Image from "next/image";
import BlogSection from "src/components/features/blog/BlogSection";
import ContactSection from "src/components/features/contact/ContactSection";
import ChooseUs from "src/components/features/home/ChooseUs";
import CompanyOverview from "src/components/features/home/CompanyOverview";
import CTASection from "src/components/features/home/CTASection";
import HeroSlider from "src/components/features/home/HeroSlider";
import MottoSection from "src/components/features/home/MottoSection";
import ProductSection from "src/components/features/home/ProductSection";
import SegmentsSection from "src/components/features/home/SegmentsSection";
import TestimonialSection from "src/components/features/testimonial/TestimonialSection";

export const metadata = {
  title: "Jindal Metals & Alloys Ltd | Thin & Ultra-Thin Precision Stainless Steel Strips",
  description: "Specializing in the manufacturing of cold rolled precision stainless steel strips. Over 4 decades of stability, trust, and quality excellence.",
};

export default function Home() {

  return (
    <>
      <div>
        <HeroSlider />
        <CompanyOverview />
        <ChooseUs />
        <ProductSection />
        <MottoSection />
        <SegmentsSection />
        <CTASection />
        <BlogSection />
        {/* <TestimonialSection /> */}
        <ContactSection />

      </div>
    </>
  );
}
