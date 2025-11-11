import React, { useState, useRef } from "react";

export default function Portfolio() {
  const projects = [
    {
      id: "observify",
      title: "Observify",
      summary:
        "Full-stack observability platform capturing client errors, network failures, and performance metrics in real time. Built a TypeScript SDK, Node.js/Express ingestion pipeline, and React dashboard with AI-driven anomaly detection and alerting.",
      tech: ["TypeScript", "Node.js", "Python"],
      demo: "",
      repo: "https://github.com/yourname/observify",
      duration: "4 weeks",
      metrics: ["Captured 2M+ events in testing"],
    },
    {
      id: "ai-task-manager",
      title: "AI-Powered Task Manager",
      summary:
        "Full-stack task management app with Clerk auth, protected routes, progress tracking, and historical insights. Built responsive dashboards using Next.js, Tailwind, and ShadCN; integrated Drizzle ORM + PostgreSQL for scalable data persistence.",
      tech: ["React", "Next.js", "Drizzle ORM"],
      demo: "",
      repo: "https://github.com/yourname/ai-task-manager",
      duration: "3 weeks",
      metrics: ["99+ Lighthouse Accessibility"],
    },
    {
      id: "ai-shell",
      title: "AI-Enhanced Custom Shell",
      summary:
        "Custom Unix-style shell with AI-assisted typo correction. Implemented command parsing, job control, and fuzzy-matched auto-fixing of malformed commands for a faster, developer-friendly terminal workflow.",
      tech: ["C", "Unix"],
      demo: "",
      repo: "https://github.com/yourname/ai-shell",
      duration: "2 weeks",
      metrics: ["Fixed 90% of common typos in tests"],
    },
  ];

  const profile = {
    email: "rethashdevreddy@gmail.con",
    github: "reth0608",
    linkedin: "RethashReddy",
  };

  const skills = [
    "TypeScript",
    "React",
    "Node.js",
    "WebSockets",
    "Postgres",
    "Docker",
    "Testing",
    "CSS",
    "Three.js",
    "MediaPipe",
  ];

  const [activeProject, setActiveProject] = useState(null);
  const [showCLI, setShowCLI] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <Header showCLI={() => setShowCLI(true)} />
      <main className="max-w-6xl mx-auto p-6">
        <Hero />

        <section id="projects" className="mt-12">
          <h2 className="text-2xl font-semibold mb-4">Selected Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {projects.map((p) => (
              <ProjectCard key={p.id} project={p} onOpen={() => setActiveProject(p)} />
            ))}
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold mb-4">Portfolio Chatbot</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card p-4">
              <p className="text-sm text-gray-600">Click a question to get an instant answer.</p>
              <ChatbotAssistant projects={projects} skills={skills} profile={profile} />
            </div>
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold mb-4">Skills Map</h2>
          <SkillsMap projects={projects} skills={skills} />
        </section>

        <section className="mt-12 grid md:grid-cols-2 gap-6">
          <div className="card p-6">
            <h3 className="text-xl font-semibold mb-2">About</h3>
            <p className="text-sm text-gray-700">
              I’m Rethash — a full-stack developer who loves building fast, reliable, and user-focused digital products — from real-time observability systems to AI-driven tools. I blend TypeScript, Node.js, Python, and modern React frameworks to turn rough ideas into clean architecture and smooth UX. I’m always experimenting, always learning, and always shipping something new that pushes the limits of what tech can do.
            </p>
            <div className="flex gap-3 mt-4">
              <a className="btn" href="/Resume-Rethash-Reddy.pdf" download>
                Download Resume
              </a>
              <a className="btn-outline" href="https://github.com/reth0608" target="_blank" rel="noreferrer">
                GitHub
              </a>
              <a className="btn-outline" href="https://www.linkedin.com/in/rethash-reddy-7202b9291/" target="_blank" rel="noreferrer">
                LinkedIn
              </a>
            </div>
          </div>

          <div className="card p-6">
            <h3 className="text-xl font-semibold mb-2">Contact</h3>
            <ContactForm />
          </div>
        </section>

        <footer className="mt-12 text-center text-sm text-gray-500 pb-8">
          <p>© {new Date().getFullYear()} Rethash — Built with Next.js + Tailwind. Lighthouse perf: placeholder</p>
        </footer>
      </main>

      {activeProject && <ProjectModal project={activeProject} onClose={() => setActiveProject(null)} />}
      {showCLI && <DevCLI onClose={() => setShowCLI(false)} />}
    </div>
  );
}

