
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="page-transition">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter animate-fade-in">
              Hey, I'm <span className="text-primary">Your Name</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground animate-fade-in" style={{ animationDelay: "200ms" }}>
              Developer, designer, and creative problem solver
            </p>
            <div className="flex flex-wrap justify-center gap-4 pt-4 animate-fade-in" style={{ animationDelay: "400ms" }}>
              <Button asChild size="lg">
                <Link to="/contact">Get in Touch</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/projects">View My Work</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-16 bg-muted/50">
        <div className="section-container">
          <h2 className="section-title">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((item) => (
              <div key={item} className="group rounded-lg border bg-card text-card-foreground shadow transition-all hover:shadow-lg">
                <div className="aspect-video w-full bg-muted rounded-t-lg" />
                <div className="p-6">
                  <h3 className="text-xl font-bold">Project {item}</h3>
                  <p className="text-muted-foreground mt-2">
                    A brief description of this amazing project and the technologies used.
                  </p>
                  <div className="flex items-center gap-2 mt-4">
                    <Button variant="outline" size="sm" asChild>
                      <Link to={`/projects/${item}`}>View Details</Link>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Button asChild variant="outline">
              <Link to="/projects">View All Projects</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Latest Blog Posts */}
      <section className="py-16">
        <div className="section-container">
          <h2 className="section-title">Latest Posts</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[1, 2].map((item) => (
              <div key={item} className="group rounded-lg border p-6 transition-all hover:shadow-md">
                <div className="text-sm text-muted-foreground">May {item + 10}, 2023</div>
                <h3 className="text-xl font-bold mt-2">Blog Post {item}</h3>
                <p className="text-muted-foreground mt-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, fugit?
                </p>
                <Button variant="link" className="p-0 mt-4" asChild>
                  <Link to={`/blog/${item}`}>Read More →</Link>
                </Button>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Button asChild variant="outline">
              <Link to="/blog">View All Posts</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
