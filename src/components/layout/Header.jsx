"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Bars3Icon } from "@heroicons/react/24/outline";
import MobileMenu from "./MobileMenu";

export default function Header() {
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <>
      <header className="header-area style-1">
        <div className="container-fluid d-flex flex-nowrap align-items-center justify-content-between">

          {/* Logo */}
          <div className="company-logo">
            <Link href="/">
              <Image
                src="/images/logo.png"
                alt="Logo"
                width={180}
                height={60}
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <nav className="main-menu d-none d-lg-block">
            <ul className="menu-list">
              <li>
                <Link href="/about">About Us</Link>
              </li>

              <li className="menu-item-has-children">
                <Link href="#" className="drop-down">
                  Our Products
                  <svg width="10" height="10" viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg" style={{ marginLeft: "6px" }}>
                    <path d="M10 0.0495054L10 10.0001L8.13725 10.0001L-8.22301e-08 1.8812L1.86275 -3.55691e-07L7.35294 5.5446L7.30392 0.0495053L10 0.0495054Z" />
                    <path d="M-9.6438e-05 10.0002L6.27441 10.0002L3.62736 7.32687L-9.63211e-05 7.32687L-9.6438e-05 10.0002Z" />
                  </svg>
                </Link>
                <i className="bi bi-plus dropdown-icon"></i>

                <ul className="sub-menu">
                  <li className="menu-item-has-children">
                    <Link href="category">
                      <span>
                        StainLess Steel
                        <svg width="10" height="10" viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg" style={{ marginLeft: "6px" }}>
                          <path d="M0.0495054 0H10.0001V1.86275L1.88121 10L0 8.13726L5.54461 2.64706L0.0495054 2.69608V0Z" />
                          <path d="M9.99971 9.99993V3.72542L7.32642 6.37248V9.99993H9.99971Z" />
                        </svg>
                      </span>
                    </Link>
                    <i className="d-lg-none d-flex bi bi-plus dropdown-icon"></i>
                    <ul className="sub-menu">
                      <li>
                        <Link href="/product/stainless-steel"><span> (Stainless Steel)</span></Link>
                      </li>
                      <li>
                        <Link href="/product/edge-condition"><span> (Edge Condition)</span></Link>
                      </li>
                      <li>
                        <Link href="/product/tolerances"><span> (Tolerances)</span></Link>
                      </li>
                      <li>
                        <Link href="/product/hardness-ranges"><span> (Hardness Ranges)</span></Link>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>

              <li className="menu-item-has-children">
                <Link href="#">Corporate Information</Link>

                <ul className="sub-menu">
                  <li>
                    <Link href="/csr"><span>CSR</span></Link>
                  </li>
                </ul>
              </li>

              <li className="menu-item-has-children">
                <Link href="#">Infrastructure</Link>

                <ul className="sub-menu">
                  <li>
                    <Link href="/infrastructure">
                      <span>  Cold Rolled Precision Stainless Steel Strips</span>
                    </Link>
                  </li>
                </ul>
              </li>

              <li>
                <Link href="/blogs">Blogs</Link>
              </li>
            </ul>
          </nav>

          {/* Right Side */}
          <div className="nav-right">
            <div className="contact-area d-lg-flex d-none">
              <div className="content">
                <span>Any Question</span>
                <a href="tel:+919323582341">+91 9323582341</a>
              </div>
            </div>

            <button
              className="mobile-menu-btn d-lg-none"
              onClick={() => setMobileMenu(true)}
            >
              <Bars3Icon width={30} />
            </button>
          </div>
        </div>
        <MobileMenu
          mobileMenu={mobileMenu}
          setMobileMenu={setMobileMenu}
        />
      </header>

      {/* Mobile Menu Component */}

    </>
  );
}