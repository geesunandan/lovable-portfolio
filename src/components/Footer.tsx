import { Terminal, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 px-4 border-t border-border/50">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Terminal className="w-5 h-5 text-primary" />
            <span className="font-mono text-sm text-muted-foreground">
              © {new Date().getFullYear()} Sunandan Ghimire
            </span>
          </div>
          
          <p className="text-sm text-muted-foreground flex items-center gap-1">
            Built with <Heart className="w-4 h-4 text-destructive" /> and lots of coffee
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
