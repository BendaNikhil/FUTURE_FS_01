import { motion } from "framer-motion";
import { ArrowDown, FileText, FolderOpen, Mail } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpeg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center section-padding pt-28">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-64 h-64 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full bg-primary/5 blur-3xl" />
      </div>

      <div className="container mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-primary font-display font-medium mb-3 text-sm tracking-widest uppercase">
              Hello, I'm
            </p>
            <h1 className="font-display text-5xl md:text-7xl font-bold leading-tight mb-4">
              BENDA{" "}
              <span className="text-gradient">NIKHIL</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-6 font-display font-light">
              Aspiring Full Stack Web Developer
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8 max-w-lg">
              A passionate computer science student building real-world applications with modern technologies. 
              Driven by curiosity, fueled by code.
            </p>
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => document.dispatchEvent(new CustomEvent('open-resume'))}
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity"
              >
                <FileText size={18} />
                View Resume
              </button>
              <a
                href="#projects"
                className="inline-flex items-center gap-2 border border-primary/30 text-primary px-6 py-3 rounded-lg font-medium hover:bg-primary/10 transition-colors"
              >
                <FolderOpen size={18} />
                View Projects
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 border border-border text-foreground px-6 py-3 rounded-lg font-medium hover:bg-secondary transition-colors"
              >
                <Mail size={18} />
                Contact Me
              </a>
            </div>
          </motion.div>

          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="w-72 h-72 md:w-80 md:h-80 rounded-2xl overflow-hidden border-2 border-primary/20 glow-border">
                <img
                  src={profilePhoto}
                  alt="Benda Nikhil - Full Stack Developer"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-72 h-72 md:w-80 md:h-80 rounded-2xl border border-primary/10 -z-10" />
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground hidden lg:block"
        >
          <ArrowDown size={20} />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
