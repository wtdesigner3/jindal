import PageHeader from "src/components/layout/PageHeader";
import BlogCard from "src/components/features/blog/BlogCard";

export const metadata = {
  title: "Blog & Updates | Jindal Metals & Alloys Ltd",
  description:
    "Read the latest industry news, manufacturing updates, and articles from Jindal Metals & Alloys Ltd on stainless steel, production technology, and sustainability.",
  alternates: {
    canonical: "https://www.jindalmetals.com/blog",
  },
};

// Dummy data for the blog listing page
const blogData = [
    {
        id: 1,
        image: "/images/slide1.jpg",
        date: "10 August, 2025",
        category: "Industry",
        title: "Revolutionizing Production Then Future of Factories.",
        link: "/blog/revolutionizing-production",
    },
    {
        id: 2,
        image: "/images/slide2.jpg",
        date: "12 August, 2025",
        category: "Architecture",
        title: "Factory Spotlight Technology Efficiency in Manufacturing.",
        link: "/blog/factory-spotlight",
    },
    {
        id: 3,
        image: "/images/slide3.jpg",
        date: "10 May, 2025",
        category: "Renovation",
        title: "Pulse of Manufacturing Factories News & Advances.",
        link: "/blog/pulse-of-manufacturing",
    },
    {
        id: 4,
        image: "/images/slide2.jpg",
        date: "15 August, 2025",
        category: "Industry",
        title: "Technological Efficiency in the Factory.",
        link: "/blog/technological-efficiency",
    },
    {
        id: 5,
        image: "/images/slide1.jpg",
        date: "20 September, 2025",
        category: "Sustainability",
        title: "Green Manufacturing: The Future of the Steel Industry.",
        link: "/blog/green-manufacturing",
    },
    {
        id: 6,
        image: "/images/slide3.jpg",
        date: "25 October, 2025",
        category: "Innovation",
        title: "Advancements in Precision Steel Strip Production.",
        link: "/blog/advancements-precision-steel",
    }
];

export default function BlogPage() {
    const breadcrumb = [
        { name: "Home", href: "/" },
        { name: "Blog" }
    ];

    return (
        <>
            <PageHeader
                title="Our Blog & Articles"
                bgImage="/images/slide2.jpg"
                breadcrumb={breadcrumb}
            />

            {/* Main content grid: 3 per row on large screens (col-lg-4), 2 per row on medium (col-md-6) */}
            <section className="blog-page-section my-5">
                <div className="container">
                    <div className="row g-4 mb-80">
                        {blogData.map((blog) => (
                            <div key={blog.id} className="col-lg-4 col-md-6">
                                <BlogCard blog={blog} />
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
