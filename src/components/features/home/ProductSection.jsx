import Link from "next/link";
import ProductCarousel from "./ProductCarousel";

export default function ProductSection() {
  const products = [
    {
      id: 1,
      image: "/images/thin.jpeg",
      tag: "Steel",
      title: "Stainless Steel",
      cta: "View grades & tolerances",
      slug: "/stainless-steel/stainless-steel",
    },
    {
      id: 2,
      image: "/images/rollsub2.png",
      tag: "Steel",
      title: "Edge Condition",
      cta: "View grades & tolerances",
      slug: "/stainless-steel/edge-condition",
    },
    {
      id: 3,
      image: "/images/about.jpeg",
      tag: "Steel",
      title: "Tolerances",
      cta: "View grades & tolerances",
      slug: "/stainless-steel/tolerances",
    },
    {
      id: 4,
      image: "/images/stain.jpg",
      tag: "Steel",
      title: "Hardness Ranges",
      cta: "View grades & tolerances",
      slug: "/stainless-steel/hardness-ranges",
    },

  ];

  return (
    <section className="home2-service-section section my-0">
      <div className="container">
        <div className="row g-4 align-items-center justify-content-between mb-30">
          <div className="col-lg-8">
            <div className="section-title two ">
              <span>Our Products</span>
              <h2>Our Range of Products</h2>
            </div>
          </div>
        </div>

        <ProductCarousel products={products} />
      </div>
    </section>
  );
}