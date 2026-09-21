import Image from 'next/image';
import ThemeToggle from '@/components/ThemeToggle';
import OrgLogo from '@/components/OrgLogo';
import Shot from '@/components/Shot';
import Gallery, { type MediaItem } from '@/components/Gallery';

type Logo = { src?: string; label: string; mono: string };
type Bullet = { text: string };

type Item = {
  title: string;
  href?: string;
  links?: { label: string; href: string }[]; // explicit, labeled destinations
  right?: string;
  tag?: string;
  company?: string;
  sub?: string;
  detail?: string | string[];
  bullets?: Bullet[];
  logo?: Logo;
  image?: string;
  video?: string; // silent looping MP4 demo; uses `image` as its poster
  media?: MediaItem[]; // multiple images/videos; click opens a fullscreen gallery
};

const PENN: Logo = { src: '/logos/penn.png', label: 'University of Pennsylvania', mono: 'P' };
const SRM: Logo = { src: '/logos/srm.png', label: 'SRM Institute of Science and Technology', mono: 'SRM' };
const MOATIVE: Logo = { src: '/logos/moative.png', label: 'Moative', mono: 'M' };
const SAMSUNG: Logo = { src: '/logos/samsung.png', label: 'Samsung Research', mono: 'S' };

// Each string is its own paragraph. Add or remove a line to add or remove a paragraph.
const about = [
  "I'm a startup-native software engineer + designer working on applied AI, with a love for building across the stack. I'm a sucker for great aesthetics, and I've always liked making things: LEGO, Minecraft builds, 3D models. I'm also drawn to open worlds and worldbuilding.",

  "I'm currently pursuing my master's in Computer Science at Penn, graduating in May 2027, and doing research with the Penn NLP Group under Prof. Chris Callison-Burch on LLM vigilance and memory systems.",

  "I'm passionate about tennis and swimming and try to make time for both regularly. I also love dogs and have a Rottweiler named Grogu!",
];

