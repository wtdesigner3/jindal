"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Bars3Icon } from "@heroicons/react/24/outline";
import MobileMenu from "./MobileMenu";
import TopHeader from "./TopHeader";
export const menuData = [
  {
    id: 1,
    title: "Home",
    slug: "#",
    children: [],
  },
  {
    id: 2,
    title: "About Us",
    slug: "#",
    children: [
      {
        id: 334341,
        title: "Corporate Overview",
        slug: "/aboutus/corporate-overview",
      },
      {
        id: 334342,
        title: "Holding Group Company",
        slug: "/aboutus/holding-group-company",
      },
      {
        id: 334343,
        title: "Vision & Mission",
        slug: "/aboutus/vision-mission",
      },
    ],
  },

  {
    id: 3,
    title: "Our Products",
    slug: "#",
    children: [
      {
        id: 21,
        title: "Stainless Steel",
        slug: "/stainless-steel",
        children: [
          {
            id: 211,
            title: "Cold Rolled Precision Stainless Steel Strips",
            slug: "/stainless-steel/cold-rolled-precision-stainless-steel-strips",
          },
          {
            id: 212,
            title: "Stainless Steel Ultra-Thin Foils",
            slug: "/stainless-steel/stainless-steel-ultra-thin-foils",
          },
        ],
      },

      {
        id: 22,
        title: "High Carbon & Alloy Steel Strips",
        slug: "/high-carbon-alloy-steel-strips",
        children: [
          {
            id: 221,
            title: "Hardened and Tempered Steel Strips",
            slug: "/high-carbon-alloy-steel-strips/hardened-and-tempered-steel-strips",
          },
          {
            id: 222,
            title: "Cold Rolled Steel Strips",
            slug: "/high-carbon-alloy-steel-strips/cold-rolled-steel-strips",
          },
        ],
      },
    ],
  },
  {
    id: 4,
    title: "Corporate Information",
    slug: "#",
    children: [
      {
        id: 334341,
        title: "Corporate Overview",
        slug: "/corporate-information/corporate-overview",
      },
      {
        id: 334342,
        title: "Holding Group Company",
        slug: "/corporate-information/holding-group-company",
      },
      {
        id: 334343,
        title: "Vision & Mission",
        slug: "/corporate-information/vision-mission",
      },
    ],
  },
  {
    id: 5,
    title: "Quality",
    slug: "#",
    children: [
      {
        id: 3771,
        title: "QEHS Policy",
        slug: "/quality/qehs-policy",
      },
      {
        id: 3551,
        title: "Our Certifications",
        slug: "/quality/certifications",
      },
      {
        id: 3451,
        title: "R&D Equipment / Facilities",
        slug: "/quality/rd-equipment",
      },
    ],
  },
  {
    id: 6,
    title: "Human Resource",
    slug: "#",
    children: [
      {
        id: 321,
        title: "Career",
        slug: "/human-resource/career",
      },
      {
        id: 331,
        title: "Employee Welfare",
        slug: "/human-resource/employee-welfare",
      },
      {
        id: 314,
        title: "Training Programs",
        slug: "/human-resource/training-programs",
      },
    ],
  },

  {
    id: 7,
    title: "Infrastructure",
    slug: "#",
    children: [
      {
        id: 41,
        title: "Manufacturing Facilities",
        slug: "/infrastructure/manufacturing-facilities",
      },
      {
        id: 42,
        title: "Testing Lab",
        slug: "/infrastructure/testing-lab",
      },
      {
        id: 43,
        title: "Plant Information",
        slug: "/infrastructure/plant-information",
      },
    ],
  },

  {
    id: 8,
    title: "Contact Us",
    slug: "/contact",
    children: [],
  },
];

