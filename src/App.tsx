import { motion } from 'framer-motion';
import {
  ArrowRight,
  ArrowUpRight,
  Cpu,
  Database,
  Download,
  GitBranch,
  Globe,
  Mail,
  MapPin,
  Network,
  Phone,
  ShieldCheck,
  Sparkles,
  Wifi,
} from 'lucide-react';

type Project = {
  category: string;
  title: string;
  role: string;
  description: string[];
  tech: string[];
  accent: string;
  diagram: string[];
  metrics?: string[];
};

const principleList = [
  {
    number: '01',
    title: 'Systems thinking',
    text: 'I prefer looking at the complete system — client, API, backend, infrastructure and network — rather than treating problems as isolated pieces.',
  },
  {
    number: '02',
    title: 'Performance',
    text: 'Performance problems are rarely limited to one function. I look at architecture, network interactions, resource usage, deployment and infrastructure together.',
  },
  {
    number: '03',
    title: 'Build & debug',
    text: 'I enjoy problems that require reproducing difficult failures, reading logs, measuring systems and understanding exactly where bottlenecks originate.',
  },
];

const stackGroups = [
  {
    title: 'Backend & Systems',
    items: ['Rust', 'C#', '.NET', 'TypeScript', 'WebSocket', 'API development', 'Distributed Systems'],
  },
  {
    title: 'Infrastructure',
    items: ['Linux', 'Docker', 'Nginx', 'HAProxy', 'Reverse Proxy', 'TLS', 'DNS', 'CI/CD'],
  },
  {
    title: 'Networking',
    items: ['TCP/IP', 'VPN', 'VLESS', 'Reality', 'gRPC', 'XHTTP', 'LoRa', 'Meshtastic'],
  },
  {
    title: 'Blockchain',
    items: ['Blockchain Infrastructure', 'Smart Contracts', 'Nodeos', 'SHIP / State History', 'Web3'],
  },
  {
    title: 'Cross-platform',
    items: ['.NET MAUI', 'Blazor', 'Windows', 'Linux', 'macOS', 'Android', 'iOS'],
  },
  {
    title: 'AI',
    items: ['LLM Integration', 'ASR', 'TTS', 'Local AI inference', 'AI-assisted Development'],
  },
  {
    title: 'Game Development',
    items: ['Unreal Engine', 'Multiplayer Networking', 'Replication', 'Matchmaking', 'Hit Detection', 'Performance Optimization'],
  },
];