const experience: Item[] = [
  {
    title: 'Software Engineer Intern, Applied AI',
    company: 'Moative',
    right: 'Aug 2024 – Jun 2025',
    logo: MOATIVE,
    detail: 'Sole engineer on most projects, owning each from PRD and prototyping through infrastructure, deployment, and client demos.',
    bullets: [
      {
        text: 'An AI interview-screening platform that turns raw interview audio into evidence-cited candidate scorecards, used across 100+ interviews at 15+ companies. Built on a LangGraph multi-agent pipeline (diarization, trait-weighted scoring, comparison); I owned the app, auth, and deployment.',
      },
      {
        text: 'A utility support agent for outages, billing, and usage that serves web chat, phone, and SMS from one LangGraph runtime, with per-customer memory that persists across sessions and channels.',
      },
      {
        text: 'A permit-review agent where a multimodal model checks site plans and engineering drawings against a 22-point municipal-code checklist, returning a pass/fail with rationale per requirement. I shipped the Django backend, the citizen application flow, and the staff review dashboard.',
      },
      {
        text: 'A company-lookup API (FastAPI) that turns a company name into structured firmographics and a NAICS code, using LangChain scraping agents and a RAG layer over the 800-page NAICS manual to avoid fabricated codes.',
      },
    ],
  },
  {
    title: 'Machine Learning Engineer Intern',
    company: 'Samsung Research',
    right: 'Aug 2023 – Mar 2024',
    logo: SAMSUNG,
    bullets: [
      {
        text: 'Built a pet facial-state classifier (eye, ear, and mouth position) whose fine-tuned MobileNetV2-SSD beat the baseline by 11%, ahead of YOLOv8 and ResNet across standardized evaluation sets.',
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
    links: [{ label: 'GitHub', href: 'https://github.com/YohanV1/ModForge' }],
    right: '2026',
    tag: 'Natural-language Minecraft mod generator',
    image: '/project-images/modforge.png',
    video: '/project-images/modforge.mp4',
    detail:
      'A platform that turns a plain-English prompt ("a diamond sword that shoots lightning") into a compiled, installable Minecraft mod through an agentic loop with no human in it: an agent writes Fabric/Java against retrieved API context, a sandboxed Docker + Gradle container compiles it, and build errors feed back until it passes. I built the full product around it, and reverse-verified Minecraft 26.1\'s newly unobfuscated API from the compiled JARs after official mappings were discontinued.',
  },
  {
    title: 'LLMFuzz',
    links: [{ label: 'GitHub', href: 'https://github.com/YohanV1/LLMFuzz' }],
    right: '2026',
    tag: 'LLM-driven coverage-guided fuzzer',
    image: '/project-images/LLMFuzz_2.png',
    media: [
      { src: '/project-images/LLMFuzz_2.png' },
      { src: '/project-images/LLMFuzz_1.png' },
    ],
    detail:
      'A coverage-guided fuzzing agent that feeds a function\'s uncovered branches back to an LLM each iteration to target unhit paths, instead of mutating blindly like AFL or LibFuzzer. On a benchmark tokenizer it hit 98.3% branch coverage vs 90.7% for random fuzzing and found 4 crashes the baseline missed, using under half the inputs.',
  },
  {
    title: 'PennSearch',
    links: [{ label: 'Writeup (PDF)', href: '/project-images/5550_Writeup.pdf' }],
    right: '2025',
    tag: 'Distributed web search engine, built from scratch',
    image: '/project-images/PennSearch_1.jpg',
    media: [
      { src: '/project-images/PennSearch_1.jpg' },
      { src: '/project-images/PennSearch_2.png' },
      { src: '/project-images/PennSearch_3.png' },
    ],
    detail:
      'A Java web search engine running on distributed infrastructure I built from scratch: a sharded, consistent-hashing key-value store and a Spark-style compute engine with an RDD interface. On top of it, a crawler over 300K+ pages, a distributed inverted index, iterative PageRank, and multi-signal ranking that serves sub-50ms queries.',
  },
  {
    title: 'Mini-Minecraft',
    links: [{ label: 'Full demo (YouTube)', href: 'https://www.youtube.com/watch?v=oZ9Nx2jLinI' }],
    right: '2026',
    tag: 'Voxel game engine in C++ and OpenGL',
    image: '/project-images/mini-minecraft.png',
    video: '/project-images/minimc.mp4',
    detail:
      'A from-scratch voxel engine in C++ and OpenGL (3-person team) where I owned rendering and generation: chunked terrain that streams in and out around the player in real time, a full GLSL shader stack with a procedural analytic day/night sky, and rivers and asset scatter from a stochastic L-system.',
  },
  {
    title: 'AskWhatMatters',
    links: [{ label: 'GitHub', href: 'https://github.com/YohanV1/hack-ai-thon-submission-wanderiq' }],
    right: '2026',
    tag: 'Adaptive hotel-review system',
    image: '/project-images/askwhatmatters.jpeg',
    media: [
      { src: '/project-images/askwhatmatters.jpeg' },
      { src: '/project-images/AskWhatMatters_2.png' },
    ],
    detail:
      'A full-stack system that rethinks the post-stay hotel review: instead of a generic form, it mines a property\'s existing reviews for what is missing, stale, or contradicted, then asks one or two targeted follow-ups. A deterministic gap-scoring engine does the analysis offline and an LLM only phrases the questions, at roughly a tenth of a cent per insight. Placed 3rd of 65 teams at the 2026 Wharton × Expedia Hack-AI-thon.',
  },
];

const research: Item[] = [
  {
    title: 'Penn NLP Group',
    right: 'Jun 2026 – present',
    sub: 'Advised by Chris Callison-Burch and Mark Yatskar',
    logo: PENN,
    image: '/project-images/research.png',
    media: [{ src: '/project-images/research.png', contain: true }],
    detail: [
      `My research targets the 'vigilance gap': a model holds a safety-critical fact a user shared earlier (say, a latex allergy) but fails to act on it once the question stops pointing back to it ("banana or avocado smoothie?").`,
      `I approach it as a memory problem. Most memory systems are built to fetch what a user is asking about, while vigilance needs the opposite: surfacing a fact they are not asking about but urgently need.`,
      `A memory system I designed for safety rather than general recall raised success on a safety benchmark from 48% to 87%, while cutting false alarms from 11% to 8%, below the base model. I also built the parallelized, cost-tracked pipeline that runs these evaluations at scale.`,
    ],
  },
];

const teaching: Item[] = [
  {
    title: 'Graduate Teaching Assistant',
    company: 'University of Pennsylvania',
    bullets: [
      { text: 'CIS 5210 · Artificial Intelligence. Taught by Harry Smith (Spring 2026) and Chris Callison-Burch (Summer and Fall 2026).' },
      { text: 'CIT 5960 · Algorithms and Computation. Taught by Anindya De and Erik Waingarten (Fall 2026).' },
    ],
  },
];

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
          <span className="font-medium text-gray-900 dark:text-white">{item.title}</span>
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
      {item.company && (
        <p className="mt-0.5 text-sm font-medium text-gray-700 dark:text-gray-300">{item.company}</p>
      )}
      {item.sub && <p className="mt-0.5 text-sm text-gray-500 dark:text-gray-400">{item.sub}</p>}
      {item.detail && (
        <div className="mt-1.5 space-y-2 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
          {(Array.isArray(item.detail) ? item.detail : [item.detail]).map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>
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
              <span>{b.text}</span>
            </li>
          ))}
        </ul>
      )}
      {item.links && item.links.length > 0 && (
        <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1">
          {item.links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-gray-700 underline decoration-gray-300 underline-offset-4 hover:text-gray-900 hover:decoration-gray-900 dark:text-gray-300 dark:decoration-gray-600 dark:hover:text-white dark:hover:decoration-gray-300"
            >
              {l.label}
              <span aria-hidden> ↗</span>
            </a>
          ))}
        </div>
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
              {(item.image || item.video || item.media) && (
                <div className="sm:w-56 sm:shrink-0">
                  <Gallery
                    label={item.title}
                    media={
                      item.media ??
                      (item.video
                        ? [{ src: item.video, video: true, poster: item.image }]
                        : item.image
                          ? [{ src: item.image }]
                          : [])
                    }
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
              className="h-32 w-32 rounded-full object-cover"
            />
            <h1 className="mt-5 text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
              Yohan Vergis Vinu
            </h1>
            <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">
              Software Engineer &amp; Designer
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

            <p className="mt-5 flex items-center gap-2 text-sm font-medium text-gray-900 dark:text-white">
              <span className="h-2 w-2 shrink-0 rounded-full bg-green-500" aria-hidden />
              Open to full-time SWE / AI / ML roles, starting May 2027.
            </p>

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
