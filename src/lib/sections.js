/**
 * Central data file for all section pages.
 *
 * STRUCTURE:
 *   sections[sectionKey].nav    — sidebar navigation links
 *   sections[sectionKey].pages  — per-slug page content
 *
 * When a backend/CMS is ready, replace the `pages` lookups with
 * fetch() calls (e.g. fetchPage(section, slug)).
 *
 * Example API response shape (for reference):
 * {
 *   slug: "qehs-policy",
 *   title: "QEHS Policy",
 *   bannerImage: "/images/quality-banner.jpg",
 *   description: "...",
 *   content: "<p>Rich HTML from CMS...</p>",
 *   seo: {
 *     title: "QEHS Policy | Jindal Metals",
 *     description: "...",
 *     ogImage: "/images/quality-og.jpg"
 *   }
 * }
 */

export const sections = {
  aboutus: {
    label: "About Us",
    bannerImage: "/images/slide1.jpg",
    nav: [
      { title: "Corporate Overview",    slug: "corporate-overview" },
      { title: "Holding Group Company", slug: "holding-group-company" },
      { title: "Vision & Mission",      slug: "vision-mission" },
    ],
    pages: {
      "corporate-overview": {
        title: "Corporate Overview",
        bannerImage: "/images/slide1.jpg",
        description:
          "Jindal Metals & Alloys Ltd (a subsidiary of Jindal SAW Ltd) is a leading manufacturer of thin and ultra-thin precision steel strips, serving global customers across automotive, electronics, medical and engineering sectors.",
        content: `
          <p>Incorporated as a fully owned subsidiary of Jindal SAW Ltd, Jindal Metals & Alloys Ltd has grown to become one of India's premier manufacturers of precision steel strips and foils.</p>
          <p>Our state-of-the-art manufacturing facility is equipped with advanced rolling mills, annealing furnaces and precision slitting lines to deliver products that meet international quality standards.</p>
          <p>We serve customers across Asia, Europe, the Middle East, and the Americas with a commitment to consistent quality, on-time delivery and technical excellence.</p>
        `,
        seo: {
          title: "Corporate Overview | Jindal Metals & Alloys Ltd",
          description:
            "Learn about Jindal Metals & Alloys Ltd — a Jindal SAW subsidiary and leading manufacturer of precision stainless steel strips.",
        },
      },
      "holding-group-company": {
        title: "Holding Group Company",
        bannerImage: "/images/slide2.jpg",
        description:
          "Jindal SAW Ltd is one of India's largest manufacturers of iron and steel pipes and tubes, with a diversified portfolio spanning infrastructure, energy and industrial sectors.",
        content: `
          <p>Jindal SAW Ltd, the holding group company, is part of the O.P. Jindal Group — one of India's most respected industrial conglomerates.</p>
          <p>With decades of expertise in steel manufacturing and a global distribution network, Jindal SAW provides strategic support, quality infrastructure and financial strength to Jindal Metals & Alloys Ltd.</p>
          <p>The group's emphasis on innovation, sustainability and operational excellence drives our commitment to world-class manufacturing.</p>
        `,
        seo: {
          title: "Holding Group Company | Jindal Metals & Alloys Ltd",
          description:
            "Jindal SAW Ltd — the holding company and part of the O.P. Jindal Group — backs Jindal Metals & Alloys Ltd.",
        },
      },
      "vision-mission": {
        title: "Vision & Mission Statement",
        bannerImage: "/images/slide1.jpg",
        description:
          "Our vision is to be a globally recognised leader in precision steel strips, driven by innovation, customer focus and sustainable manufacturing practices.",
        content: `
          <h3>Our Vision</h3>
          <p>To be among the world's most trusted manufacturers of precision steel strips, delivering exceptional value to customers, employees and society through continuous innovation and sustainable practices.</p>
          <h3>Our Mission</h3>
          <ul>
            <li>Deliver consistently high-quality products that meet and exceed customer expectations.</li>
            <li>Foster a culture of innovation, learning and continuous improvement.</li>
            <li>Build long-term partnerships based on trust, transparency and shared growth.</li>
            <li>Operate responsibly with regard to environmental and community impact.</li>
          </ul>
        `,
        seo: {
          title: "Vision & Mission | Jindal Metals & Alloys Ltd",
          description:
            "Explore the vision and mission of Jindal Metals & Alloys Ltd — quality, innovation and sustainable manufacturing.",
        },
      },
    },
  },
  "corporate-information": {
    label: "Corporate Information",
    bannerImage: "/images/slide1.jpg",
    nav: [
      { title: "Corporate Overview",    slug: "corporate-overview" },
      { title: "Holding Group Company", slug: "holding-group-company" },
      { title: "Vision & Mission",      slug: "vision-mission" },
    ],
    pages: {
      "corporate-overview": {
        title: "Corporate Overview",
        bannerImage: "/images/slide1.jpg",
        description:
          "Jindal Metals & Alloys Ltd (a subsidiary of Jindal SAW Ltd) is a leading manufacturer of thin and ultra-thin precision steel strips, serving global customers across automotive, electronics, medical and engineering sectors.",
        content: `
          <p>Incorporated as a fully owned subsidiary of Jindal SAW Ltd, Jindal Metals & Alloys Ltd has grown to become one of India's premier manufacturers of precision steel strips and foils.</p>
          <p>Our state-of-the-art manufacturing facility is equipped with advanced rolling mills, annealing furnaces and precision slitting lines to deliver products that meet international quality standards.</p>
          <p>We serve customers across Asia, Europe, the Middle East, and the Americas with a commitment to consistent quality, on-time delivery and technical excellence.</p>
        `,
        seo: {
          title: "Corporate Overview | Jindal Metals & Alloys Ltd",
          description:
            "Learn about Jindal Metals & Alloys Ltd — a Jindal SAW subsidiary and leading manufacturer of precision stainless steel strips.",
        },
      },
      "holding-group-company": {
        title: "Holding Group Company",
        bannerImage: "/images/slide2.jpg",
        description:
          "Jindal SAW Ltd is one of India's largest manufacturers of iron and steel pipes and tubes, with a diversified portfolio spanning infrastructure, energy and industrial sectors.",
        content: `
          <p>Jindal SAW Ltd, the holding group company, is part of the O.P. Jindal Group — one of India's most respected industrial conglomerates.</p>
          <p>With decades of expertise in steel manufacturing and a global distribution network, Jindal SAW provides strategic support, quality infrastructure and financial strength to Jindal Metals & Alloys Ltd.</p>
          <p>The group's emphasis on innovation, sustainability and operational excellence drives our commitment to world-class manufacturing.</p>
        `,
        seo: {
          title: "Holding Group Company | Jindal Metals & Alloys Ltd",
          description:
            "Jindal SAW Ltd — the holding company and part of the O.P. Jindal Group — backs Jindal Metals & Alloys Ltd.",
        },
      },
      "vision-mission": {
        title: "Vision & Mission Statement",
        bannerImage: "/images/slide1.jpg",
        description:
          "Our vision is to be a globally recognised leader in precision steel strips, driven by innovation, customer focus and sustainable manufacturing practices.",
        content: `
          <h3>Our Vision</h3>
          <p>To be among the world's most trusted manufacturers of precision steel strips, delivering exceptional value to customers, employees and society through continuous innovation and sustainable practices.</p>
          <h3>Our Mission</h3>
          <ul>
            <li>Deliver consistently high-quality products that meet and exceed customer expectations.</li>
            <li>Foster a culture of innovation, learning and continuous improvement.</li>
            <li>Build long-term partnerships based on trust, transparency and shared growth.</li>
            <li>Operate responsibly with regard to environmental and community impact.</li>
          </ul>
        `,
        seo: {
          title: "Vision & Mission | Jindal Metals & Alloys Ltd",
          description:
            "Explore the vision and mission of Jindal Metals & Alloys Ltd — quality, innovation and sustainable manufacturing.",
        },
      },
    },
  },

  quality: {
    label: "Quality",
    bannerImage: "/images/slide2.jpg",
    nav: [
      { title: "QEHS Policy",            slug: "qehs-policy" },
      { title: "Our Certifications",     slug: "certifications" },
      { title: "R&D Equipment / Facilities", slug: "rd-equipment" },
    ],
    pages: {
      "qehs-policy": {
        title: "QEHS Policy",
        bannerImage: "/images/slide2.jpg",
        description:
          "Our Quality, Environment, Health & Safety (QEHS) Policy reflects our commitment to delivering superior products while protecting our people and the environment.",
        content: `
          <p>Jindal Metals & Alloys Ltd is committed to maintaining the highest standards of quality, environmental responsibility and workplace safety across all operations.</p>
          <h3>Quality Commitment</h3>
          <p>We continuously improve our processes, invest in advanced technology and train our workforce to deliver products that consistently meet customer specifications and international standards.</p>
          <h3>Environmental Responsibility</h3>
          <p>We minimise our environmental footprint through energy efficiency, waste reduction and responsible resource management.</p>
          <h3>Health & Safety</h3>
          <p>The safety and well-being of our employees is paramount. We maintain a zero-accident culture through rigorous safety protocols, training and audits.</p>
        `,
        seo: {
          title: "QEHS Policy | Jindal Metals & Alloys Ltd",
          description:
            "Our Quality, Environment, Health & Safety policy at Jindal Metals & Alloys Ltd.",
        },
      },
      certifications: {
        title: "Our Certifications",
        bannerImage: "/images/slide1.jpg",
        description:
          "Jindal Metals & Alloys Ltd holds internationally recognised quality and management system certifications that validate our commitment to excellence.",
        content: `
          <p>Our manufacturing facility and quality management systems are certified by leading international certification bodies, ensuring that our products meet global standards.</p>
          <h3>Key Certifications</h3>
          <ul>
            <li><strong>ISO 9001:2015</strong> — Quality Management System</li>
            <li><strong>ISO 14001:2015</strong> — Environmental Management System</li>
            <li><strong>ISO 45001:2018</strong> — Occupational Health & Safety</li>
            <li><strong>IATF 16949</strong> — Automotive Quality Management</li>
          </ul>
          <p>These certifications are regularly audited and renewed to ensure ongoing compliance and continuous improvement.</p>
        `,
        seo: {
          title: "Our Certifications | Jindal Metals & Alloys Ltd",
          description:
            "ISO 9001, ISO 14001, ISO 45001 and IATF 16949 certifications at Jindal Metals & Alloys Ltd.",
        },
      },
      "rd-equipment": {
        title: "R&D Equipment / Facilities",
        bannerImage: "/images/slide2.jpg",
        description:
          "Our dedicated R&D facility is equipped with advanced testing and analysis equipment to support product development, quality assurance and process improvement.",
        content: `
          <p>Innovation is at the heart of our operations. Our Research & Development centre is staffed by experienced metallurgists and engineers who continuously work to improve product performance and develop new grades and specifications.</p>
          <h3>Key Equipment & Capabilities</h3>
          <ul>
            <li>Spectrometer for chemical composition analysis</li>
            <li>Universal Testing Machine (UTM) for tensile & hardness testing</li>
            <li>Surface roughness measuring instruments</li>
            <li>Precision thickness gauges and profile analysers</li>
            <li>Metallurgical microscopes for microstructure analysis</li>
          </ul>
        `,
        seo: {
          title: "R&D Equipment & Facilities | Jindal Metals & Alloys Ltd",
          description:
            "Advanced R&D equipment and facilities for precision steel strip development at Jindal Metals & Alloys Ltd.",
        },
      },
    },
  },

  infrastructure: {
    label: "Infrastructure",
    bannerImage: "/images/slide1.jpg",
    nav: [
      { title: "Manufacturing Facilities", slug: "manufacturing-facilities" },
      { title: "Testing Lab",              slug: "testing-lab" },
      { title: "Plant Information",        slug: "plant-information" },
    ],
    pages: {
      "manufacturing-facilities": {
        title: "Manufacturing Facilities",
        bannerImage: "/images/slide1.jpg",
        description:
          "Our modern manufacturing facility spans a large area equipped with advanced rolling mills, annealing lines, slitting machines and finishing equipment.",
        content: `
          <p>Jindal Metals & Alloys Ltd operates a fully integrated manufacturing facility in India, designed to produce precision steel strips from raw material to finished product under one roof.</p>
          <h3>Key Facilities</h3>
          <ul>
            <li>Cold rolling mills for precision thickness reduction</li>
            <li>Bright annealing and controlled atmosphere furnaces</li>
            <li>Multi-blade slitting lines for precise width cutting</li>
            <li>Tension levelling and skin pass mills</li>
            <li>Surface inspection and packaging lines</li>
          </ul>
          <p>All manufacturing processes are controlled through an integrated quality management system to ensure consistency and traceability.</p>
        `,
        seo: {
          title: "Manufacturing Facilities | Jindal Metals & Alloys Ltd",
          description:
            "World-class manufacturing infrastructure for precision steel strips at Jindal Metals & Alloys Ltd.",
        },
      },
      "testing-lab": {
        title: "Testing Lab",
        bannerImage: "/images/slide2.jpg",
        description:
          "Our in-house testing laboratory is equipped with state-of-the-art instruments to verify mechanical properties, dimensional accuracy and surface quality of every product batch.",
        content: `
          <p>Quality assurance begins in our laboratory. Every coil and strip is subjected to rigorous testing before dispatch to ensure full compliance with customer specifications and international standards.</p>
          <h3>Testing Capabilities</h3>
          <ul>
            <li>Tensile strength and yield strength testing</li>
            <li>Hardness testing (Vickers, Rockwell, Brinell)</li>
            <li>Dimensional inspection — thickness, width, flatness</li>
            <li>Chemical composition analysis by spectrometry</li>
            <li>Surface roughness and finish measurement</li>
            <li>Microstructure examination under metallurgical microscope</li>
          </ul>
        `,
        seo: {
          title: "Testing Lab | Jindal Metals & Alloys Ltd",
          description:
            "Advanced in-house testing laboratory for mechanical, chemical and dimensional quality assurance.",
        },
      },
      "plant-information": {
        title: "Plant Information",
        bannerImage: "/images/slide1.jpg",
        description:
          "Our plant is strategically located with excellent logistics connectivity, housing a complete production ecosystem from incoming material inspection to finished goods dispatch.",
        content: `
          <p>The Jindal Metals & Alloys Ltd plant is designed for high efficiency, safety and environmental compliance. Key plant details:</p>
          <h3>Plant Highlights</h3>
          <ul>
            <li><strong>Location:</strong> Hisar, Haryana, India</li>
            <li><strong>Total Area:</strong> Approx. 15,000 sq. metres (covered)</li>
            <li><strong>Annual Capacity:</strong> Approx. 15,000 MT</li>
            <li><strong>Power Supply:</strong> Captive and grid, with backup systems</li>
            <li><strong>Logistics:</strong> Well connected to rail, road and air freight hubs</li>
          </ul>
          <p>The plant continuously invests in upgrades to increase capacity and improve energy efficiency.</p>
        `,
        seo: {
          title: "Plant Information | Jindal Metals & Alloys Ltd",
          description:
            "Plant location, capacity and infrastructure details for Jindal Metals & Alloys Ltd.",
        },
      },
    },
  },

  "human-resource": {
    label: "Human Resource",
    bannerImage: "/images/slide2.jpg",
    nav: [
      { title: "Career",             slug: "career" },
      { title: "Employee Welfare",   slug: "employee-welfare" },
      { title: "Training Programs",  slug: "training-programs" },
    ],
    pages: {
      career: {
        title: "Career",
        bannerImage: "/images/slide2.jpg",
        description:
          "Join a dynamic team at Jindal Metals & Alloys Ltd and build a rewarding career in precision steel manufacturing with growth, learning and competitive benefits.",
        content: `
          <p>We are always on the lookout for talented, motivated individuals who share our passion for quality and excellence. Jindal Metals & Alloys Ltd offers a stimulating work environment with opportunities for professional growth.</p>
          <h3>Why Join Us?</h3>
          <ul>
            <li>Work with industry-leading technology and processes</li>
            <li>Competitive compensation and benefits packages</li>
            <li>Structured career progression and promotion policies</li>
            <li>Collaborative and inclusive work culture</li>
            <li>Commitment to employee health, safety and well-being</li>
          </ul>
          <p>To explore current openings or send your resume, please contact our HR team at <a href="mailto:hr@jindalmetals.com">hr@jindalmetals.com</a>.</p>
        `,
        seo: {
          title: "Career | Jindal Metals & Alloys Ltd",
          description:
            "Explore career opportunities at Jindal Metals & Alloys Ltd — precision steel manufacturing with growth and purpose.",
        },
      },
      "employee-welfare": {
        title: "Employee Welfare",
        bannerImage: "/images/slide1.jpg",
        description:
          "Our employees are our most valuable asset. We invest in their health, happiness and professional development through comprehensive welfare programmes.",
        content: `
          <p>At Jindal Metals & Alloys Ltd, we believe that employee well-being is directly linked to organisational success. Our welfare initiatives ensure that every team member feels valued, supported and motivated.</p>
          <h3>Welfare Initiatives</h3>
          <ul>
            <li>Group health insurance covering employees and dependents</li>
            <li>Provident Fund and gratuity benefits</li>
            <li>Annual health check-ups and on-site medical support</li>
            <li>Safe, clean and ergonomic work environments</li>
            <li>Employee recognition and reward programmes</li>
            <li>Recreational and cultural activities</li>
          </ul>
        `,
        seo: {
          title: "Employee Welfare | Jindal Metals & Alloys Ltd",
          description:
            "Comprehensive employee welfare programmes including health, insurance and recognition at Jindal Metals.",
        },
      },
      "training-programs": {
        title: "Training Programs",
        bannerImage: "/images/slide2.jpg",
        description:
          "Continuous learning and skill development are core to our people strategy. Our training programmes equip employees with the knowledge and skills to excel.",
        content: `
          <p>We invest heavily in structured training programmes to build technical competence, managerial skills and a safety-first mindset across all levels of the organisation.</p>
          <h3>Training Areas</h3>
          <ul>
            <li><strong>Technical Training:</strong> Process knowledge, equipment operation, quality tools</li>
            <li><strong>Safety Training:</strong> Hazard identification, emergency response, safety regulations</li>
            <li><strong>Leadership Development:</strong> Management skills, decision-making, team building</li>
            <li><strong>Quality Management:</strong> ISO standards, SPC, 5S and Lean practices</li>
            <li><strong>Soft Skills:</strong> Communication, customer focus and professional effectiveness</li>
          </ul>
          <p>Training is conducted by internal experts and external professionals, with regular assessment to measure effectiveness.</p>
        `,
        seo: {
          title: "Training Programs | Jindal Metals & Alloys Ltd",
          description:
            "Structured employee training programmes covering technical, safety, quality and leadership skills.",
        },
      },
    },
  },
};

/**
 * Get section config by section key.
 * @param {string} section
 */
export function getSection(section) {
  return sections[section] ?? null;
}

/**
 * Get a single page's data within a section.
 * @param {string} section
 * @param {string} slug
 */
export function getSectionPage(section, slug) {
  return sections[section]?.pages?.[slug] ?? null;
}

/**
 * Get all section keys (for generateStaticParams).
 */
export function getAllSectionKeys() {
  return Object.keys(sections);
}