const projects: Project[] = [
  {
    category: 'NETWORKING · INFRASTRUCTURE · VPN',
    title: 'K**ra VPN',
    role: 'Owner / Software Engineer',
    description: [
      'Designed and launched a cross-platform VPN service with clients for Windows, macOS, Linux, Android, and iOS.',
      'Built the server and networking infrastructure, traffic routing, proxy layers and anti-blocking mechanisms.',
    ],
    tech: ['Linux', 'Nginx', 'HAProxy', 'VLESS', 'Reality', 'gRPC', 'XHTTP', 'TLS', 'DNS', 'Docker'],
    accent: 'vpn',
    diagram: ['CLIENT', 'API GATEWAY', 'ROUTING / SNI', 'VPN', 'PROXY', 'FALLBACK', 'SERVER NETWORK'],
    metrics: ['5 client platforms', 'multi-layer routing', 'alternative transports', 'anti-blocking architecture'],
  },
  {
    category: 'BLOCKCHAIN · BACKEND · INFRASTRUCTURE',
    title: 'GlobalForce Infrastructure',
    role: 'Software Engineer',
    description: [
      'Worked across the GlobalForce stack including backend services, blockchain infrastructure, nodeos, APIs, proxies, state history and cross-platform wallet integration.',
      'Focused on architecture, reliability, interoperability and performance across the full chain from wallet to backend to blockchain.',
    ],
    tech: ['Rust', 'C#', 'Linux', 'Docker', 'Nodeos', 'WebSocket', 'SHIP', 'Nginx', 'HAProxy', 'Blockchain'],
    accent: 'chain',
    diagram: ['WALLET / CLIENT', 'API / PROXY', 'BACKEND SERVICES', 'BLOCKCHAIN NODES', 'STATE HISTORY / SHIP'],
    metrics: ['~3× backend performance', '~60% lower infrastructure cost', '$12k → $4–5k monthly server cost'],
  },
  {
    category: 'AI · REAL-TIME · LOCAL INFERENCE',
    title: 'Real-Time Voice-to-Voice AI Translator',
    role: 'Software Engineer',
    description: [
      'Developed a real-time speech translation pipeline combining automatic speech recognition, machine translation, and text-to-speech.',
      'AI models were hosted locally instead of relying on third-party cloud APIs, reducing latency and improving privacy.',
    ],
    tech: ['ASR', 'TTS', 'LLM', 'Python', 'Local AI', 'GPU inference', 'Real-time processing'],
    accent: 'ai',
    diagram: ['MICROPHONE', 'ASR', 'TRANSLATION', 'TTS', 'VOICE OUTPUT'],
    metrics: ['local inference', 'low latency', 'privacy-first pipeline'],
  },
  {
    category: 'IOT · LORA · MESH NETWORKING',
    title: 'LARVA Link',
    role: 'Software Engineer',
    description: [
      'Designed and developed an IoT hardware prototype using LoRa / Meshtastic mesh networking and I²C sensors.',
      'Developed gateway software that collected encrypted telemetry from devices and integrated it with backend and blockchain infrastructure.',
    ],
    tech: ['LoRa', 'Meshtastic', 'I²C', 'Embedded', 'Linux', 'Networking', 'Blockchain', 'Telemetry'],
    accent: 'iot',
    diagram: ['SENSOR NODE', 'MESH', 'GATEWAY', 'BACKEND', 'BLOCKCHAIN'],
    metrics: ['encrypted telemetry', 'mesh network', 'sensor analytics'],
  },
  {
    category: 'GAMEDEV · NETWORKING · PERFORMANCE',
    title: 'Multiplayer Networking & Gameplay Systems',
    role: 'Game Developer',
    description: [
      'Developed multiplayer gameplay systems, matchmaking, hit detection, replication and client-server synchronization.',
      'Optimized network state processing to maintain stable hit registration and responsive gameplay even with 100–200 ms latency.',
    ],
    tech: ['Unreal Engine', 'C++', 'Networking', 'Replication', 'Client / Server', 'Matchmaking', 'Performance'],
    accent: 'game',
    diagram: ['CLIENT', '100–200ms', 'SERVER', 'STATE SYNC', 'CLIENT'],
    metrics: ['stable gameplay', 'latency compensated', 'high-ping testing'],
  },
];

const experience = [
  {
    period: '2026 — PRESENT',
    place: 'K**ra VPN',
    role: 'Owner / Software Engineer',
    location: 'Novi Sad, Serbia',
    focus: ['VPN infrastructure', 'traffic routing', 'anti-blocking solutions', 'server administration', 'protocol testing', 'network architecture', 'performance testing'],
  },
  {
    period: '2024 — 2026',
    place: 'BlockZero DOO',
    role: 'Software Engineer',
    location: 'Novi Sad, Serbia',
    focus: ['backend systems', 'blockchain infrastructure', 'cross-platform wallet', 'infrastructure optimization', 'Voice-to-Voice AI', 'LARVA Link', 'performance engineering', 'Docker / Linux', 'WebSocket', 'CI/CD'],
    highlight: 'SERVER PERFORMANCE +300% · INFRA COST -60%',
  },
  {
    period: '2022 — 2024',
    place: 'SWISS TECH CAPITAL AG',
    role: 'Game Developer',
    location: 'Zug, Switzerland · Remote',
    focus: ['multiplayer gameplay', 'replication', 'networking', 'synchronization', 'CPU/GPU/RAM optimization', 'debugging', 'latency handling'],
    highlight: 'stable gameplay @ 100–200ms ping',
  },
  {
    period: '2020 — 2022',
    place: 'COFFE',
    role: 'Game Developer',
    location: 'Kostroma, Russia · Remote',
    focus: ['gameplay systems', 'matchmaking', 'hit detection', 'combat logic', 'debugging', 'performance optimization'],
  },
];

