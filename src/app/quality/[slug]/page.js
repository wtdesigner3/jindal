import { notFound } from "next/navigation";
import { getSection, getSectionPage } from "src/lib/sections";
import SectionPageLayout from "src/components/features/sections/SectionPageLayout";

const SECTION_KEY = "quality";

export async function generateStaticParams() {
  const section = getSection(SECTION_KEY);
  return section.nav.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const page = getSectionPage(SECTION_KEY, slug);

  if (!page) return {};

  return {
    title: page.seo?.title ?? `${page.title} | Jindal Metals & Alloys Ltd`,
    description: page.seo?.description ?? page.description,
    openGraph: {
      title: page.seo?.title ?? `${page.title} | Jindal Metals & Alloys Ltd`,
      description: page.seo?.description ?? page.description,
      images: page.bannerImage ? [{ url: page.bannerImage, width: 1200, height: 630 }] : [],
    },
    alternates: {
      canonical: `/${SECTION_KEY}/${slug}`,
    },
  };
}

export default async function QualityPage({ params }) {
  const { slug } = await params;

  const section = getSection(SECTION_KEY);
  const page = getSectionPage(SECTION_KEY, slug);

  if (!section || !page) notFound();

  return (
    <SectionPageLayout
      sectionKey={SECTION_KEY}
      sectionLabel={section.label}
      nav={section.nav}
      page={page}
      breadcrumb={[
        { name: "Home", href: "/" },
        { name: section.label, href: `/${SECTION_KEY}/${section.nav[0].slug}` },
        { name: page.title },
      ]}
    />
  );
}
