import { motion } from "framer-motion";
import { Cloud, Container, GitBranch, Terminal, Monitor, Server } from "lucide-react";
import { useRef, useState } from "react";

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
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [showTechStack, setShowTechStack] = useState(false);
  const [command, setCommand] = useState("ls");
  const [cliError, setCliError] = useState<string | null>(null);

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

        {/* CLI-style TechStack */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <motion.div
            variants={itemVariants}
            className="glass-card overflow-hidden"
            tabIndex={0}
            role="button"
            aria-label="TechStack terminal. Type a command and press Enter."
            onClick={(e) => {
              // Focus input so Enter runs the command
              e.preventDefault();
              inputRef.current?.focus();
            }}
            onFocus={() => {
              inputRef.current?.focus();
            }}
            onKeyDown={(e) => {
              if (e.key === "Escape") {
                e.preventDefault();
                e.stopPropagation();
                setShowTechStack(false);
                setCliError(null);
                inputRef.current?.focus();
              }
            }}
          >
            {/* Terminal chrome */}
            <div className="flex items-center gap-2 px-5 py-4 border-b border-border/50 bg-secondary/30">
              <span className="w-3 h-3 rounded-full bg-destructive" />
              <span className="w-3 h-3 rounded-full bg-warning" />
              <span className="w-3 h-3 rounded-full bg-success" />
              <span className="ml-4 text-muted-foreground text-sm font-mono">terminal</span>
            </div>

            <div className="p-6 font-mono">
              {/* Command */}
              <div className="flex items-center gap-2 text-sm md:text-base">
                <span className="text-success">➜</span>
                <input
                  ref={inputRef}
                  value={command}
                  onChange={(e) => setCommand(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Escape") {
                      e.preventDefault();
                      e.stopPropagation();
                      setShowTechStack(false);
                      setCliError(null);
                      return;
                    }
                    if (e.key !== "Enter") return;
                    const normalized = command.trim();
                    setCliError(null);

                    if (normalized === "ls") {
                      setShowTechStack(true);
                      return;
                    }

                    setShowTechStack(false);
                    setCliError(`zsh: command not found: ${normalized || "(empty)"}`);
                  }}
                  spellCheck={false}
                  autoCapitalize="none"
                  autoCorrect="off"
                  className="flex-1 min-w-0 bg-transparent text-foreground outline-none placeholder:text-muted-foreground"
                  aria-label="Terminal command"
                />
                <span className="terminal-cursor ml-1" />
              </div>

              {!showTechStack && (
                <div className="mt-4 text-xs md:text-sm text-muted-foreground">
                  Press <span className="text-foreground">Enter</span> to run the command
                  <span className="text-muted-foreground"> • </span>
                  Press <span className="text-foreground">Esc</span> to clear
                </div>
              )}

              {cliError && (
                <div className="mt-4 text-xs md:text-sm text-destructive">
                  {cliError}
                </div>
              )}

              {/* Output (only after Enter) */}
              {showTechStack && (
                <motion.div
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.25 }}
                  className="mt-5 space-y-3"
                >
                  {skillCategories.map((category) => {
                    const color = {
                      primary: "text-primary",
                      accent: "text-accent",
                      success: "text-success",
                    }[category.color];

                    return (
                      <div key={category.title} className="flex gap-3 text-sm md:text-base">
                        <span className="text-muted-foreground">▹</span>
                        <span className={`shrink-0 ${color}`}>{category.title}:</span>
                        <span className="text-muted-foreground">{category.skills.join(", ")}</span>
                      </div>
                    );
                  })}

                  <div className="flex gap-3 text-sm md:text-base pt-1">
                    <span className="text-muted-foreground">▹</span>
                    <span className="text-accent shrink-0">Also proficient with:</span>
                    <span className="text-muted-foreground">Linux, Git, Azure</span>
                  </div>
                </motion.div>
              )}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
