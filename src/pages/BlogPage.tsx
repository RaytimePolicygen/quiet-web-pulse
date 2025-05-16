
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const posts = [
  {
    id: 1,
    title: "Getting Started with React and TypeScript",
    excerpt: "Learn how to set up and start using React with TypeScript to build type-safe applications.",
    date: "May 15, 2023",
    category: "Development",
    readTime: "5 min read",
  },
  {
    id: 2,
    title: "Mastering Tailwind CSS: From Beginner to Expert",
    excerpt: "A comprehensive guide to utilizing Tailwind CSS for creating beautiful and responsive designs.",
    date: "April 28, 2023",
    category: "Design",
    readTime: "8 min read",
  },
  {
    id: 3,
    title: "The Power of State Management in Modern Web Applications",
    excerpt: "Explore different state management solutions and when to use each one effectively.",
    date: "April 10, 2023",
    category: "Development",
    readTime: "6 min read",
  },
  {
    id: 4,
    title: "Creating Accessible Interfaces: A Developer's Guide",
    excerpt: "Learn how to design and develop inclusive web applications that everyone can use.",
    date: "March 22, 2023",
    category: "Accessibility",
    readTime: "7 min read",
  },
  {
    id: 5,
    title: "From Idea to Launch: My Journey Building a SaaS Product",
    excerpt: "The challenges and lessons learned from building and launching a software as a service product.",
    date: "March 5, 2023",
    category: "Entrepreneurship",
    readTime: "10 min read",
  },
  {
    id: 6,
    title: "Performance Optimization Techniques for Web Applications",
    excerpt: "Practical strategies to improve the speed and performance of your web applications.",
    date: "February 18, 2023",
    category: "Development",
    readTime: "9 min read",
  },
];

const BlogPage = () => {
  return (
    <div className="page-transition">
      <div className="section-container">
        <h1 className="section-title">Blog</h1>
        <p className="text-lg text-muted-foreground max-w-3xl mb-10">
          Thoughts, ideas, and insights on web development, design, and technology.
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {posts.map((post) => (
            <div 
              key={post.id} 
              className="group border rounded-lg p-6 transition-all hover:shadow-md"
            >
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <span>{post.category}</span>
                <span>•</span>
                <span>{post.date}</span>
                <span>•</span>
                <span>{post.readTime}</span>
              </div>
              <h2 className="text-xl font-bold mt-3 group-hover:text-primary transition-colors">
                <Link to={`/blog/${post.id}`}>{post.title}</Link>
              </h2>
              <p className="text-muted-foreground mt-2">
                {post.excerpt}
              </p>
              <Button variant="link" className="p-0 mt-4" asChild>
                <Link to={`/blog/${post.id}`}>Read More →</Link>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
