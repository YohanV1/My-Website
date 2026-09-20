import Image from 'next/image';
import ThemeToggle from '@/components/ThemeToggle';
import OrgLogo from '@/components/OrgLogo';
import Shot from '@/components/Shot';

type Logo = { src?: string; label: string; mono: string };
type Bullet = { text: string };

type Item = {
  title: string;
  href?: string;
  right?: string;
  tag?: string;
  sub?: string;
  detail?: string;
  bullets?: Bullet[];
  logo?: Logo;
  image?: string;
};

const PENN: Logo = { src: '/logos/penn.png', label: 'University of Pennsylvania', mono: 'P' };
const SRM: Logo = { src: '/logos/srm.png', label: 'SRM Institute of Science and Technology', mono: 'SRM' };
const MOATIVE: Logo = { src: '/logos/moative.png', label: 'Moative', mono: 'M' };
const SAMSUNG: Logo = { src: '/logos/samsung.png', label: 'Samsung Research', mono: 'S' };

// Each string is its own paragraph. Add or remove a line to add or remove a paragraph.
const about = [
  "I'm a startup-native software engineer + designer working on applied AI, with a love for building across the stack. I'm a sucker for great aesthetics, and I've always liked making things--LEGO, Minecraft builds, 3D models. I'm also drawn to open worlds and worldbuilding.",

  "I'm currently pursuing my master's in Computer Science at Penn, graduating in May 2027, and doing research with the Penn NLP Group under Prof. Chris Callison-Burch on LLM vigilance and memory systems.",

  "I'm passionate about tennis and swimming and try to make time for both regularly. I also love dogs and have a Rottweiler named Grogu!",
];

const experience: Item[] = [
  {
    title: 'Software Engineer Intern, Applied AI · Moative',
    right: 'Aug 2024 – Jun 2025',
    logo: MOATIVE,
    detail: 'Sole engineer on most projects, owning each from PRD and prototyping through infrastructure, deployment, and client demos.',
    bullets: [
      {
        text: 'An **AI interview-screening platform** that turns raw interview audio into evidence-cited candidate evaluations through a LangGraph multi-agent pipeline (diarization, transcript structuring, trait-weighted scoring, comparison). Built the frontend and the encrypted auth and rate-limiting layer, and shipped it on AWS ECS Fargate. Reached **100+ interviews across 15+ companies**.',
      },
      {
        text: 'A **utility support agent** (outages, billing, meter readings, usage) that serves web chat, phone, and SMS from one LangGraph runtime, with per-customer memory that persists across sessions and channels (Flask, SQLAlchemy, Twilio, ElevenLabs, Whisper).',
      },
      {
        text: 'A **permit-review agent** (a Moative × Exceleron engagement) where a multimodal agent reads site plans and engineering drawings and checks them against a 22-point regulatory checklist from real municipal code, returning a pass/fail verdict with rationale per requirement. Shipped the Django backend, the citizen application flow, and a staff review dashboard.',
      },
      {
        text: 'A **company-lookup API** (FastAPI) that turns a company name into structured business intelligence and an NAICS industry code in one call, using a chain of LangChain scraping agents plus a RAG layer over the 800-page NAICS manual (ChromaDB) to ground the code and avoid fabricated classifications.',
      },
    ],
  },
  {
    title: 'Machine Learning Engineer Intern · Samsung Research',
    right: 'Aug 2023 – Mar 2024',
    logo: SAMSUNG,
    bullets: [
      {
        text: 'Built a pet facial-state classifier (eye, ear, and mouth position) whose fine-tuned MobileNetV2-SSD beat the baseline by **11%**, ahead of YOLOv8 and ResNet across standardized evaluation sets.',
      },
      {
        text: 'Compiled and annotated a 10K+ image dataset through manual collection, labeling, and augmentation to improve class balance, earning a Certificate of Excellence and a $1,000 award.',
      },
    ],
  },
];

