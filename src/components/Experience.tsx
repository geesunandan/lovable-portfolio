import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    title: "DevOps Engineer I",
    company: "Novelty Technology LLC",
    location: "Kathmandu, Nepal",
    period: "September 2024 – Present",
  },
  {
    title: "DevOps Intern",
    company: "LIS Nepal",
    location: "Lalitpur, Nepal",
    period: "December 2023 – March 2024",
  },
  {
    title: "DevOps Apprentice",
    company: "CodeRush",
    location: "Lalitpur, Nepal",
    period: "January 2023 – June 2023",
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-16 sm:py-20 md:py-24 px-4 relative bg-secondary/20">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-mono mb-4">
            <span className="text-muted-foreground">{"$ "}</span>
            <span className="text-gradient">experience</span>
            <span className="text-muted-foreground">{" --list"}</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Building and scaling infrastructure across industries
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2" />

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title + exp.company}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`relative mb-12 md:w-1/2 ${
                index % 2 === 0 ? "md:pr-12 md:ml-0" : "md:pl-12 md:ml-auto"
              }`}
            >
              {/* Timeline dot */}
              <div
                className={`absolute top-0 ${
                  index % 2 === 0 ? "left-0 md:-right-2 md:left-auto" : "left-0 md:-left-2"
                } timeline-dot hidden md:block`}
              />

              <div className="glass-card p-6 ml-6 md:ml-0 relative">
                {/* Mobile timeline dot */}
                <div className="absolute -left-8 top-0 timeline-dot md:hidden" />

                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold font-mono text-foreground">
                      {exp.title}
                    </h3>
                    <p className="text-primary font-semibold">{exp.company}</p>
                  </div>
                  <Briefcase className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                </div>

                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {exp.period}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    {exp.location}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
