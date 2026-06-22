export default function sitemap() {
  const baseUrl = 'https://www.jindalmetals.com';

  // ─── Static Routes ────────────────────────────────────────────
  const staticRoutes = [
    { url: '', changeFrequency: 'daily', priority: 1.0 },

    // Blog & Utility
    { url: '/blog',           changeFrequency: 'weekly',  priority: 0.9 },
    { url: '/contact',        changeFrequency: 'monthly', priority: 0.8 },
    { url: '/gallery',        changeFrequency: 'monthly', priority: 0.7 },
    { url: '/certifications', changeFrequency: 'monthly', priority: 0.7 },

    // Product Category Pages
    { url: '/stainless-steel',                  changeFrequency: 'monthly', priority: 0.9 },
    { url: '/high-carbon-alloy-steel-strips',   changeFrequency: 'monthly', priority: 0.9 },
    { url: '/technical-information',            changeFrequency: 'monthly', priority: 0.8 },

    // Product Detail Pages
    { url: '/stainless-steel/cold-rolled-precision-stainless-steel-strips', changeFrequency: 'monthly', priority: 0.8 },
    { url: '/stainless-steel/stainless-steel-ultra-thin-foils',             changeFrequency: 'monthly', priority: 0.8 },
    { url: '/high-carbon-alloy-steel-strips/hardened-and-tempered-steel-strips', changeFrequency: 'monthly', priority: 0.8 },
    { url: '/high-carbon-alloy-steel-strips/cold-rolled-steel-strips',           changeFrequency: 'monthly', priority: 0.8 },
    { url: '/technical-information/grades-properties',  changeFrequency: 'monthly', priority: 0.7 },
    { url: '/technical-information/edge-condition',     changeFrequency: 'monthly', priority: 0.7 },
    { url: '/technical-information/tolerances',         changeFrequency: 'monthly', priority: 0.7 },

    // About Us Section
    { url: '/aboutus/corporate-overview',    changeFrequency: 'monthly', priority: 0.8 },
    { url: '/aboutus/holding-group-company', changeFrequency: 'monthly', priority: 0.7 },
    { url: '/aboutus/vision-mission',        changeFrequency: 'monthly', priority: 0.7 },

    // Corporate Information
    { url: '/corporate-information/corporate-overview',    changeFrequency: 'monthly', priority: 0.7 },
    { url: '/corporate-information/holding-group-company', changeFrequency: 'monthly', priority: 0.7 },
    { url: '/corporate-information/vision-mission',        changeFrequency: 'monthly', priority: 0.7 },

    // Quality
    { url: '/quality/qehs-policy',    changeFrequency: 'monthly', priority: 0.7 },
    { url: '/quality/certifications', changeFrequency: 'monthly', priority: 0.7 },
    { url: '/quality/rd-equipment',   changeFrequency: 'monthly', priority: 0.7 },

    // Infrastructure
    { url: '/infrastructure/manufacturing-facilities', changeFrequency: 'monthly', priority: 0.7 },
    { url: '/infrastructure/testing-lab',              changeFrequency: 'monthly', priority: 0.7 },
    { url: '/infrastructure/plant-information',        changeFrequency: 'monthly', priority: 0.7 },

    // Human Resource
    { url: '/human-resource/career',             changeFrequency: 'monthly', priority: 0.7 },
    { url: '/human-resource/employee-welfare',   changeFrequency: 'monthly', priority: 0.6 },
    { url: '/human-resource/training-programs',  changeFrequency: 'monthly', priority: 0.6 },
  ];

  return staticRoutes.map((route) => ({
    url: `${baseUrl}${route.url}`,
    lastModified: new Date(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