export default function Header() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [headerHeight, setHeaderHeight] = useState(0);
  const headerRef = useRef(null);

  useEffect(() => {
    const updateHeight = () => {
      if (headerRef.current) {
        setHeaderHeight(headerRef.current.offsetHeight);
      }
    };

    updateHeight();

    const handleScroll = () => {
      if (window.scrollY > 150) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", updateHeight);

    // Also update height after a small delay to ensure layout is fully rendered
    const timer = setTimeout(updateHeight, 1000);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", updateHeight);
      clearTimeout(timer);
    };
  }, []);

  return (
    <>
      <div
        className="header-placeholder"
        style={{ height: isSticky ? `${headerHeight}px` : "auto" }}
      />
      <div
        ref={headerRef}
        className={`main-header-wrapper ${isSticky ? "is-sticky" : ""}`}
        style={{ viewTransitionName: "site-header" }}
      >
        <TopHeader />

        <header className="header-area style-1">
          <div className="container-fluid d-flex flex-nowrap align-items-center justify-content-between justify-content-lg-center">
            {/* Logo */}
            <div className="company-logo d-lg-none">
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
              <ul className="menu-list d-flex gap-3">
                {menuData.map((item) => (
                  <li
                    key={item.id}
                    className={
                      item.children?.length ? "menu-item-has-children" : ""
                    }
                  >
                    <Link
                      href={item.slug}
                      className={item.children?.length ? "drop-down" : ""}
                    >
                      {item.title}

                      {item.children?.length > 0 && (
                        <svg
                          width="10"
                          height="10"
                          viewBox="0 0 10 10"
                          xmlns="http://www.w3.org/2000/svg"
                          style={{ marginLeft: "6px" }}
                        >
                          <path d="M10 0.0495054L10 10.0001L8.13725 10.0001L-8.22301e-08 1.8812L1.86275 -3.55691e-07L7.35294 5.5446L7.30392 0.0495053L10 0.0495054Z" />
                          <path d="M-9.6438e-05 10.0002L6.27441 10.0002L3.62736 7.32687L-9.63211e-05 7.32687L-9.6438e-05 10.0002Z" />
                        </svg>
                      )}
                    </Link>

                    {item.children?.length > 0 && (
                      <>
                        <i className="bi bi-plus dropdown-icon"></i>

                        <ul className="sub-menu">
                          {item.children.map((child) => (
                            <li
                              key={child.id}
                              className={
                                child.children?.length
                                  ? "menu-item-has-children"
                                  : ""
                              }
                            >
                              <Link href={child.slug}>
                                <span>
                                  {child.title}

                                  {child.children?.length > 0 && (
                                    <svg
                                      width="10"
                                      height="10"
                                      viewBox="0 0 10 10"
                                      xmlns="http://www.w3.org/2000/svg"
                                      style={{ marginLeft: "6px" }}
                                    >
                                      <path d="M0.0495054 0H10.0001V1.86275L1.88121 10L0 8.13726L5.54461 2.64706L0.0495054 2.69608V0Z" />
                                      <path d="M9.99971 9.99993V3.72542L7.32642 6.37248V9.99993H9.99971Z" />
                                    </svg>
                                  )}
                                </span>
                              </Link>

                              {child.children?.length > 0 && (
                                <>
                                  <i className="d-lg-none d-flex bi bi-plus dropdown-icon"></i>

                                  <ul className="sub-menu">
                                    {child.children.map((subChild) => (
                                      <li key={subChild.id}>
                                        <Link href={subChild.slug}>
                                          <span>{subChild.title}</span>
                                        </Link>
                                      </li>
                                    ))}
                                  </ul>
                                </>
                              )}
                            </li>
                          ))}
                        </ul>
                      </>
                    )}
                  </li>
                ))}
              </ul>
            </nav>

            {/* Right Side */}
            <div className="nav-right">
              <button
                className="mobile-menu-btn d-lg-none"
                onClick={() => setMobileMenu(true)}
              >
                <Bars3Icon width={30} />
              </button>
            </div>
          </div>
          <MobileMenu mobileMenu={mobileMenu} setMobileMenu={setMobileMenu} />
        </header>
      </div>

      {/* Mobile Menu Component */}
    </>
  );
}
