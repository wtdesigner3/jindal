import PageHeader from "src/components/layout/PageHeader";
import ContactSection from "src/components/ContactSection";
import LocationsSection from "src/components/contact/LocationsSection";

export const metadata = {
  title: "Contact Us | Jindal Metals & Alloys Ltd",
  description: "Get in touch with Jindal Metals & Alloys Ltd.",
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
