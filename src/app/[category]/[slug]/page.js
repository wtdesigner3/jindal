import { notFound } from "next/navigation";

import PageHeader from "src/components/layout/PageHeader";
import ProductDetails from "src/components/features/products/ProductDetails";

// ─────────────────────────────────────────────────────────────────
// NOTE: In production this array is replaced by a fetch() call to
// your MongoDB API:  GET /api/products/:slug
// The shape of each object mirrors the MongoDB ProductSchema exactly.
// ─────────────────────────────────────────────────────────────────
const products = [
  {
    id: 1,
    slug: "cold-rolled-precision-stainless-steel-strips",
    title: "Cold Rolled Precision Stainless Steel Strips",
    category: "Stainless Steel",
    categorySlug: "stainless-steel",
    image: "/images/thin.jpeg",
    description:
      "Jindal Metals & Alloys Ltd manufactures high-quality cold rolled precision stainless steel strips for automotive, industrial, engineering, electronics and precision component applications.",
    content: `
      <p>
        Precision stainless steel strips are manufactured with strict quality controls
        to ensure uniform thickness, width, and mechanical properties.
      </p>
    `,
    seo: {
      title: "Cold Rolled Precision Stainless Steel Strips | Jindal Metals & Alloys Ltd",
      description:
        "Buy cold rolled precision stainless steel strips manufactured to international ISO standards. Trusted supplier for automotive, medical, and electronics industries across India and globally.",
      keywords: ["cold rolled stainless steel strips", "precision stainless steel", "stainless steel strips India", "Jindal metals strips"],
      ogImage: "/images/thin.jpeg",
      canonical: "/stainless-steel/cold-rolled-precision-stainless-steel-strips",
    },
  },

  {
    id: 2,
    slug: "stainless-steel-ultra-thin-foils",
    title: "Stainless Steel Ultra-Thin Foils",
    category: "Stainless Steel",
    categorySlug: "stainless-steel",
    image: "/images/thin.jpeg",
    description:
      "Ultra-thin stainless steel foils manufactured for electronics, batteries, medical devices and precision engineering applications.",
    content: `
      <p>
        Manufactured using advanced rolling and finishing processes for ultra-thin
        thickness requirements down to micron-level precision.
      </p>
    `,
    seo: {
      title: "Stainless Steel Ultra-Thin Foils | Jindal Metals & Alloys Ltd",
      description:
        "Ultra-thin stainless steel foils for electronics, Li-ion batteries, medical devices and precision engineering. Manufactured to tight thickness tolerances in India.",
      keywords: ["ultra thin stainless steel foil", "stainless steel foil India", "thin gauge stainless steel", "precision foil manufacturer"],
      ogImage: "/images/thin.jpeg",
      canonical: "/stainless-steel/stainless-steel-ultra-thin-foils",
    },
  },

  {
    id: 3,
    slug: "hardened-and-tempered-steel-strips",
    title: "Hardened and Tempered Steel Strips",
    category: "High Carbon & Alloy Steel Strips",
    categorySlug: "high-carbon-alloy-steel-strips",
    image: "/images/rollsub1.jpeg",
    description:
      "High-strength hardened and tempered steel strips for springs, tools, automotive and industrial applications.",
    content: `
      <p>
        Produced through controlled heat treatment processes to achieve precise
        hardness and tensile strength levels for demanding industrial applications.
      </p>
    `,
    seo: {
      title: "Hardened & Tempered Steel Strips | Jindal Metals & Alloys Ltd",
      description:
        "High-strength hardened and tempered steel strips for springs, cutting tools, automotive components and industrial applications. Precision manufactured in India.",
      keywords: ["hardened tempered steel strips", "H&T steel strips India", "spring steel strips", "high carbon steel strips"],
      ogImage: "/images/rollsub1.jpeg",
      canonical: "/high-carbon-alloy-steel-strips/hardened-and-tempered-steel-strips",
    },
  },

  {
    id: 4,
    slug: "cold-rolled-steel-strips",
    title: "Cold Rolled Steel Strips",
    category: "High Carbon & Alloy Steel Strips",
    categorySlug: "high-carbon-alloy-steel-strips",
    image: "/images/rollsub2.png",
    description:
      "Cold rolled steel strips with excellent dimensional accuracy, surface finish and formability.",
    content: `
      <p>
        Suitable for automotive, engineering, electrical and fabrication applications requiring
        tight tolerances and a superior surface finish.
      </p>
    `,
    seo: {
      title: "Cold Rolled Steel Strips | Jindal Metals & Alloys Ltd",
      description:
        "Cold rolled high carbon and alloy steel strips with precise dimensional accuracy and excellent surface finish. Available in multiple grades for industrial applications.",
      keywords: ["cold rolled steel strips", "alloy steel strips India", "high carbon cold rolled steel", "CR steel strips manufacturer"],
      ogImage: "/images/rollsub2.png",
      canonical: "/high-carbon-alloy-steel-strips/cold-rolled-steel-strips",
    },
  },

  {
    id: 5,
    slug: "grades-properties",
    title: "Grades & Its Properties",
    category: "Technical Information",
    categorySlug: "technical-information",
    image: "/images/products/grades-properties.webp",
    description:
      "Technical reference for steel grades, chemical compositions, mechanical properties and applications.",
    content: `
      <p>
        Detailed information regarding material grades and engineering properties to help
        customers select the right specification for their requirements.
      </p>
    `,
    seo: {
      title: "Steel Grades & Properties | Jindal Metals & Alloys Ltd",
      description:
        "Complete reference guide to stainless steel and alloy steel grades, chemical composition, mechanical properties and recommended applications from Jindal Metals.",
      keywords: ["stainless steel grades", "steel properties guide", "steel grade chart India", "Jindal steel grades"],
      ogImage: "/images/products/grades-properties.webp",
      canonical: "/technical-information/grades-properties",
    },
  },

  {
    id: 6,
    slug: "edge-condition",
    title: "Edge Condition",
    category: "Technical Information",
    categorySlug: "technical-information",
    image: "/images/products/edge-condition.webp",
    description:
      "Technical guide covering slit edge, mill edge, deburred edge and special edge profiles.",
    content: `
      <p>
        Various edge conditions are available based on customer requirements — slit edge,
        mill edge, deburred edge and special custom profiles for precision applications.
      </p>
    `,
    seo: {
      title: "Steel Strip Edge Conditions | Jindal Metals & Alloys Ltd",
      description:
        "Technical specifications for steel strip edge conditions including slit edge, mill edge, and deburred edge profiles. Available for all precision steel strip products.",
      keywords: ["steel strip edge condition", "slit edge steel", "deburred steel strips", "mill edge strips"],
      ogImage: "/images/products/edge-condition.webp",
      canonical: "/technical-information/edge-condition",
    },
  },

  {
    id: 7,
    slug: "tolerances",
    title: "Tolerances",
    category: "Technical Information",
    categorySlug: "technical-information",
    image: "/images/products/tolerances.webp",
    description:
      "Technical information on thickness, width, flatness and dimensional tolerances for precision steel strips.",
    content: `
      <p>
        Precision manufacturing ensures compliance with international standards for
        thickness, width, flatness and camber tolerances across all product ranges.
      </p>
    `,
    seo: {
      title: "Steel Strip Tolerances | Jindal Metals & Alloys Ltd",
      description:
        "Detailed dimensional tolerance specifications for precision steel strips — thickness, width, flatness and camber. Compliant with international standards.",
      keywords: ["steel strip tolerances", "precision steel dimensions", "thickness tolerance stainless steel", "DIN tolerance steel"],
      ogImage: "/images/products/tolerances.webp",
      canonical: "/technical-information/tolerances",
    },
  },
];

