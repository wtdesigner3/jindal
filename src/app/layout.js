import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "src/components/layout/Header";
import Footer from "src/components/layout/Footer";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'swiper/css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'boxicons/css/boxicons.min.css';
import '@fancyapps/ui/dist/fancybox/fancybox.css';
import "../css/style.css"
import NavigationProgress from "src/components/core/NavigationProgress";
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});
export const metadata = {
  metadataBase: new URL('https://www.jindalmetals.com'),
  title: {
    default: 'Jindal Metals & Alloys Ltd | Precision Stainless Steel Strips',
    template: '%s | Jindal Metals & Alloys Ltd'
  },
  description: 'Jindal Metals & Alloys Ltd (subsidiary of Jindal SAW Ltd) manufactures thin & ultra-thin Precision Stainless Steel Strips with global standards of quality.',
  alternates: {
    canonical: 'https://www.jindalmetals.com',
  },
  openGraph: {
    title: 'Jindal Metals & Alloys Ltd',
    description: 'Leading manufacturer of Precision Stainless Steel Strips.',
    url: 'https://www.jindalmetals.com',
    siteName: 'Jindal Metals & Alloys',
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function RootLayout({ children }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ManufacturingBusiness',
    name: 'Jindal Metals & Alloys Ltd',
    url: 'https://www.jindalmetals.com',
    description: 'Leading manufacturer of Precision Stainless Steel Strips.',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Hisar',
      addressRegion: 'Haryana',
      addressCountry: 'IN'
    }
  };

  return (
    <html
      lang="en"
      className={`h-full antialiased ${poppins.className}`}
    >
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <NavigationProgress />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
