import PageHeader from "src/components/layout/PageHeader";
import GalleryWrapper from "src/components/gallery/GalleryWrapper";
import Image from "next/image";

export const metadata = {
  title: "Gallery | Jindal Metals & Alloys Ltd",
  description: "View our state-of-the-art facilities, products, and infrastructure.",
};

// Dummy data for gallery images
const galleryImages = [
  { id: 1, src: "/images/slide1.jpg", title: "Precision Steel Strip Manufacturing" },
  { id: 2, src: "/images/slide2.jpg", title: "Advanced Cold Rolling Mills" },
  { id: 3, src: "/images/slide3.jpg", title: "Quality Testing Laboratory" },
  { id: 4, src: "/images/slide2.jpg", title: "Automated Packaging Line" },
  { id: 5, src: "/images/slide1.jpg", title: "R&D Facility" },
  { id: 6, src: "/images/slide3.jpg", title: "Warehouse and Dispatch" },
  { id: 7, src: "/images/slide1.jpg", title: "Corporate Office" },
  { id: 8, src: "/images/slide2.jpg", title: "Environmental Management Systems" },
  { id: 9, src: "/images/slide3.jpg", title: "Team at Work" },
];

export default function GalleryPage() {
  const breadcrumb = [
    { name: "Home", href: "/" },
    { name: "Gallery" }
  ];

  return (
    <>
      <PageHeader
        title="Our Gallery"
        bgImage="/images/slide2.jpg"
        breadcrumb={breadcrumb}
      />

      <section className="gallery-section my-5">
        <div className="container mb-80">
       

          <GalleryWrapper>
            {galleryImages.map((img, index) => (
              <div 
                key={img.id} 
                className="col-lg-4 col-md-6 gallery-item-wrapper"
                style={{
                  // Staggered fade-in-up animation
                  animation: `fadeInUp 0.6s ease forwards`,
                  animationDelay: `${index * 0.1}s`,
                  opacity: 0,
                  transform: 'translateY(20px)'
                }}
              >
                <div className="gallery-item position-relative overflow-hidden rounded shadow-sm">
                  <a 
                    href={img.src} 
                    data-fancybox="gallery" 
                    data-caption={img.title} 
                    className="d-block w-100 h-100"
                  >
                    <div className="position-relative" style={{ height: "300px" }}>
                      <Image
                        src={img.src}
                        alt={img.title}
                        fill
                        className="object-fit-cover gallery-img"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                      
                      {/* Fancy Hover Overlay */}
                      <div className="gallery-overlay d-flex flex-column align-items-center justify-content-center">
                        <div className="gallery-icon mb-2">
                          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="11" cy="11" r="8"></circle>
                            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                            <line x1="11" y1="8" x2="11" y2="14"></line>
                            <line x1="8" y1="11" x2="14" y2="11"></line>
                          </svg>
                        </div>
                        <h5 className="text-white text-center px-3 gallery-title m-0">
                          {img.title}
                        </h5>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            ))}
          </GalleryWrapper>
        </div>
      </section>

      {/* Embedded CSS for animations and beautiful hover effects */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes fadeInUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .gallery-item {
          cursor: pointer;
          background-color: #000; /* Prevents white flash on scale */
        }

        .gallery-img {
          transition: transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        .gallery-item:hover .gallery-img {
          transform: scale(1.1);
          opacity: 0.8;
        }

        .gallery-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(to top, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.2) 100%);
          opacity: 0;
          transition: all 0.4s ease;
        }

        .gallery-item:hover .gallery-overlay {
          opacity: 1;
        }

        .gallery-icon {
          transform: scale(0.5) translateY(20px);
          transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }

        .gallery-item:hover .gallery-icon {
          transform: scale(1) translateY(0);
        }

        .gallery-title {
          transform: translateY(20px);
          opacity: 0;
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          transition-delay: 0.05s;
        }

        .gallery-item:hover .gallery-title {
          transform: translateY(0);
          opacity: 1;
        }
      `}} />
    </>
  );
}
