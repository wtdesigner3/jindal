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
                <Link href="#">Our Products</Link>

                <ul className="sub-menu">
                  <li>
                    <Link href="/stainless-steel"><span>Stainless Steel</span></Link>
                  </li>
                  <li>
                    <Link href="/edge-condition"><span>Edge Condition</span></Link>
                  </li>
                  <li>
                    <Link href="/tolerances"><span>Tolerances</span></Link>
                  </li>
                  <li>
                    <Link href="/hardness-ranges"><span>Hardness Ranges</span></Link>
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