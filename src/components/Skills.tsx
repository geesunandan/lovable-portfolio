import { motion } from "framer-motion";
import { Cloud, Container, GitBranch, Terminal, Monitor, Server } from "lucide-react";

const skillCategories = [
  {
    title: "Cloud Platforms",
    icon: Cloud,
    skills: ["AWS", "Google Cloud Platform"],
    color: "primary",
  },
  {
    title: "Infrastructure as Code",
    icon: Server,
    skills: ["Terraform"],
    color: "accent",
  },
  {
    title: "CI/CD & Automation",
    icon: GitBranch,
    skills: ["GitHub Actions", "AWS CodePipeline", "GitLab CI", "Fastlane"],
    color: "success",
  },
  {
    title: "Containers & Orchestration",
    icon: Container,
    skills: ["Docker", "Kubernetes", "Amazon ECS"],
    color: "primary",
  },
  {
    title: "Scripting",
    icon: Terminal,
    skills: ["Bash"],
    color: "accent",
  },
  {
    title: "Monitoring & Observability",
    icon: Monitor,
    skills: ["New Relic", "Amazon CloudWatch", "SNS"],
    color: "success",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

const Skills = () => {
  return (
    <section id="skills" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-mono mb-4">
            <span className="text-muted-foreground">{"<"}</span>
            <span className="text-gradient">TechStack</span>
            <span className="text-muted-foreground">{" />"}</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Tools and technologies I use to build and maintain reliable infrastructure
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            const colorClass = {
              primary: "text-primary border-primary/30 hover:border-primary/60",
              accent: "text-accent border-accent/30 hover:border-accent/60",
              success: "text-success border-success/30 hover:border-success/60",
            }[category.color];

            return (
              <motion.div
                key={category.title}
                variants={itemVariants}
                className={`glass-card p-6 border ${colorClass} transition-all duration-300`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-2 rounded-lg bg-secondary ${colorClass.split(" ")[0]}`}>
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <h3 className="font-mono font-semibold text-foreground">
                    {category.title}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span key={skill} className="skill-tag">
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Additional tools */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-12 text-center"
        >
          <p className="text-muted-foreground mb-4 font-mono text-sm">Also proficient with</p>
          <div className="flex flex-wrap justify-center gap-3">
            {["Linux", "Git", "Cost Optimization", "Incident Management", "RCA"].map((tool) => (
              <span key={tool} className="skill-tag">
                {tool}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