const metrics = [
  { value: '~3×', label: 'SERVER PERFORMANCE', meta: 'backend / infrastructure' },
  { value: '~60%', label: 'INFRASTRUCTURE COST REDUCTION', meta: 'architecture refactor' },
  { value: '100–200 ms', label: 'PLAYABLE MULTIPLAYER LATENCY', meta: 'tuned for network reality' },
  { value: '5', label: 'VPN CLIENT PLATFORMS', meta: 'windows / mac / linux / android / ios' },
];

const navItems = ['Projects', 'Experience', 'Stack', 'About', 'Contact'];

const fadeUp = {
  initial: { opacity: 0, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.45 },
};

function App() {
  return (
    <div className="app-shell">
      <header className="topbar">
        <div className="container nav-wrap">
          <div className="brand-block">
            <div className="brand-name">Andrei Levchenko</div>
            <div className="brand-role">SOFTWARE ENGINEER</div>
          </div>

          <nav className="nav" aria-label="Main navigation">
            {navItems.map((item) => (
              <a href={`#${item.toLowerCase()}`} key={item}>
                {item}
              </a>
            ))}
          </nav>

          <a href="#contact" className="primary-btn">
            Contact me <ArrowRight size={16} />
          </a>
        </div>
      </header>

      <main>
        <section className="hero section">
          <div className="container hero-grid">
            <motion.div {...fadeUp} className="hero-copy">
              <div className="mono-label">
                <span className="cursor" />
                SOFTWARE ENGINEER · NOVI SAD, SERBIA
              </div>

              <h1>
                Building systems
                <span>that perform.</span>
              </h1>

              <p className="lead">
                Software engineer specializing in high-performance backend systems, networking,
                infrastructure, blockchain, cross-platform applications, multiplayer systems, and AI integrations.
              </p>

              <p className="lead secondary">
                I focus on reliability, scalability, latency, and system architecture — from application code to servers and network infrastructure.
              </p>

              <div className="cta-row">
                <a href="#projects" className="primary-btn">
                  Explore my work <ArrowRight size={16} />
                </a>
                <a href="/cv.pdf" target="_blank" rel="noreferrer" className="secondary-btn">
                  <Download size={16} /> Download CV
                </a>
              </div>

              <div className="chip-row" aria-label="Core technologies">
                {['Rust', 'C#', '.NET', 'TypeScript', 'Linux', 'Docker', 'Nginx', 'HAProxy', 'Networking', 'Blockchain', 'AI / LLM', 'Unreal Engine'].map((chip) => (
                  <span key={chip} className="chip">{chip}</span>
                ))}
              </div>
            </motion.div>

            <motion.div {...fadeUp} className="terminal-panel-wrap">
              <div className="terminal-panel portrait-panel">
                <div className="terminal-header">
                  <span className="dot" />
                  <span className="dot" />
                  <span className="dot" />
                </div>

                <div className="portrait-shell">
                  <img
                    src="/avatar.jpg"
                    alt="Andrei Levchenko"
                    className="portrait-image"
                  />
                </div>

                <div className="code-block compact">
                  <pre>{`// engineer.profile

const andrei = {
  role: "Software Engineer",
  focus: [
    "Backend Systems",
    "Networking",
    "Infrastructure",
    "Performance"
  ],
  languages: [
    "Rust",
    "C#",
    "TypeScript"
  ],
  environment: "Linux",
  location: "Novi Sad, Serbia"
}`}</pre>
                </div>

                <div className="status-box">
                  <div className="status-title">SYSTEM STATUS</div>
                  <div className="status-grid">
                    <span>backend</span>
                    <span className="online">● ONLINE</span>
                    <span>network</span>
                    <span className="stable">● STABLE</span>
                    <span>infrastructure</span>
                    <span className="online">● RUNNING</span>
                    <span>latency</span>
                    <span>24 ms</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="stats-section section">
          <div className="container stats-grid">
            {metrics.map((metric) => (
              <motion.div key={metric.label} {...fadeUp} className="stat-card">
                <div className="stat-value mono">{metric.value}</div>
                <div className="stat-label mono">{metric.label}</div>
                <div className="stat-meta mono">{metric.meta}</div>
              </motion.div>
            ))}
          </div>
        </section>

        <section id="projects" className="section">
          <div className="container">
            <motion.div {...fadeUp} className="section-heading">
              <div className="mono-label">Selected work.</div>
              <h2>Systems, infrastructure, networking and products I’ve built.</h2>
            </motion.div>

            <div className="projects-grid">
              {projects.map((project, index) => (
                <motion.article
                  key={project.title}
                  {...fadeUp}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className={`project-card ${project.accent}`}
                >
                  <div className="project-header">
                    <div className="mono-label project-category">{project.category}</div>
                    <div className="project-roles">{project.role}</div>
                  </div>

                  <h3>{project.title}</h3>

                  <div className="project-body">
                    <div className="project-copy">
                      {project.description.map((paragraph) => (
                        <p key={paragraph}>{paragraph}</p>
                      ))}

                      <div className="tech-row">
                        {project.tech.map((item) => (
                          <span key={item} className="chip soft">{item}</span>
                        ))}
                      </div>
                    </div>

                    <div className="diagram-panel">
                      <div className="diagram-node-list">
                        {project.diagram.map((node, idx) => (
                          <div key={node} className="diagram-node-wrap">
                            <span className="diagram-node">{node}</span>
                            {idx < project.diagram.length - 1 && <span className="diagram-line" />}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {project.metrics && (
                    <div className="project-metrics mono">
                      {project.metrics.map((metric) => (
                        <span key={metric}>{metric}</span>
                      ))}
                    </div>
                  )}
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section id="experience" className="section section-surface">
          <div className="container">
            <motion.div {...fadeUp} className="section-heading">
              <div className="mono-label">Experience.</div>
              <h2>Engineering work across systems, networking and infrastructure.</h2>
            </motion.div>

            <div className="timeline">
              {experience.map((item) => (
                <motion.article key={item.place} {...fadeUp} className="timeline-item">
                  <div className="timeline-mark" aria-hidden="true" />
                  <div className="timeline-card">
                    <div className="timeline-topline">
                      <div>
                        <div className="mono-label tiny">{item.period}</div>
                        <h3>{item.place}</h3>
                      </div>
                      <div className="timeline-role mono">{item.role}</div>
                    </div>

                    <div className="location-line mono">
                      <MapPin size={14} /> {item.location}
                    </div>

                    <ul>
                      {item.focus.map((point) => (
                        <li key={point}>{point}</li>
                      ))}
                    </ul>

                    {item.highlight && <div className="highlight mono">{item.highlight}</div>}
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section id="stack" className="section">
          <div className="container">
            <motion.div {...fadeUp} className="section-heading">
              <div className="mono-label">Engineering stack.</div>
              <h2>Technologies organized by the work itself.</h2>
            </motion.div>

            <div className="stack-grid">
              {stackGroups.map((group, idx) => (
                <motion.div key={group.title} {...fadeUp} transition={{ duration: 0.4, delay: idx * 0.04 }} className="stack-card">
                  <div className="stack-header mono">{group.title}</div>
                  <div className="stack-list">
                    {group.items.map((item) => (
                      <span key={item}>{item}</span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="section section-surface">
          <div className="container philosophy-layout">
            <motion.div {...fadeUp} className="philosophy-copy">
              <div className="mono-label">How I work.</div>
              <h2>Engineering systems where performance and reliability matter.</h2>

              <div className="principles">
                {principleList.map((principle) => (
                  <div key={principle.number} className="principle-item">
                    <div className="principle-number mono">{principle.number}</div>
                    <div>
                      <h3>{principle.title}</h3>
                      <p>{principle.text}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mini-tags mono">
                <span>Backend systems</span>
                <span>Distributed infrastructure</span>
                <span>Networking</span>
                <span>Performance engineering</span>
                <span>Cross-platform development</span>
              </div>
            </motion.div>

            <motion.div {...fadeUp} className="about-panel">
              <div className="about-card">
                <div className="mono-label">About.</div>
                <h3>I'm Andrei Levchenko.</h3>
                <p>
                  My experience spans backend services, networking, blockchain infrastructure,
                  cross-platform applications, multiplayer systems, IoT and locally hosted AI.
                </p>
                <p>
                  I started in game development and multiplayer networking and gradually moved deeper
                  into backend engineering, infrastructure, distributed systems and network architecture.
                </p>
                <p>
                  I particularly enjoy engineering problems where performance, latency, reliability and
                  system architecture matter.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="section education-section">
          <div className="container education-layout">
            <motion.div {...fadeUp} className="education-block">
              <div className="mono-label">Education</div>
              <h3>Mechanical Technician</h3>
              <p>Trade and Economic College</p>
              <p className="mono">Kostroma, Russia · 2021</p>
            </motion.div>

            <motion.div {...fadeUp} className="education-block">
              <div className="mono-label">Awards</div>
              <h3>Archimedes International Exhibition of Inventions</h3>
              <p>Award recipient · Moscow · 2020–2021</p>
              <p>Robotics projects spanning engineering and system design.</p>
            </motion.div>
          </div>
        </section>

        <section id="contact" className="section contact-section">
          <div className="container contact-wrap">
            <motion.div {...fadeUp} className="contact-copy">
              <div className="mono-label">Let's build something difficult.</div>
              <h2>Have an engineering problem to solve?</h2>
              <p>
                Backend systems, networking, infrastructure, performance, distributed systems or unusual technical challenges.
              </p>
              <a href="mailto:duxan.lev@gmail.com" className="primary-btn">
                Contact me <ArrowUpRight size={16} />
              </a>
            </motion.div>

            <motion.div {...fadeUp} className="contact-panel">
              <div className="contact-list">
                <a href="mailto:duxan.lev@gmail.com"><Mail size={16} /> duxan.lev@gmail.com</a>
                <a href="tel:+381628932714"><Phone size={16} /> +381628932714</a>
                <a href="https://www.google.com/maps?q=Novi+Sad,+Serbia" target="_blank" rel="noreferrer"><MapPin size={16} /> Novi Sad, Serbia</a>
                <a href="https://github.com/cheburashkalev" target="_blank" rel="noreferrer"><GitBranch size={16} /> GitHub</a>
                <a href="https://www.linkedin.com/in/andrey-levchenko-a30a1622a/" target="_blank" rel="noreferrer"><Network size={16} /> LinkedIn</a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-wrap">
          <div>
            <div className="footer-name">Andrei Levchenko</div>
            <div className="mono-label tiny">Software Engineer</div>
          </div>

          <div className="footer-meta mono">
            <span>Novi Sad · Serbia</span>
            <span>GitHub</span>
            <span>LinkedIn</span>
            <span>Email</span>
          </div>
        </div>
        <div className="container footer-bottom mono">Built with React · TypeScript</div>
      </footer>
    </div>
  );
}

export default App;
