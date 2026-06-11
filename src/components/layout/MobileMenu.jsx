"use client";

import Link from "next/link";
import Image from "next/image";
import { X } from "lucide-react";
import { useState } from "react";

export default function MobileMenu({
  mobileMenu,
  setMobileMenu,
}) {
  const [productOpen, setProductOpen] = useState(false);
  const [corporateOpen, setCorporateOpen] = useState(false);
  const [infraOpen, setInfraOpen] = useState(false);

  return (
    <>
      {/* Overlay */}
      <div
        className={`mobile-menu-overlay ${
          mobileMenu ? "active" : ""
        }`}
        onClick={() => setMobileMenu(false)}
      />

      {/* Mobile Menu */}
      <div
        className={`mobile-menu-wrapper main-menu ${
          mobileMenu ? "show-menu" : ""
        }`}
      >
        <div className="mobile-logo-area d-flex align-items-center justify-content-between">
          <Link href="/">
            <Image
              src="/images/logo.png"
              alt="Logo"
              width={150}
              height={50}
            />
          </Link>

          <button
            className="menu-close-btn"
            onClick={() => setMobileMenu(false)}
          >
            <X size={28} />
          </button>
        </div>

        <ul className="menu-list">
          <li>
            <Link href="/about">About Us</Link>
          </li>

          {/* Products */}
          <li className="menu-item-has-children">
            <div
              className="d-flex justify-content-between"
              onClick={() => setProductOpen(!productOpen)}
            >
              <span>Our Products</span>
              <span>{productOpen ? "-" : "+"}</span>
            </div>

            {productOpen && (
              <ul className="sub-menu">
                <li>
                  <Link href="/stainless-steel">
                    Stainless Steel
                  </Link>
                </li>
                <li>
                  <Link href="/edge-condition">
                    Edge Condition
                  </Link>
                </li>
                <li>
                  <Link href="/tolerances">
                    Tolerances
                  </Link>
                </li>
                <li>
                  <Link href="/hardness-ranges">
                    Hardness Ranges
                  </Link>
                </li>
              </ul>
            )}
          </li>

          {/* Corporate */}
          <li className="menu-item-has-children">
            <div
              className="d-flex justify-content-between"
              onClick={() => setCorporateOpen(!corporateOpen)}
            >
              <span>Corporate Information</span>
              <span>{corporateOpen ? "-" : "+"}</span>
            </div>

            {corporateOpen && (
              <ul className="sub-menu">
                <li>
                  <Link href="/csr">CSR</Link>
                </li>
              </ul>
            )}
          </li>

          {/* Infrastructure */}
          <li className="menu-item-has-children">
            <div
              className="d-flex justify-content-between"
              onClick={() => setInfraOpen(!infraOpen)}
            >
              <span>Infrastructure</span>
              <span>{infraOpen ? "-" : "+"}</span>
            </div>

            {infraOpen && (
              <ul className="sub-menu">
                <li>
                  <Link href="/infrastructure">
                    Cold Rolled Precision Stainless Steel Strips
                  </Link>
                </li>
              </ul>
            )}
          </li>

          <li>
            <Link href="/blogs">Blogs</Link>
          </li>
        </ul>

        <div className="contact-area mt-4">
          <span>Any Question</span>
          <a href="tel:+919323582341">
            +91 9323582341
          </a>
        </div>
      </div>
    </>
  );
}