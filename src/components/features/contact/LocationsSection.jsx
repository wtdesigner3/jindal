import React from "react";

const locations = [
  {
    title: "INTERNATIONAL MARKETING & WORKS",
    address:
      "Dehkora Road, Vill. Rohad, Distt. Jhajjar, Bahadurgarh, Haryana - 124 501, INDIA",
    phone: "1276-225800, (For Sales Enquiry) +91 9323582341, +91 9711599243",
    email: "anjesh.karn@jindalmetal.com, deepak.valiyan@jindalmetal.com",
  },
  {
    title: "HARDENED & TEMPERED (H&T DIVISION)",
    address:
      "Dehkora Road, Vill. Rohad, Distt. Jhajjar, Bahadurgarh, Haryana - 124 501, INDIA",
    phone: "1276-225800, (For Sales Enquiry) +91 9711599243",
    email:
      "deepak.valiyan@jindalmetal.com, htsales@jindalmetal.com, info@jindalmetal.com",
  },
  {
    title: "REGISTERED OFFICE & NORTHERN REGION",
    address:
      "28, Nazafgarh Road, Shivaji Marg, Moti Nagar, New-Delhi 110 015, INDIA",
    phone: "+91-11-66463614, +91-9313959506, 11-66463982",
    email: "northzone@jindalmetal.com",
  },
  {
    title: "WESTERN REGION",
    address:
      "IInd Floor, Jindal Mansion, 5A, G.Deshmukh Marg, Mumbai 400 026, INDIA",
    phone: "+91-22-45426560, +91-7496962920, 22-23526400",
    email: "westzone@jindalmetal.com",
  },
  {
    title: "SOUTHERN REGION",
    address:
      "3G 3rd Floor, Centuri Plaza, 526/27, AnnaSalai, Teynampet, Chennai 600 018. INDIA",
    phone: "44-42012633, 9382330400, 9380004100",
    email: "dinesh.p@jindalmetal.com, marketingsouth@jindalmetal.com",
  },
];

export default function LocationsSection() {
  return (
    <section className="locations-section section bg-light section my-0">
      <div className="container">
        <div className="section-title text-center mb-5">
          <span>Our Network</span>
          <h2>Our Offices & Divisions</h2>
        </div>

        <div className="row g-4">
          {locations.map((loc, index) => (
            <div className="col-lg-4 col-md-6" key={index}>
              <div
                className="location-card bg-white p-4 h-100 shadow-sm"
                style={{
                  borderRadius: "8px",
                  borderTop: "4px solid var(--primary-color1, #c8a84b)",
                  transition: "all 0.3s ease",
                }}
              >
                <h5
                  className="mb-4 text-uppercase fw-bold"
                  style={{ fontSize: "16px", letterSpacing: "0.5px" }}
                >
                  {loc.title}
                </h5>

                <ul className="list-unstyled mb-0 d-flex flex-column gap-3">
                  <li className="d-flex align-items-start gap-3">
                    <i className="bi bi-geo-alt fs-5 text-secondary"></i>
                    <span className="text-muted" style={{ fontSize: "15px" }}>
                      {loc.address}
                    </span>
                  </li>
                  <hr className="my-1 border-light" />
                  <li className="d-flex align-items-start gap-3">
                    <i className="bi bi-telephone fs-5 text-secondary"></i>
                    <span className="text-muted" style={{ fontSize: "15px" }}>
                      {loc.phone.split(",").map((p, i) => (
                        <React.Fragment key={i}>
                          {p.trim()}
                          {i < loc.phone.split(",").length - 1 && <br />}
                        </React.Fragment>
                      ))}
                    </span>
                  </li>
                  <li className="d-flex align-items-start gap-3">
                    <i className="bi bi-envelope fs-5 text-secondary"></i>
                    <span
                      className="text-muted text-break"
                      style={{ fontSize: "15px" }}
                    >
                      {loc.email.split(",").map((e, i) => (
                        <React.Fragment key={i}>
                          <a
                            href={`mailto:${e.trim()}`}
                            className="text-muted text-decoration-none hover-primary"
                          >
                            {e.trim()}
                          </a>
                          {i < loc.email.split(",").length - 1 && <br />}
                        </React.Fragment>
                      ))}
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