function Header({ showCLI }) {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-6xl mx-auto p-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-pink-500 flex items-center justify-center text-white font-bold">R</div>
          <div>
            <div className="text-lg font-semibold">Rethash</div>
            <div className="text-xs text-gray-500">CS Student • Full-Stack Developer</div>
          </div>
        </div>
        <nav className="flex items-center gap-3">
          <button className="text-sm" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>Home</button>
          <button className="text-sm" onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}>Projects</button>
          <button className="btn-sm" onClick={showCLI}>Open CLI</button>
        </nav>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="bg-white rounded-2xl p-8 shadow-md">
      <div className="md:flex md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold">I build stuff.</h1>
          <p className="mt-3 text-gray-600 max-w-xl">Current focus: proximity-based WebSocket app and developer tooling. I ship production-ready code with tests, CI, and monitoring.</p>
          <div className="mt-4 flex gap-3">
            <a className="btn" href="#projects">View Projects</a>
            <a className="btn-outline" href="/Resume-Rethash-Reddy.pdf" download>
              Download Resume
            </a>
          </div>
        </div>
        <div className="mt-6 md:mt-0 md:ml-6 flex-shrink-0">
          <div className="w-48 h-48 rounded-xl bg-gradient-to-br from-indigo-100 to-pink-50 flex items-center justify-center">
            <div className="text-sm text-gray-700 text-center">Hero GIF / Mini Three.js Scene Placeholder</div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, onOpen }) {
  return (
    <article className="bg-white rounded-xl shadow p-4 hover:shadow-md transition">
      <h3 className="font-semibold">{project.title}</h3>
      <p className="text-sm text-gray-600 mt-1">{project.summary}</p>
      <div className="mt-3 flex gap-2 flex-wrap">
        {project.tech.map((t) => (
          <span key={t} className="text-xs px-2 py-1 rounded bg-gray-100">
            {t}
          </span>
        ))}
      </div>
      <div className="mt-4 flex items-center justify-between">
        <div className="text-xs text-gray-500">
          {project.duration} • {project.metrics[0]}
        </div>
        <div className="flex gap-2">
          <button className="btn-sm" onClick={onOpen}>Deep dive</button>
          {project.demo ? (
            <a className="btn-sm-outline" href={project.demo} target="_blank" rel="noreferrer">
              Run demo
            </a>
          ) : (
            <button className="btn-sm-outline" disabled>Demo</button>
          )}
        </div>
      </div>
    </article>
  );
}

