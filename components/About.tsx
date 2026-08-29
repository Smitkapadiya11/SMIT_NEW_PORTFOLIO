"use client";

import { motion, useReducedMotion } from "framer-motion";

const philosophy = [
  "Understand the problem before building the solution",
  "Use data to make better decisions, not assumptions",
  "Automate repetitive work wherever possible",
  "Combine technology, AI, and business thinking",
  "Focus on outcomes, not just outputs",
];

const floatingSkills = [
  "AI Agents", "Grok API", "Node.js", "Automation", "Python",
  "Next.js", "LLM Integration", "Workflow Design", "RAG",
  "Data Analysis", "n8n", "ChatGPT", "Claude", "Gemini",
];

export default function About() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="about" className="section-padding">
      <div className="container-max">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
          <div>
            <p className="eyebrow mb-4" data-animate="fade-up">About</p>
            <h2 className="heading-lg mb-8" data-animate="fade-up" data-delay="100">
              Building systems that create measurable impact
            </h2>

            <p className="body-md mb-6" data-animate="fade-up" data-delay="200">
              I&apos;m cheerful and lively, yet mature and steady. I have a strong sense of responsibility for my work and am willing to take on responsibilities. I&apos;m innovative and constantly update my knowledge and enhance my understanding. I&apos;m able to lead a team, cultivate employees, and grow together with the company.
            </p>

            <blockquote className="mb-8 border-l-2 border-accent pl-6" data-animate="fade-up" data-delay="300">
              <p className="body-md italic text-text-primary">
                &ldquo;I believe good work is not about being busy — it&apos;s about creating measurable impact.&rdquo;
              </p>
            </blockquote>

            <ul className="space-y-3">
              {philosophy.map((item, i) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-sm text-text-soft"
                  data-animate="fade-left"
                  data-delay={String(400 + i * 80)}
                >
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative flex min-h-[400px] items-center justify-center">
            <div className="relative h-full w-full">
              {floatingSkills.map((skill, i) => {
                const angle = (i / floatingSkills.length) * Math.PI * 2;
                const radius = 120 + (i % 3) * 30;
                const x = Math.cos(angle) * radius;
                const y = Math.sin(angle) * radius;

                return (
                  <motion.span
                    key={skill}
                    className="chip absolute left-1/2 top-1/2 cursor-default"
                    style={{ x, y }}
                    animate={
                      prefersReducedMotion
                        ? {}
                        : {
                            y: [y, y - 8, y],
                            transition: {
                              duration: 3 + (i % 3),
                              repeat: Infinity,
                              ease: "easeInOut",
                              delay: i * 0.2,
                            },
                          }
                    }
                    whileHover={{ scale: 1.1, borderColor: "rgba(99,102,241,0.5)" }}
                  >
                    {skill}
                  </motion.span>
                );
              })}
              <div className="absolute left-1/2 top-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/10 blur-2xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
