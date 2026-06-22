import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, FileText } from "lucide-react";

export default function TopHeader() {
  return (
    <div className="top-header">
      <div className="container">
        <div className="top-header-inner">
          {/* Logo */}
          <div className="top-header-logo">
            <Link href="/">
              <Image
                src="/images/logo.png"
                alt="Jindal Metals"
                width={180}
                height={60}
                priority
              />
            </Link>
          </div>

          {/* Right Content */}
          <div className="top-header-right">
            {/* Email */}
            <a href="mailto:info@jindalmetals.com" className="top-info-item">
              <Mail size={18} />
              <span>info@jindalmetals.com</span>
            </a>

            {/* Phone */}
            <a href="tel:+919323582341" className="top-info-item">
              <Phone size={18} />
              <span>+91 93235 82341</span>
            </a>

            {/* PDF Button */}
            <a
              href="/pdf/company-profile.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="top-btn pdf-btn"
            >
              <FileText size={18} />
              Company Profile
            </a>

            {/* Contact Button */}
            <Link href="/contact" className="top-btn contact-btn">
              Stainless steel BROCHURE
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