// ─── SSG: Pre-build all known product pages at build time ───────
export async function generateStaticParams() {
  // In production: fetch slugs from your API instead
  // const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/products`);
  // const products = await res.json();
  return products.map((p) => ({
    category: p.categorySlug,
    slug: p.slug,
  }));
}

// ─── Dynamic SEO Metadata ───────────────────────────────────────
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const product = products.find((item) => item.slug === slug);

  if (!product) return {};

  return {
    title: product.seo?.title || `${product.title} | Jindal Metals & Alloys Ltd`,
    description: product.seo?.description || product.description,
    keywords: product.seo?.keywords || [],
    openGraph: {
      title: product.seo?.title || product.title,
      description: product.seo?.description || product.description,
      images: product.seo?.ogImage
        ? [{ url: product.seo.ogImage, width: 1200, height: 630 }]
        : [],
    },
    alternates: {
      canonical: product.seo?.canonical || `/${product.categorySlug}/${product.slug}`,
    },
  };
}

export default async function ProductDetailPage({ params }) {
  const { category, slug } = await params;
  const product = products.find((item) => item.slug === slug);

  if (!product) {
    notFound();
  }

  const relatedProducts = products.filter(
    (item) => item.categorySlug === product.categorySlug && item.slug !== product.slug
  );

  return (
    <>
      <PageHeader
        title={product.title}
        bgImage={product.image}
        breadcrumb={[
          { name: "Home", href: "/" },
          { name: product.category, href: `/${product.categorySlug}` },
          { name: product.title },
        ]}
      />

      <ProductDetails
        product={product}
        relatedProducts={relatedProducts}
        category={category}
      />
    </>
  );
}

