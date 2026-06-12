import { notFound } from "next/navigation";

import PageHeader from "src/components/layout/PageHeader";
import ProductDetails from "src/components/products/ProductDetails";

const products = [
  {
    slug: "stainless-steel",
    title: "Stainless Steel",
    description:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur.",

    content: `
      <p>
        Stainless steel strips are produced using advanced cold rolling
        technology and are suitable for industrial applications.
      </p>

      <p>
        Available in multiple grades, thicknesses, and finishes to meet
        customer requirements.
      </p>
    `,
  },

  {
    slug: "edge-condition",
    title: "Edge Condition",
    description:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur",

    content: `
      <p>
        Edge conditioning improves safety, appearance and functionality.
      </p>
    `,
  },

  {
    slug: "tolerances",
    title: "Tolerances",
    description:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur.",

    content: `
      <p>
        Tight dimensional tolerances ensure superior product quality.
      </p>
    `,
  },
];
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const product = products.find(
    (item) => item.slug === slug
  );

  if (!product) return {};

  return {
    title: `${product.title} | Jindal Metals & Alloys Ltd`,
    description: product.description,
  };
}

export default async function ProductDetailPage({ params }) {
  const { slug } = await params;
  const product = products.find(
    (item) => item.slug === slug
  );

  if (!product) {
    notFound();
  }

  const relatedProducts = products.filter(
    (item) => item.slug !== product.slug
  );

  return (
    <>
      <PageHeader
        title={product.title}
        bgImage="/images/slide1.jpg"
        breadcrumb={[
          { name: "Home", href: "/" },
          { name: product.title },
        ]}
      />

      <ProductDetails
        product={product}
        relatedProducts={relatedProducts}
      />
    </>
  );
}