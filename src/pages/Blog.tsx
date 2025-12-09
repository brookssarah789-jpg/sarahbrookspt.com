import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Clock, Tag } from "lucide-react";

const blogPosts = [
  {
    id: 1,
    title: "Understanding Your Pelvic Floor: A Beginner's Guide",
    excerpt: "Learn the basics of pelvic floor anatomy and function, and why this often-overlooked muscle group is so important for your overall health.",
    date: "Coming Soon",
    readTime: "5 min read",
    category: "Education",
  },
  {
    id: 2,
    title: "Return to Running Postpartum: A Safe, Gradual Approach",
    excerpt: "Eager to get back to running after having a baby? Here's what you need to know about safely returning to exercise postpartum.",
    date: "Coming Soon",
    readTime: "7 min read",
    category: "Postpartum",
  },
  {
    id: 3,
    title: "Why Kegels Aren't Always the Answer",
    excerpt: "Kegels are often the go-to advice for pelvic floor issues, but they're not right for everyone. Here's how to know what your body needs.",
    date: "Coming Soon",
    readTime: "6 min read",
    category: "Treatment",
  },
  {
    id: 4,
    title: "Breathing and Your Pelvic Floor: The Connection You Need to Know",
    excerpt: "Discover how your breathing patterns directly affect your pelvic floor function and learn techniques to improve both.",
    date: "Coming Soon",
    readTime: "4 min read",
    category: "Wellness",
  },
  {
    id: 5,
    title: "Pregnancy Exercise Myths: What's Safe and What's Not",
    excerpt: "There's a lot of conflicting information about exercise during pregnancy. Let's separate the facts from the fiction.",
    date: "Coming Soon",
    readTime: "8 min read",
    category: "Pregnancy",
  },
  {
    id: 6,
    title: "When to Seek Help for Pelvic Pain",
    excerpt: "Pelvic pain can have many causes. Learn the signs that indicate it's time to see a pelvic floor specialist.",
    date: "Coming Soon",
    readTime: "5 min read",
    category: "Pain",
  },
];

export default function Blog() {
  return (
    <>
      {/* Hero */}
      <section className="py-20 lg:py-28 hero-gradient">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-primary font-medium uppercase tracking-wider text-sm">Resources</span>
            <h1 className="font-serif text-4xl md:text-5xl font-semibold text-foreground mt-3 mb-6">
              Blog & Resources
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Educational content, tips, and insights to help you understand your body 
              and support your healing journey.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article 
                key={post.id}
                className="bg-card rounded-2xl border border-border overflow-hidden group hover:border-primary/30 transition-all duration-300 hover:card-shadow-hover"
              >
                <div className="aspect-video bg-secondary/50 flex items-center justify-center">
                  <span className="text-muted-foreground text-sm">Video/Image Coming Soon</span>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="inline-flex items-center gap-1 text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded-full">
                      <Tag className="w-3 h-3" />
                      {post.category}
                    </span>
                  </div>
                  <h3 className="font-serif text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-4 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 lg:py-28 bg-card">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-6">
            Stay Updated
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
            New content is coming soon! In the meantime, reach out if you have questions 
            or topics you&apos;d like me to cover.
          </p>
          <Button asChild variant="hero" size="xl">
            <Link to="/contact">
              Get in Touch
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </Button>
        </div>
      </section>
    </>
  );
}