const work: Item[] = [
  {
    title: 'ModForge',
    href: 'https://github.com/YohanV1/ModForge',
    right: '2026',
    tag: 'Natural-language Minecraft mod generator',
    image: '/project-images/modforge.png',
    detail:
      'A platform that turns a plain-English prompt ("a diamond sword that shoots lightning") into a **compiled, installable Minecraft mod**. The core is an agentic loop with no human in it: an agent writes Fabric/Java against retrieved API context, a sandboxed Docker + Gradle container compiles it under resource limits, and build errors are fed back to the model to self-repair until it passes. Around it I built the full product, from a FastAPI backend and Next.js frontend to usage-metered auth and one-click GitHub OAuth export, and reverse-verified Minecraft 26.1\'s newly unobfuscated API from the compiled JARs after official mappings were discontinued.',
  },
  {
    title: 'LLMFuzz',
    href: 'https://github.com/YohanV1/LLMFuzz',
    right: '2026',
    tag: 'LLM-driven coverage-guided fuzzer',
    image: '/project-images/LLMFuzz_1.png',
    detail:
      'A coverage-guided fuzzing agent that closes the loop between an LLM and a live coverage instrument: rather than mutating blindly like AFL or LibFuzzer, it feeds a function\'s source and its uncovered branches back to the model each iteration to target specific unhit paths, then runs them in sandboxed subprocesses and measures branch coverage with coverage.py under an adaptive strategy. On a benchmark tokenizer it hit **98.3% branch coverage** vs 90.7% for random fuzzing and found **4 crashes** the baseline missed, using under half the inputs. Scales horizontally with a Redis-Streams coordinator and worker layer.',
  },
  {
    title: 'PennSearch',
    href: '/project-images/5550_Writeup.pdf',
    right: '2025',
    tag: 'Distributed web search engine, built from scratch',
    image: '/project-images/PennSearch_1.png',
    detail:
      'A Java web search engine running on distributed infrastructure I built from scratch: a sharded, disk-backed key-value store (coordinator and workers, consistent-hashing with cross-node replication) and a Spark-style compute engine with an RDD interface. On top of it, a politeness-aware crawler (**300K+ pages**), a distributed inverted index with Porter stemming, multi-signal ranking (TF-IDF, iterative PageRank, title/URL matching) that serves **sub-50ms queries**, and a ranked frontend on a from-scratch HTTP/1.1 server with TLS.',
  },
  {
    title: 'Mini-Minecraft',
    right: '2026',
    tag: 'Voxel game engine in C++ and OpenGL',
    image: '/project-images/mini-minecraft.png',
    detail:
      'A from-scratch voxel engine in C++ and OpenGL (3-person team) where I owned rendering and procedural generation: a chunked terrain renderer with face-culled meshing, interleaved VBOs, and zone-based streaming that pages 16-chunk regions in and out around the player in **real time**. Wrote the full GLSL shader stack, including a procedural analytic day/night sky, and generated rivers and asset scatter with a stochastic L-system and spatial hashing.',
  },
  {
    title: 'AskWhatMatters',
    href: 'https://github.com/YohanV1/hack-ai-thon-submission-wanderiq',
    right: '2026',
    tag: 'Adaptive hotel-review system',
    image: '/project-images/askwhatmatters.png',
    detail:
      'A full-stack system that rethinks the post-stay hotel review: instead of a generic form, it mines a property\'s existing reviews for what is missing, stale, or contradicted, then asks one or two targeted follow-ups while the guest is reviewing. A deterministic gap-scoring engine (coverage, freshness, and traveler impact, with Bayesian confidence floors) runs offline as a batch job, and an LLM only phrases the questions on top of numbers you can audit, at roughly **a tenth of a cent per insight**. Placed **3rd of 65 teams** at the Wharton × Expedia Hack-AI-thon.',
  },
];

const research: Item[] = [
  {
    title: 'Penn NLP Group',
    right: 'Jun 2026 – present',
    sub: 'Advised by Chris Callison-Burch and Mark Yatskar',
    logo: PENN,
    image: '/project-images/research.png',
    detail:
      `My research targets the 'vigilance gap': a model holds a safety-critical fact a user shared earlier (say, a latex allergy) but fails to act on it once the question stops pointing back to it ("banana or avocado smoothie?"). I approach it as a memory problem: most memory systems are built to fetch what a user is asking about, while vigilance needs surfacing a fact they are not asking about but urgently need. A memory system I designed for safety rather than general recall raised success on a safety benchmark from **48% to 87%** while cutting false alarms from **11% to 8%**, below the base model. I also built the parallelized, cost-tracked pipeline that runs these evaluations at scale.`,
  },
];

