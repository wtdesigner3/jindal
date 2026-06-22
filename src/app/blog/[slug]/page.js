import { notFound } from "next/navigation";
import Image from "next/image";
import PageHeader from "src/components/layout/PageHeader";
import BlogSidebar from "src/components/blog/BlogSidebar";

// Dummy data fetching function for blog posts
// In a real scenario, this would fetch from a database or CMS based on the slug.
const getBlogPost = (slug) => {
  // Mock response mapping slugs to data
  const blogs = {
    "revolutionizing-production": {
      title: "Revolutionizing Production Then Future of Factories.",
      bannerImage: "/images/slide1.jpg",
      date: "10 August, 2025",
      author: "Admin",
      description: "A deep dive into how factory production is evolving with modern tech.",
      content: `
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <h3>The Next Generation of Factories</h3>
        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
        <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
      `,
      seo: {
        title: "Revolutionizing Production | Jindal Metals Blog",
        description: "Blog details about revolutionizing production."
      }
    }
  };

  // We return a fallback mock so you can preview any slug for now
  return blogs[slug] || {
    ...blogs["revolutionizing-production"],
    title: slug.replace(/-/g, " ").replace(/\b\w/g, l => l.toUpperCase()),
  }; 
};

// Dynamic SEO metadata generation
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  
  if (!post) return { title: "Post Not Found" };

  return {
    title: post.seo?.title || `${post.title} | Jindal Metals`,
    description: post.seo?.description || post.description,
  };
}

export default async function BlogDetailsPage({ params }) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) notFound();

  const breadcrumb = [
    { name: "Home", href: "/" },
    { name: "Blog", href: "/blog" },
    { name: "Details" },
  ];

  return (
    <>
      {/* Page Header Component */}
      <PageHeader
        title={post.title}
        bgImage={post.bannerImage}
        breadcrumb={breadcrumb}
      />

      {/* Main Layout matches the Inner Pages Layout (col-8 + col-4) */}
      <section className="project-details-page my-5">
        <div className="container">
          <div className="row g-lg-4 gy-5 mb-80">
            
            {/* ── Main Content Area ─────────────────────────────── */}
            <div className="col-lg-8">
              <div className="blog-details-top-area mb-4 border-bottom">
                <h1 className="h-tags position-relative px-3 mb-4">
                  {post.title}
                </h1>

                {post.bannerImage && (
                  <div
                    className="position-relative mb-4"
                    style={{ height: "450px" }}
                  >
                    <Image
                      src={post.bannerImage}
                      alt={post.title}
                      fill
                      className="object-fit-cover rounded"
                      sizes="(max-width: 768px) 100vw, 66vw"
                      priority
                    />
                  </div>
                )}
                
                {/* Blog Meta Data */}
                {/* <div className="blog-meta mb-4 pb-4 border-bottom">
                    <ul className="list-unstyled d-flex gap-4 text-muted mb-0">
                        <li>
                           <i className="bi bi-calendar3 me-2"></i>
                           <strong>{post.date}</strong>
                        </li>
                        <li>
                           <i className="bi bi-person-circle me-2"></i>
                           <strong>By {post.author}</strong>
                        </li>
                    </ul>
                </div> */}
              </div>

              {/* HTML Content Rendered */}
              <div className="details-content-wrapper">
                {post.description && (
                  <p className="lead mb-4 fw-medium text-secondary">{post.description}</p>
                )}

                {post.content && (
                  <div
                    className="blog-content"
                    dangerouslySetInnerHTML={{ __html: post.content }}
                  />
                )}
              </div>
            </div>

            {/* ── Sidebar Area ──────────────────────────────────── */}
            <div className="col-lg-4">
              <BlogSidebar />
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
