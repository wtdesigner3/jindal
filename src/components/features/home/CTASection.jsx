import Link from "next/link";
import PopupCtaForm from "src/components/core/PopupCtaForm";

export default function CTASection() {
  return (
    <div className="footer-top-banner-section section my-0 patt-bg">
      <div className="container">
        <div className="footer-top-banner-wrap">
          <div className="section-title white">
            <span>Creating Sustainable Value Through Innovation</span>

            <h2>Looking for Precision Steel Solutions?</h2>

            <p>
              Partner with a trusted manufacturer of precision stainless steel
              strips, foils, and alloy steel products.
            </p>
          </div>

          <div className="btn-grp">
            <PopupCtaForm
              buttonText="Get a Quote"
              buttonClass="primary-btn1 white-bg"
            />

            <Link href="/about" className="discuss-btn">
              Contact Our Experts
              <svg
                width="9"
                height="9"
                viewBox="0 0 9 9"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0.0445549 0H9.00008V1.67647L1.69308 9L0 7.32353L4.99014 2.38235L0.0445549 2.42647V0Z" />
                <path d="M9.0002 8.99999V3.35294L6.59424 5.73529V8.99999H9.0002Z" />
              </svg>
            </Link>
          </div>
        </div>
      </div>

      <svg
        className="arrow-vector"
        width="147"
        height="147"
        viewBox="0 0 147 147"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g>
          <path d="M0.727728 0H147.001V27.3823L27.6537 147L0 119.617L81.5055 38.9117L0.727728 39.6323V0Z" />
          <path d="M147.002 146.999V54.7637L107.705 93.6754V146.999H147.002Z" />
        </g>
      </svg>
    </div>
  );
}
