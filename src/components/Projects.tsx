import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Hand Gesture Virtual Mouse",
    description:
      "Built an AI-powered system that lets users control their computer cursor through hand gestures captured via webcam. Eliminates the need for physical input devices, improving accessibility.",
    tech: ["Python", "OpenCV", "MediaPipe", "AI/ML"],
    github: "https://github.com/bendanikhil",
  },
  {
    title: "Waste Management System",
    description:
      "Developed a web-based platform to streamline waste collection and management. Features include scheduling pickups, tracking waste status, and generating reports for efficient resource allocation.",
    tech: ["HTML", "CSS", "JavaScript", "Node.js", "MongoDB"],
    github: "https://github.com/bendanikhil",
  },
  {
    title: "Online Mock Test Platform",
    description:
      "Created an interactive platform for students to take timed mock examinations. Supports multiple question types, instant scoring, and performance analytics to aid exam preparation.",
    tech: ["React", "Node.js", "MySQL", "REST API"],
    github: "https://github.com/bendanikhil",
  },
  {
    title: "Future Projects",
    description:
      "Continuously working on new projects including internship tasks and open-source contributions. Stay tuned for updates on innovative solutions in web development and AI.",
    tech: ["React", "TypeScript", "AI", "Cloud"],
    github: "https://github.com/bendanikhil",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="section-padding bg-card/30">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="text-primary font-display text-sm tracking-widest uppercase mb-2">Portfolio</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold">My Projects</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="glass-card rounded-xl p-6 hover:glow-border transition-all duration-300 group"
            >
              <h3 className="font-display text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-5">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="px-2.5 py-1 text-xs rounded-md bg-primary/10 text-primary font-medium"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  <Github size={16} /> View Code
                </a>
                <span className="inline-flex items-center gap-1.5 text-sm text-muted-foreground/50 cursor-default">
                  <ExternalLink size={16} /> Live Demo
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
