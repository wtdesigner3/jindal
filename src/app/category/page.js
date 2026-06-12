import Image from "next/image";
import CategorySection from "src/components/category/CategorySection";

export const metadata = {
  title: "Stainless Steel Products",
  description:
    "Explore Jindal Metals & Alloys Ltd's comprehensive range of precision stainless steel products — sheets, coils, strips, and more, available in multiple grades, finishes, and custom specifications.",
  openGraph: {
    title: "Stainless Steel Products | Jindal Metals & Alloys Ltd",
    description:
      "Premium-quality stainless steel products including sheets, coils, plates, tubes, and bars. Trusted manufacturer with 40+ years of excellence.",
  },
};

export default function Category() {
    return (
        <>
            <div>
                <section className="category-hero-section position-relative">

                    <div className="hero-banner cat-banner position-relative">
                        <Image
                            src="/images/slide1.jpg"
                            alt="Precision stainless steel manufacturing facility"
                            width={1920}
                            height={700}
                            className="img-fluid"
                            priority
                        />
                        <div className="category-title">
                            <h1>Stainless Steel</h1>
                        </div>


                    </div>


                </section>
                <section className="home1-counter-section">
                    <div className="container">
                        <div className="counter-wrap text-center">
                            <div className="row gy-4">
                                <p>
                                    Stainless steel is one of the most versatile and durable materials used across industries including construction, manufacturing, automotive, food processing, pharmaceuticals, and engineering. Known for its excellent corrosion resistance, strength, and long service life, stainless steel products provide reliable performance in demanding environments.

                                    We offer a comprehensive range of premium-quality stainless steel products available in various grades, sizes, finishes, and specifications to meet diverse industrial requirements. Our product portfolio includes stainless steel sheets, coils, plates, pipes, tubes, bars, and customized solutions sourced from trusted manufacturers and supplied with strict quality standards.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <CategorySection />
        </>

    );
}