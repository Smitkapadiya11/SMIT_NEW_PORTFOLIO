"use client";

const skills = [
  "Python", "AI/ML", "Data Science", "Automation", "AI Agents",
  "WhatsApp API", "Voice AI", "Node.js", "LLM Integration",
  "Grok API", "n8n", "ChatGPT", "Claude", "Full-Stack",
];

const philosophy = [
  "Understand the problem before building the solution",
  "Use data to make better decisions, not assumptions",
  "Automate repetitive work wherever possible",
  "Combine technology, AI, and business thinking",
  "Focus on outcomes, not just outputs",
];

export default function About() {
  return (
    <section id="about" className="section-padding content-auto">
      <div className="container-max">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
          <div>
            <p className="eyebrow mb-4" data-animate="fade-up">About</p>
            <h2 className="heading-lg mb-8" data-animate="fade-up" data-delay="100">
              BCA Graduate. AI Builder. Automation Obsessed.
            </h2>

            <p className="body-md mb-6" data-animate="fade-up" data-delay="200">
              I graduated from Charotar University of Science & Technology (CHARUSAT) in 2025 with a BCA degree and an obsession for making businesses run smarter. Founder of Kapadiya and Sons — from Surat to every corner of India, one automation at a time.
            </p>

            <blockquote className="mb-8 border-l-2 border-accent pl-6" data-animate="fade-up" data-delay="300">
              <p className="body-md italic text-text-primary">
                &ldquo;Good work is not about being busy — it&apos;s about creating measurable impact.&rdquo;
              </p>
            </blockquote>

            <ul className="space-y-3">
              {philosophy.map((item, i) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-sm text-text-soft"
                  data-animate="fade-up"
                  data-delay={String(400 + i * 50)}
                >
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-wrap content-start gap-2" data-animate="fade-up" data-delay="200">
            {skills.map((skill) => (
              <span
                key={skill}
                className="chip transition-colors duration-200 hover:border-accent/50 hover:text-text-primary"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
