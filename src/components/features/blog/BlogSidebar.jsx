import Link from "next/link";
import Image from "next/image";
import PopupCtaForm from "src/components/core/PopupCtaForm";

// Simulated API data for popular posts
// In a real application, you would fetch this array from your backend/CMS
const popularPosts = [
  {
    id: 1,
    title: "Looking Inspiration Traveling The World.",
    date: "20 January, 2025",
    image: "/images/slide1.jpg",
    slug: "looking-inspiration",
  },
  {
    id: 2,
    title: "Challenges Creating A Multi-brand System.",
    date: "12 January, 2025",
    image: "/images/slide2.jpg",
    slug: "challenges-creating",
  },
  {
    id: 3,
    title: "Decoding The Cloud And Deep Dive Creative.",
    date: "04 January, 2025",
    image: "/images/slide3.jpg",
    slug: "decoding-cloud",
  },
];

export default function BlogSidebar() {
  return (
    <div className="project-details-sidebar blog-sidebar-area">
      {/* Popular Post Widget - Dynamically Rendered */}
      <div className="single-widget mb-30">
        <h5 className="widget-title">Popular Post</h5>

        {popularPosts.map((post) => (
          <div key={post.id} className="recent-post-widget mb-25">
            <div className="recent-post-img">
              <Link href={`/blog/${post.slug}`}>
                <Image
                  src={post.image}
                  alt={post.title}
                  width={80}
                  height={80}
                  className="object-fit-cover"
                />
              </Link>
            </div>
            <div className="recent-post-content">
              <Link href="/blog">{post.date}</Link>
              <h6>
                <Link href={`/blog/${post.slug}`}>{post.title}</Link>
              </h6>
            </div>
          </div>
        ))}
      </div>

      {/* CTA Banner */}
      <div className="sidebar-banner position-relative">
        <Image
          src="/images/slide1.jpg"
          alt="Contact Us"
          width={400}
          height={400}
          style={{ width: "100%", height: "auto", objectFit: "cover" }}
        />

        <div className="banner-content-wrap">
          <div className="banner-content">
            <h2>
              Ready to <span>work with us?</span>
            </h2>

            <PopupCtaForm
              buttonText="Get a Quote"
              buttonClass="primary-btn1 white-bg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
