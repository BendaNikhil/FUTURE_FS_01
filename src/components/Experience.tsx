import { motion } from "framer-motion";
import { Lightbulb, Wrench, Rocket } from "lucide-react";

const experiences = [
  {
    icon: Lightbulb,
    title: "AI & Computer Vision",
    summary:
      "Explored AI/ML concepts by building a hand gesture virtual mouse using OpenCV and MediaPipe. Learned real-time image processing, gesture recognition, and human-computer interaction.",
  },
  {
    icon: Wrench,
    title: "Full Stack Web Development",
    summary:
      "Designed and developed complete web applications including a waste management system and an online mock test platform. Gained proficiency in frontend frameworks, backend APIs, and database management.",
  },
  {
    icon: Rocket,
    title: "Problem Solving & Innovation",
    summary:
      "Consistently applied analytical thinking across projects—optimizing performance, debugging complex issues, and delivering user-focused solutions. Eager to tackle new challenges in software engineering.",
  },
];

const Experience = () => {
  return (
    <section id="experience" className="section-padding">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="text-primary font-display text-sm tracking-widest uppercase mb-2">Experience</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold">What I've Learned</h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className="glass-card rounded-xl p-6 text-center hover:glow-border transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <exp.icon size={24} className="text-primary" />
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-3">{exp.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{exp.summary}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
