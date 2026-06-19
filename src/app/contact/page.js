import PageHeader from "src/components/layout/PageHeader";
import MultiStepContactForm from "src/components/forms/MultiStepContactForm";

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

      <section className="contact-page-area py-5 my-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="contact-form-section bg-white p-4 p-md-5 rounded shadow-sm">
                <div className="section-title text-center mb-5">
                  <h2>Get in Touch</h2>
                  <p className="text-muted">Fill out the form below and we will get back to you shortly.</p>
                </div>
                
                <MultiStepContactForm />
                
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
