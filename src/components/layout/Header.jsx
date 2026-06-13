"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Bars3Icon } from "@heroicons/react/24/outline";
import MobileMenu from "./MobileMenu";
export const menuData = [
  {
    id: 1,
    title: "About Us",
    slug: "#",
    children: [],
  },

  {
    id: 2,
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
      //  {
      //   id: 23,
      //   title: "Technical Information",
      //   slug: "/technical-information",
      //   children: [
      //     {
      //       id: 231,
      //       title: "Grades & Its Properties",
      //       slug: "/technical-information/grades-properties",
      //     },
      //     {
      //       id: 232,
      //       title: "Edge Condition",
      //       slug: "/technical-information/edge-condition",
      //     },
      //     {
      //       id: 233,
      //       title: "Tolerances",
      //       slug: "/technical-information/tolerances",
      //     },
      //     {
      //       id: 234,
      //       title: "Hardness Ranges",
      //       slug: "/technical-information/hardness-ranges",
      //     },
      //   ],
      // },


    ],
  },
  {
    id: 3,
    title: "Corporate Information",
    slug: "#",
    children: [
      {
        id: 31,
        title: "CSR",
        slug: "/csr",
      },
    ],
  },

  {
    id: 4,
    title: "Infrastructure",
    slug: "#",
    children: [
      {
        id: 41,
        title: "Cold Rolled Precision Stainless Steel Strips",
        slug: "/infrastructure",
      },
    ],
  },

  {
    id: 5,
    title: "Blogs",
    slug: "/blogs",
    children: [],
  },
];
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
              {menuData.map((item) => (
                <li
                  key={item.id}
                  className={item.children?.length ? "menu-item-has-children" : ""}
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