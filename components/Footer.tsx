import { Linkedin, Mail, Github, Phone } from "lucide-react";
import { site } from "@/data/site";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-surface/50 py-12">
      <div className="container-max px-6 md:px-12 lg:px-20">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <p className="font-display text-xl font-semibold">{site.name}</p>
            <p className="mt-2 text-sm text-text-soft">{site.title}</p>
            <p className="mt-1 text-xs text-text-muted">{site.location}</p>
          </div>

          <div>
            <p className="mb-3 font-mono text-xs uppercase tracking-wider text-text-muted">Contact</p>
            <div className="space-y-2 text-sm text-text-soft">
              <a href={`mailto:${site.email}`} className="flex items-center gap-2 transition-colors hover:text-accent">
                <Mail size={14} /> {site.email}
              </a>
              <a href={`tel:+${site.phoneRaw}`} className="flex items-center gap-2 transition-colors hover:text-accent">
                <Phone size={14} /> {site.phoneDisplay}
              </a>
              <a href={site.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 transition-colors hover:text-accent">
                <Linkedin size={14} /> LinkedIn
              </a>
            </div>
          </div>

          <div className="flex flex-col items-start md:items-end">
            <div className="flex items-center gap-3">
              <a
                href={site.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-text-muted transition-all hover:border-accent/50 hover:text-accent"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a
                href={`mailto:${site.email}`}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-text-muted transition-all hover:border-accent/50 hover:text-accent"
                aria-label="Email"
              >
                <Mail size={18} />
              </a>
              <a
                href={site.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-text-muted transition-all hover:border-accent/50 hover:text-text-primary"
                aria-label="GitHub"
              >
                <Github size={18} />
              </a>
            </div>
            <p className="mt-6 font-mono text-xs text-text-muted">
              © {new Date().getFullYear()} {site.name}. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
