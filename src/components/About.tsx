import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { GraduationCap, MapPin, Calendar } from "lucide-react";
import resumeImg from "@/assets/resume.jpeg";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";

const skills = [
  "HTML", "CSS", "JavaScript", "React", "Node.js", "Python",
  "Java", "C++", "MongoDB", "MySQL", "Git", "Web Design",
];

const education = [
  {
    degree: "B.Tech CSE",
    institution: "Indur Institute of Engineering and Technology",
    period: "2025 – 2028",
  },
  {
    degree: "Diploma in Computer Science Engineering",
    institution: "Indur Institute of Engineering and Technology",
    period: "2022 – 2025",
  },
  {
    degree: "SSC",
    institution: "ZPHS Indiranagar, Siddipet",
    period: "Completed 2022",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.5 },
  }),
};

const About = () => {
  const [showResume, setShowResume] = useState(false);

  useEffect(() => {
    const handler = () => setShowResume(true);
    document.addEventListener('open-resume', handler);
    return () => document.removeEventListener('open-resume', handler);
  }, []);

  return (
    <>
      <Dialog open={showResume} onOpenChange={setShowResume}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-auto">
          <DialogTitle className="sr-only">Resume</DialogTitle>
          <img src={resumeImg} alt="Benda Nikhil Resume" className="w-full rounded-lg" />
        </DialogContent>
      </Dialog>
    <section id="about" className="section-padding">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="text-primary font-display text-sm tracking-widest uppercase mb-2">About Me</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold">Who I Am</h2>
        </motion.div>

        <div className="max-w-2xl">
          {/* Left: bio + skills */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.p variants={fadeUp} custom={0} className="text-muted-foreground leading-relaxed mb-6">
              I'm Benda Nikhil, a Computer Science student from Siddipet, India with a strong passion for 
              building impactful software. I specialize in full-stack web development and have hands-on 
              experience with AI, robotics, and business development.
            </motion.p>
            <motion.p variants={fadeUp} custom={1} className="text-muted-foreground leading-relaxed mb-8">
              My goal is to become a skilled full-stack developer, creating solutions that solve real-world 
              problems. I thrive on learning new technologies and turning ideas into functional applications.
            </motion.p>

            <motion.h3 variants={fadeUp} custom={2} className="font-display text-lg font-semibold mb-4 text-foreground">
              Tech Stack & Skills
            </motion.h3>
            <motion.div variants={fadeUp} custom={3} className="flex flex-wrap gap-2 mb-10">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1.5 text-sm rounded-md bg-secondary text-secondary-foreground font-medium"
                >
                  {skill}
                </span>
              ))}
            </motion.div>

            <motion.h3 variants={fadeUp} custom={4} className="font-display text-lg font-semibold mb-4 text-foreground">
              Education
            </motion.h3>
            <div className="space-y-4">
              {education.map((edu, i) => (
                <motion.div
                  key={edu.degree}
                  variants={fadeUp}
                  custom={5 + i}
                  className="glass-card rounded-lg p-4"
                >
                  <div className="flex items-start gap-3">
                    <GraduationCap size={20} className="text-primary mt-0.5 shrink-0" />
                    <div>
                      <h4 className="font-display font-semibold text-foreground">{edu.degree}</h4>
                      <p className="text-sm text-muted-foreground flex items-center gap-1 mt-0.5">
                        <MapPin size={12} /> {edu.institution}
                      </p>
                      <p className="text-sm text-primary flex items-center gap-1 mt-0.5">
                        <Calendar size={12} /> {edu.period}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
    </>
  );
};

export default About;
