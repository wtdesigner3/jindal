import PageHeader from "src/components/layout/PageHeader";
import ContactSection from "src/components/features/contact/ContactSection";
import LocationsSection from "src/components/features/contact/LocationsSection";

export const metadata = {
  title: "Contact Us | Jindal Metals & Alloys Ltd",
  description:
    "Contact Jindal Metals & Alloys Ltd for precision stainless steel strip enquiries, technical support, export quotes, and business partnerships. Located in Hisar, Haryana, India.",
  alternates: {
    canonical: "https://www.jindalmetals.com/contact",
  },
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        title="Contact Us"
        breadcrumb={[
          { name: "Home", href: "/" },
          { name: "Contact Us" },
        ]}
      />

      <div className="">
        <ContactSection />
      </div>

      <LocationsSection />
    </>
  );
}
