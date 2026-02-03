import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Github, Linkedin, FileText } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-mono mb-4">
            <span className="text-muted-foreground">{"// "}</span>
            <span className="text-gradient">Get in Touch</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="glass-card p-8 md:p-12"
        >
          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Info */}
            <div className="space-y-6">
              <h3 className="text-xl font-mono font-semibold text-foreground mb-6">
                Contact Information
              </h3>

              <a
                href="mailto:ghimiresunandan@gmail.com"
                className="flex items-center gap-4 p-4 rounded-lg bg-secondary/50 border border-border/50 hover:border-primary/50 transition-all duration-300 group"
              >
                <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="text-foreground font-mono">ghimiresunandan@gmail.com</p>
                </div>
              </a>

              {/* <a
                href="tel:+9779860527007"
                className="flex items-center gap-4 p-4 rounded-lg bg-secondary/50 border border-border/50 hover:border-accent/50 transition-all duration-300 group"
              >
                <div className="p-3 rounded-lg bg-accent/10 group-hover:bg-accent/20 transition-colors">
                  <Phone className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Phone</p>
                  <p className="text-foreground font-mono">+977 9860527007</p>
                </div>
              </a> */}

              <div className="flex items-center gap-4 p-4 rounded-lg bg-secondary/50 border border-border/50">
                <div className="p-3 rounded-lg bg-success/10">
                  <MapPin className="w-5 h-5 text-success" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Location</p>
                  <p className="text-foreground font-mono">Bhaktapur, Nepal</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-xl font-mono font-semibold text-foreground mb-6">
                Connect With Me
              </h3>

              <div className="space-y-4">
                <a
                  href="https://github.com/geesunandan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-lg bg-secondary/50 border border-border/50 hover:border-primary/50 transition-all duration-300 group"
                >
                  <div className="p-3 rounded-lg bg-foreground/5 group-hover:bg-foreground/10 transition-colors">
                    <Github className="w-5 h-5 text-foreground" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-muted-foreground">GitHub</p>
                    <p className="text-foreground font-mono">@geesunandan</p>
                  </div>
                  <span className="text-muted-foreground group-hover:text-primary transition-colors">→</span>
                </a>

                <a
                  href="https://www.linkedin.com/in/sunandan-ghimire-a5735a215/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-lg bg-secondary/50 border border-border/50 hover:border-primary/50 transition-all duration-300 group"
                >
                  <div className="p-3 rounded-lg bg-foreground/5 group-hover:bg-foreground/10 transition-colors">
                    <Linkedin className="w-5 h-5 text-foreground" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-muted-foreground">LinkedIn</p>
                    <p className="text-foreground font-mono">sunandan-ghimire</p>
                  </div>
                  <span className="text-muted-foreground group-hover:text-primary transition-colors">→</span>
                </a>

                <a
                  href="https://medium.com/@ghimiresunandan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-lg bg-secondary/50 border border-border/50 hover:border-primary/50 transition-all duration-300 group"
                >
                  <div className="p-3 rounded-lg bg-foreground/5 group-hover:bg-foreground/10 transition-colors">
                    <FileText className="w-5 h-5 text-foreground" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-muted-foreground">Medium</p>
                    <p className="text-foreground font-mono">@ghimiresunandan</p>
                  </div>
                  <span className="text-muted-foreground group-hover:text-primary transition-colors">→</span>
                </a>
              </div>
            </div>
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mt-12 text-center"
          >
            <a
              href="mailto:ghimiresunandan@gmail.com"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-primary text-primary-foreground font-mono font-semibold hover:opacity-90 transition-all duration-300 glow-primary"
            >
              <Mail className="w-5 h-5" />
              Say Hello
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
