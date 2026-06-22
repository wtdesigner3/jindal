import PageHeader from "src/components/layout/PageHeader";
import GalleryWrapper from "src/components/gallery/GalleryWrapper";
import Image from "next/image";

export const metadata = {
  title: "Certifications | Jindal Metals & Alloys Ltd",
  description: "View our industry certifications, quality standards, and compliance documents.",
};

// Dummy data for certifications
const certifications = [
  { id: 1, src: "/images/certificate-1.png", title: "ISO 9001:2015 - Quality Management" },
  { id: 2, src: "/images/certificate-1.png", title: "ISO 14001:2015 - Environmental" },
  { id: 3, src: "/images/certificate-1.png", title: "ISO 45001:2018 - Health & Safety" },
  { id: 4, src: "/images/certificate-1.png", title: "IATF 16949 - Automotive" },
  { id: 5, src: "/images/certificate-1.png", title: "CE Mark Certification" },
  { id: 6, src: "/images/certificate-1.png", title: "Environmental Clearance" },
  { id: 7, src: "/images/certificate-1.png", title: "Quality Excellence Award" },
  { id: 8, src: "/images/certificate-1.png", title: "Safety Excellence Award" },
];

export default function CertificationsPage() {
  const breadcrumb = [
    { name: "Home", href: "/" },
    { name: "Certifications" }
  ];

  return (
    <>
      <PageHeader
        title="Our Certifications"
        bgImage="/images/slide1.jpg"
        breadcrumb={breadcrumb}
      />

      <section className="certifications-section my-5">
        <div className="container mb-80">
          

          <GalleryWrapper>
            {certifications.map((cert, index) => (
              /* col-lg-3 makes it 4 cards per row on large screens */
              <div 
                key={cert.id} 
                className="col-lg-3 col-md-6 mb-4 certification-item-wrapper"
                style={{
                  animation: `fadeInUp 0.6s ease forwards`,
                  animationDelay: `${index * 0.1}s`,
                  opacity: 0,
                  transform: 'translateY(20px)'
                }}
              >
                <div className="certification-card h-100 position-relative overflow-hidden rounded shadow-sm bg-white border">
                  <a 
                    href={cert.src} 
                    data-fancybox="certifications" 
                    data-caption={cert.title} 
                    className="d-block w-100 h-100 p-3"
                  >
                    <div className="position-relative w-100" style={{ height: "300px" }}>
                      {/* Using object-contain for certificates to avoid cropping important text/borders */}
                      <Image
                        src={cert.src}
                        alt={cert.title}
                        fill
                        className="object-fit-contain cert-img"
                        sizes="(max-width: 768px) 100vw, 25vw"
                      />
                      
                      {/* Fancy Hover Overlay */}
                      <div className="cert-overlay d-flex flex-column align-items-center justify-content-center">
                        <div className="cert-icon mb-2">
                          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="11" cy="11" r="8"></circle>
                            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                            <line x1="11" y1="8" x2="11" y2="14"></line>
                            <line x1="8" y1="11" x2="14" y2="11"></line>
                          </svg>
                        </div>
                        <h6 className="text-white text-center px-3 cert-title m-0">
                          View Certificate
                        </h6>
                      </div>
                    </div>
                    
                    <div className="cert-info text-center pt-3 pb-2 mt-3 border-top">
                      <h5 className="m-0 text-dark fs-6 fw-bold">{cert.title}</h5>
                    </div>
                  </a>
                </div>
              </div>
            ))}
          </GalleryWrapper>
        </div>
      </section>

    </>
  );
}