function ProjectModal({ project, onClose }) {
  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-40">
      <div className="bg-white rounded-xl w-11/12 md:w-3/4 p-6 shadow-xl">
        <div className="flex justify-between items-start">
          <div>
            <h2 className="text-xl font-bold">{project.title}</h2>
            <p className="text-sm text-gray-600">{project.summary}</p>
          </div>
          <button onClick={onClose} className="text-gray-500">Close</button>
        </div>
        <div className="mt-4 grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold">Architecture</h4>
            <p className="text-sm text-gray-600 mt-2">High-level architecture diagram (placeholder). Explain components: client, server, DB, realtime layer, authentication.</p>
            <h4 className="font-semibold mt-4">Key snippets</h4>
            <pre className="bg-gray-100 p-3 rounded text-xs overflow-auto">{`// Example: Simple WS message handler (Node)
ws.on('message', (msg) => {
  const data = JSON.parse(msg);
  // handle join, ping, message
});
`}</pre>
            <h4 className="font-semibold mt-4">Metrics</h4>
            <ul className="list-disc ml-5 text-sm text-gray-600">
              {project.metrics.map((m) => (
                <li key={m}>{m}</li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold">Live preview</h4>
            <div className="mt-2 bg-black/5 rounded p-3 min-h-[160px] flex items-center justify-center text-sm text-gray-500">Embedded demo or GIF goes here</div>
            <div className="mt-3 flex gap-2">
              <a className="btn" href={project.repo} target="_blank" rel="noreferrer">
                View code
              </a>
              {project.demo && (
                <a className="btn-outline" href={project.demo} target="_blank" rel="noreferrer">
                  Run demo
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function sleep(ms) {
  return new Promise((res) => setTimeout(res, ms));
}

function SkillsMap({ projects, skills }) {
  const [active, setActive] = useState(null);
  return (
    <div className="bg-white rounded-xl p-4 shadow">
      <div className="flex flex-wrap gap-3">
        {skills.map((s) => (
          <button key={s} onClick={() => setActive(s)} className={`px-3 py-1 rounded ${active === s ? "bg-indigo-500 text-white" : "bg-gray-100"}`}>
            {s}
          </button>
        ))}
      </div>
      <div className="mt-4 text-sm text-gray-600">
        {active ? (
          <div>
            <div className="font-semibold">{active}</div>
            <div>
              Used in these projects: {projects
                .filter((p) => p.tech.join(" ").toLowerCase().includes(active.split(".")[0].toLowerCase()))
                .map((p) => p.title)
                .join(", ") || "—"}
            </div>
            <div className="mt-2">Confidence: ★★★★☆</div>
          </div>
        ) : (
          <div>Click a skill to see projects that use it and a quick confidence level.</div>
        )}
      </div>
    </div>
  );
}

function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");
  const [status, setStatus] = useState(null);

  async function submit(e) {
    e.preventDefault();
    setStatus("Sending...");
    try {
      await sleep(600);
      setStatus("Sent — I usually reply within 24 hours.");
      setName("");
      setEmail("");
      setMsg("");
    } catch {
      setStatus("Error sending — try mailto:your@email");
    }
  }

  return (
    <form onSubmit={submit} className="space-y-2">
      <input required className="w-full p-2 border rounded" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
      <input required className="w-full p-2 border rounded" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <textarea required className="w-full p-2 border rounded" rows={4} placeholder="Message" value={msg} onChange={(e) => setMsg(e.target.value)} />
      <div className="flex items-center gap-2">
        <button className="btn" type="submit">Send</button>
        <div className="text-sm text-gray-500">{status}</div>
      </div>
    </form>
  );
}

function DevCLI({ onClose }) {
  const [output, setOutput] = useState(["Welcome to dev-cli. Type `help`."]);
  const inputRef = useRef();

  function exec(cmd) {
    setOutput((o) => [...o, `> ${cmd}`]);
    const c = cmd.trim().toLowerCase();
    if (c === "help") setOutput((o) => [...o, "Commands: projects, resume, contact, close"]);
    else if (c === "projects") setOutput((o) => [...o, "Open the Projects section to see case studies."]);
    else if (c === "resume") setOutput((o) => [...o, "Resume: /resume.pdf (download)"]);
    else if (c === "contact") setOutput((o) => [...o, "Contact form is on the site footer."]);
    else if (c === "close") onClose();
    else setOutput((o) => [...o, "Unknown command. Type 'help'."]);
  }

  return (
    <div className="fixed inset-0 bg-black/60 z-50 flex items-end md:items-center justify-center p-4">
      <div className="w-full md:w-2/3 bg-[#0b1220] text-white rounded-lg p-4">
        <div className="h-48 overflow-auto bg-[#071029] p-2 rounded">
          {output.map((o, i) => (
            <div key={i} className="text-xs font-mono">
              {o}
            </div>
          ))}
        </div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            exec(inputRef.current.value);
            inputRef.current.value = "";
          }}
          className="mt-2 flex"
        >
          <input ref={inputRef} className="flex-1 p-2 bg-[#071029] border border-[#102236] rounded text-sm text-white font-mono" placeholder="Type command..." />
          <button className="ml-2 btn-sm" type="submit">Run</button>
        </form>
      </div>
    </div>
  );
}

function ChatbotAssistant({ projects, skills, profile }) {
  const [input, setInput] = useState("");
  const [log, setLog] = useState([
    // {
    //   role: "bot",
    // },
  ]);

  const quick = [
    "E-mail id?",
    "GitHub Username?",
    "LinkedIn Username?",
    "Projects?",
    "Skills?",
  ];

  function answer(q) {
    const norm = q.trim().toLowerCase();
    if (norm === "e-mail id?" || norm === "email id?" || norm === "e-mail?" || norm === "email?") return `My email is ${profile.email}.`;
    if (norm === "github username?") return `GitHub username: ${profile.github} (github.com/${profile.github}).`;
    if (norm === "linkedin username?") return `LinkedIn username: ${profile.linkedin} (linkedin.com/in/${profile.linkedin}).`;
    if (norm === "projects?") return `Projects: ${projects.map((p) => p.title).join(", ")}.`;
    if (norm === "skills?") return `Skills: ${skills.join(", ")}.`;
    return "Hello! Tap one of the buttons above to know more";
  }

  function send(q) {
    const text = (q ?? input).trim();
    if (!text) return;
    setLog((l) => [...l, { role: "user", text }, { role: "bot", text: answer(text) }]);
    setInput("");
  }

  return (
    <div>
      <div className="flex flex-wrap gap-2 mb-2">
        {quick.map((q) => (
          <button key={q} className="btn-sm-outline" onClick={() => send(q)}>
            {q}
          </button>
        ))}
      </div>
      <div className="bg-white border rounded p-3 h-40 overflow-auto">
        {log.map((m, i) => (
          <div key={i} className={`text-sm py-1 ${m.role === "user" ? "text-right" : "text-left"}`}>
            <strong>{m.role === "user" ? "you" : "bot"}:</strong> {m.text}
          </div>
        ))}
      </div>
      <div className="flex gap-2 mt-2">
        <input className="flex-1 p-2 border rounded" value={input} onChange={(e) => setInput(e.target.value)} placeholder="Ask a question..." />
        <button className="btn-sm" onClick={() => send()}>Ask</button>
      </div>
    </div>
  );
}
