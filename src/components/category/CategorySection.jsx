

import Image from "next/image";
import Link from "next/link";
import ProductCard from "src/ui/ProductCard";


const products = [
    {
        id: 1,
        image: "/images/p-1.jpg",
        tag: "Steel",
        title: "Stainless Steel",
        cta: "View grades & tolerances",
        slug: "/product/stainless-steel",
    },
    {
        id: 2,
        image: "/images/innerpages/blog-st-img2.jpg",
        tag: "Steel",
        title: "Edge Condition",
        cta: "View grades & tolerances",
        slug: "/product/edge-condition",
    },
    {
        id: 3,
        image: "/images/innerpages/blog-st-img3.jpg",
        tag: "Steel",
        title: "Tolerances",
        cta: "View grades & tolerances",
        slug: "/product/tolerances",
    },
    {
        id: 4,
        image: "/images/innerpages/blog-st-img4.jpg",
        tag: "Steel",
        title: "Hardness Ranges",
        cta: "View grades & tolerances",
        slug: "/product/hardness-ranges",
    },
    {
        id: 5,
        image: "/images/innerpages/blog-st-img4.jpg",
        tag: "Steel",
        title: "Hardness Ranges",
        cta: "View grades & tolerances",
        slug: "/product/hardness-ranges",
    },
];


export default function CategorySection() {
    return (
        <section className="project-grid-page section my-0">
            <div className="container">
                <div className="row g-4 align-items-center justify-content-center text-center mb-70">
                    <div className="col-lg-6">
                        <div className="section-title two">
                            <span>Our Products</span>
                            <h2>Our Range of Products</h2>
                        </div>
                    </div>


                </div>
                <div className="row gy-5">
                    {products.map((product) => (

                        <div className="col-md-3" key={product.id}>
                            <ProductCard product={product} />
                        </div>

                    ))}
                </div>
            </div>
        </section>
    );
}