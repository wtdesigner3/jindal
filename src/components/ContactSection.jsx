"use client";

import MultiStepContactForm from "src/components/forms/MultiStepContactForm";

export default function ContactSection() {
  return (
    <section className=" two section my-0 crop-bg" id="scroll-section">
      <div className="container">
        <div className="contact-wrapper">
          <div className="row gy-5 align-items-center">
            {/* Left Content */}
            <div className="col-lg-6">
              <div className="contact-content z-1 position-relative">
                <div className="section-title two">
                  <span>Get In Touch</span>

                  <h2 className="mb-1">Contact Us</h2>

                  <p className="mb-4">
                    Looking for reliable metal solutions? Our experts are ready
                    to assist you with product information, technical guidance,
                    and customized requirements.
                  </p>

                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3498.9623728499155!2d77.17327517541439!3d28.720670480072922!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d01f23405c8c9%3A0xfa51f0bb0bce2b00!2z8J2QlvCdkJ7wnZCbIPCdkJPwnZCy8J2QnPCdkKjwnZCo8J2Qp_CdkKzCrg!5e0!3m2!1sen!2sin!4v1780396848209!5m2!1sen!2sin"
                    width="100%"
                    height="300"
                    style={{ border: 0 }}
                    loading="lazy"
                    allowFullScreen
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Google Map"
                  />
                </div>
              </div>
            </div>

            {/* Right Form */}
            <div className="col-lg-6">
              <MultiStepContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
