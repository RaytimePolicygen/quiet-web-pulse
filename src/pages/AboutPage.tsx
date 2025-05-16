
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const AboutPage = () => {
  const skills = [
    { name: "Frontend Development", level: 90 },
    { name: "UI/UX Design", level: 85 },
    { name: "Backend Development", level: 75 },
    { name: "DevOps", level: 65 },
  ];

  return (
    <div className="page-transition">
      <div className="section-container">
        <h1 className="section-title">About Me</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-6">
            <p className="text-lg">
              Hello! I'm a passionate developer specializing in creating beautiful, functional, and user-friendly websites and applications. With over 5 years of experience in the field, I've had the opportunity to work on a diverse range of projects, from small business websites to complex web applications.
            </p>
            <p>
              My journey in web development started when I was in college, tinkering with HTML and CSS to create simple websites. As I delved deeper into the world of programming, I found my passion in crafting digital experiences that are not only visually appealing but also highly functional and accessible.
            </p>
            <p>
              When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or sharing my knowledge through blog posts and tutorials. I'm constantly learning and evolving, keeping up with the latest trends and best practices in the industry.
            </p>
            <div className="pt-4">
              <Button asChild>
                <Link to="/contact">Get in Touch</Link>
              </Button>
            </div>
          </div>
          <div className="lg:col-span-1">
            <div className="aspect-square bg-muted rounded-lg"></div>
          </div>
        </div>
        
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-8">Skills & Expertise</h2>
          <div className="space-y-6">
            {skills.map((skill) => (
              <div key={skill.name} className="space-y-2">
                <div className="flex justify-between">
                  <span className="font-medium">{skill.name}</span>
                  <span>{skill.level}%</span>
                </div>
                <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                  <div
                    className="h-full bg-primary"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-8">Experience</h2>
          <div className="space-y-8">
            {[1, 2, 3].map((item) => (
              <div key={item} className="border-l-2 border-muted pl-6 relative">
                <div className="absolute w-3 h-3 bg-primary rounded-full -left-[7px] top-1"></div>
                <h3 className="text-xl font-bold">Company {item}</h3>
                <p className="text-muted-foreground">Position • 2020 - Present</p>
                <p className="mt-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