const teaching: Item[] = [
  {
    title: 'Graduate Teaching Assistant, CIS 5210 · Artificial Intelligence',
    bullets: [
      { text: 'Spring 2026, taught by Harry Smith' },
      { text: 'Summer and Fall 2026, taught by Chris Callison-Burch' },
    ],
  },
  {
    title: 'Graduate Teaching Assistant, CIT 5960 · Algorithms and Computation',
    bullets: [{ text: 'Fall 2026, taught by Anindya De and Erik Waingarten' }],
  },
];

/* Renders **bold** spans so key numbers stand out. */
function Rich({ text }: { text: string }) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return (
    <>
      {parts.map((p, i) =>
        p.startsWith('**') && p.endsWith('**') ? (
          <strong key={i} className="font-semibold text-gray-900 dark:text-white">
            {p.slice(2, -2)}
          </strong>
        ) : (
          <span key={i}>{p}</span>
        )
      )}
    </>
  );
}

function Label({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-xs font-medium uppercase tracking-wider text-gray-400 dark:text-gray-500">
      {children}
    </h2>
  );
}

function ItemBody({ item }: { item: Item }) {
  return (
    <div className="min-w-0 flex-1">
      <div className="flex items-baseline justify-between gap-4">
        <div className="flex min-w-0 flex-wrap items-baseline gap-x-2 gap-y-0.5">
          {item.href ? (
            <a
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-gray-900 underline decoration-gray-300 underline-offset-4 hover:decoration-gray-900 dark:text-white dark:decoration-gray-600 dark:hover:decoration-gray-300"
            >
              {item.title}
            </a>
          ) : (
            <span className="font-medium text-gray-900 dark:text-white">{item.title}</span>
          )}
          {item.tag && (
            <span className="text-sm text-gray-500 dark:text-gray-400">
              <span className="text-gray-400 dark:text-gray-600">· </span>
              {item.tag}
            </span>
          )}
        </div>
        {item.right && (
          <span className="shrink-0 text-sm tabular-nums text-gray-400 dark:text-gray-500">
            {item.right}
          </span>
        )}
      </div>
      {item.sub && <p className="mt-0.5 text-sm text-gray-500 dark:text-gray-400">{item.sub}</p>}
      {item.detail && (
        <p className="mt-1.5 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
          <Rich text={item.detail} />
        </p>
      )}
      {item.bullets && (
        <ul className="mt-2 space-y-2">
          {item.bullets.map((b, i) => (
            <li
              key={i}
              className="flex gap-2.5 text-sm leading-relaxed text-gray-600 dark:text-gray-400"
            >
              <span
                className="mt-[0.5rem] h-1 w-1 shrink-0 rounded-full bg-gray-400 dark:bg-gray-600"
                aria-hidden
              />
              <span>
                <Rich text={b.text} />
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

function Section({ label, items }: { label: string; items: Item[] }) {
  return (
    <section>
      <Label>{label}</Label>
      <div className="mt-3 divide-y divide-gray-200 dark:divide-gray-800">
        {items.map((item) => (
          <div key={item.title} className="py-5 first:pt-0 last:pb-0">
            <div className="flex flex-col gap-4 sm:flex-row sm:gap-6">
              <div className="flex min-w-0 flex-1 gap-4">
                {item.logo && (
                  <OrgLogo src={item.logo.src} label={item.logo.label} mono={item.logo.mono} />
                )}
                <ItemBody item={item} />
              </div>
              {item.image && (
                <div className="sm:w-56 sm:shrink-0">
                  <Shot
                    src={item.image}
                    alt={`${item.title}: ${item.tag ?? item.sub ?? ''}`}
                    label={item.title}
                    href={item.href?.startsWith('http') ? item.href : undefined}
                  />
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function EduRow({ logo, name, degree, field, extra, dates }: {
  logo: Logo;
  name: string;
  degree: string;
  field: string;
  extra?: string;
  dates: string;
}) {
  return (
    <div className="flex gap-3">
      <OrgLogo src={logo.src} label={logo.label} mono={logo.mono} size={34} />
      <div>
        <div className="text-sm font-medium text-gray-900 dark:text-white">{name}</div>
        <div className="text-sm text-gray-500 dark:text-gray-400">{degree}</div>
        <div className="text-sm text-gray-500 dark:text-gray-400">{field}</div>
        {extra && <div className="text-sm text-gray-500 dark:text-gray-400">{extra}</div>}
        <div className="mt-0.5 text-xs tabular-nums text-gray-400 dark:text-gray-500">{dates}</div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen">
      <div className="fixed right-5 top-5 z-10">
        <ThemeToggle />
      </div>

      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-10 md:py-20 lg:px-16">
        <div className="md:grid md:grid-cols-[16rem_1fr] md:gap-x-10 lg:gap-x-16">
          {/* Identity rail */}
          <aside className="md:sticky md:top-20 md:self-start">
            <Image
              src="/photo.png"
              alt="Yohan Vergis Vinu"
              width={288}
              height={288}
              priority
              className="h-24 w-24 rounded-full object-cover"
            />
            <h1 className="mt-5 text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
              Yohan Vergis Vinu
            </h1>
            <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">
              Software engineer &amp; designer
            </p>
            <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">Philadelphia, PA</p>

            <div className="mt-5 flex flex-wrap gap-x-4 gap-y-1 text-sm text-gray-600 dark:text-gray-400">
              {[
                { label: 'GitHub', href: 'https://github.com/YohanV1' },
                { label: 'LinkedIn', href: 'https://www.linkedin.com/in/yohanvinu/' },
                { label: 'Email', href: 'mailto:yohanvv@engineering.upenn.edu' },
                { label: 'Résumé', href: '/Yohan_Vergis_Vinu_Resume.pdf' },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith('mailto:') ? undefined : '_blank'}
                  rel="noopener noreferrer"
                  className="hover:text-gray-900 dark:hover:text-white"
                >
                  {s.label}
                </a>
              ))}
            </div>

            <div className="mt-8">
              <Label>Education</Label>
              <div className="mt-3 space-y-4">
                <EduRow
                  logo={PENN}
                  name="University of Pennsylvania"
                  degree="MSE, Computer and Information Science"
                  field="GPA: 3.95 / 4.00"
                  dates="Aug 2025 – May 2027"
                />
                <EduRow
                  logo={SRM}
                  name="SRM Institute of Science and Technology"
                  degree="BTech, Computer Science and Engineering"
                  field="GPA: 9.80 / 10 (Top 1%)"
                  dates="Aug 2021 – May 2025"
                />
              </div>
            </div>
          </aside>

          {/* Content */}
          <div className="mt-12 space-y-11 md:mt-0">
            <section>
              <Label>About</Label>
              <div className="mt-3 flex flex-col gap-6 sm:flex-row sm:items-start sm:gap-8">
                <div className="min-w-0 max-w-2xl flex-1 space-y-3 text-[15px] leading-relaxed text-gray-700 dark:text-gray-300">
                  {about.map((paragraph, i) => (
                    <p key={i}>{paragraph}</p>
                  ))}
                </div>
                <figure className="w-full shrink-0 sm:w-64">
                  <Shot
                    src="/grogu.png"
                    alt="Grogu, my rottweiler, next to a Grogu figure"
                    label="Grogu"
                    aspect="aspect-[4/3]"
                  />
                  <figcaption className="mt-2 text-center text-xs text-gray-400 dark:text-gray-500">
                    Grogu, and his namesake
                  </figcaption>
                </figure>
              </div>
            </section>

            <Section label="Experience" items={experience} />
            <Section label="Selected work" items={work} />
            <Section label="Research" items={research} />
            <Section label="Teaching" items={teaching} />
          </div>
        </div>

        <footer className="mt-16 border-t border-gray-200 pt-6 text-center text-xs text-gray-400 dark:border-gray-800 dark:text-gray-500">
          © {new Date().getFullYear()} Yohan Vergis Vinu
        </footer>
      </div>
    </main>
  );
}
