"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

/**
 * SectionSidebar — Client Component
 *
 * Renders the sidebar navigation for a section.
 * Automatically highlights the active page using usePathname().
 *
 * Props:
 *   sectionKey  {string}  e.g. "quality"
 *   nav         {Array}   [{ title, slug }]
 */
export default function SectionSidebar({ sectionKey, nav }) {
  const pathname = usePathname();

  return (
    <div className="project-details-sidebar blog-sidebar-area">
      {/* Navigation Widget */}
      <div className="single-widget mb-30">
        <h5 className="widget-title">
          {nav.length > 0 && "Quick Links"}
        </h5>

        <ul className="category-list">
          {nav.map((item) => {
            const href = `/${sectionKey}/${item.slug}`;
            const isActive = pathname === href;

            return (
              <li key={item.slug} className={isActive ? "active" : ""}>
                <Link href={href}>
                  <span>
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M0.0594069 0H12.0002V2.23531L2.25746 12.0001L0 9.76478L6.65357 3.17649L0.0594069 3.23532V0Z" />
                      <path d="M12.0009 12.0002V4.4707L8.79297 7.6472V12.0002H12.0009Z" />
                    </svg>
                    {item.title}
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>

      {/* CTA Banner */}
      <div className="sidebar-banner">
        <img
          src="/images/slide1.jpg"
          alt="Contact Us"
          style={{ width: "100%", height: "auto", objectFit: "cover" }}
        />

        <div className="banner-content-wrap">
          <div className="banner-content">
            <h2>
              Ready to <span>work with us?</span>
            </h2>

            <Link href="/contact" className="primary-btn1 white-bg">
              <span>Connect Today</span>

              <svg
                className="arrow"
                width="23"
                height="23"
                viewBox="0 0 23 23"
              >
                <g>
                  <path d="M0.113861 0H22.9999V4.28425L4.32671 22.9997L0 18.7154L12.7524 6.08815L0.113861 6.20089V0Z" />
                  <path d="M23 22.9996V8.56848L16.8516 14.6566V22.9996H23Z" />
                </g>
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
