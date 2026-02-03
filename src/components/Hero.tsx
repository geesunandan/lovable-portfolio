import { motion } from "framer-motion";
import { Cloud, Server, Github, Linkedin, Mail } from "lucide-react";
import awsSaaBadge from "../assets/aws-saa-badge.png";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-4 py-16 sm:py-20 md:py-24">
      {/* Background grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(hsl(var(--border)/0.3)_1px,transparent_1px),linear-gradient(90deg,hsl(var(--border)/0.3)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,black_40%,transparent_100%)]" />
      
      {/* Floating orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '-3s' }} />

      <div className="container mx-auto max-w-5xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          {/* Terminal-style intro */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="glass-card p-6 mb-8 inline-block"
          >
            <div className="flex items-center gap-2 mb-3">
              <span className="w-3 h-3 rounded-full bg-destructive" />
              <span className="w-3 h-3 rounded-full bg-warning" />
              <span className="w-3 h-3 rounded-full bg-success" />
              <span className="ml-4 text-muted-foreground text-sm font-mono">terminal</span>
            </div>
            <code className="text-primary font-mono text-lg">
              <span className="text-success">➜</span> whoami<span className="terminal-cursor ml-1" />
            </code>
          </motion.div>

          {/* Name and title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-5xl md:text-7xl font-bold mb-4 font-mono"
          >
            <span className="text-gradient">Sunandan</span>{" "}
            <span className="text-foreground">Ghimire</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex items-center justify-center gap-3 mb-6"
          >
            <Cloud className="w-6 h-6 text-primary" />
            <h2 className="text-xl md:text-2xl text-muted-foreground font-mono">
              DevOps Engineer
            </h2>
            <Server className="w-6 h-6 text-accent" />
          </motion.div>

          {/* AWS Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="flex flex-col items-center gap-3 mb-8"
          >
            <a
              href="https://www.credly.com/badges/958c8673-c82e-4224-af1e-ba97c2f14f29/linked_in_profile"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full outline-none focus-visible:ring-2 focus-visible:ring-primary/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background hover:scale-[1.02] transition-transform"
              aria-label="View AWS Certified Solutions Architect – Associate badge on Credly"
              title="View badge on Credly"
            >
              <img
                src={awsSaaBadge}
                alt="AWS Certified Solutions Architect – Associate badge"
                className="h-24 w-24 sm:h-28 sm:w-28 md:h-32 md:w-32 object-contain"
                loading="lazy"
              />
            </a>

            <a
              href="https://www.credly.com/badges/958c8673-c82e-4224-af1e-ba97c2f14f29/linked_in_profile"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/80 border border-primary/30 outline-none focus-visible:ring-2 focus-visible:ring-primary/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              aria-label="View AWS Certified Solutions Architect – Associate badge on Credly"
              title="View badge on Credly"
            >
              <span className="w-2 h-2 rounded-full bg-success animate-pulse" />
              <span className="text-sm font-mono text-foreground hover:text-primary transition-colors">
                AWS Certified Solutions Architect – Associate
              </span>
            </a>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            Experienced in building and maintaining{" "}
            <span className="text-primary">cloud infrastructure</span>,{" "}
            <span className="text-accent">CI/CD pipelines</span>, and{" "}
            <span className="text-success">highly available systems</span>.
            
          </motion.p>

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="flex items-center justify-center gap-4"
          >
            <a
              href="https://github.com/geesunandan"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 glass-card hover:border-primary/50 transition-all duration-300 hover:glow-primary"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://linkedin.com/in/sunandan-ghimire"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 glass-card hover:border-primary/50 transition-all duration-300 hover:glow-primary"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="mailto:ghimiresunandan@gmail.com"
              className="p-3 glass-card hover:border-primary/50 transition-all duration-300 hover:glow-primary"
            >
              <Mail className="w-6 h-6" />
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-2">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 rounded-full bg-primary"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
