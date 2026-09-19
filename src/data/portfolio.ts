/**
 * ============================================================================
 *  PORTFOLIO DATA — Single source of truth
 * ============================================================================
 *
 *  HOW TO ADD A NEW PROJECT:
 *    Push a new object into the `projects` array below. Required fields:
 *      title, description, techStack (string[]), githubUrl
 *    Optional: liveUrl (if omitted, the "Live Demo" button won't render)
 *    The first project is always displayed in the large "featured" layout;
 *    additional projects appear in a responsive card grid below it.
 *
 *  HOW TO ADD A NEW JOB / EXPERIENCE:
 *    Push a new object into the `experience` array. Required fields:
 *      role, company, startDate, endDate (use "Present" if current),
 *      bullets (string[]), techStack (string[])
 *    The timeline renders entries in array order (newest first recommended).
 *
 *  HOW TO ADD A NEW SOCIAL LINK:
 *    Push a new object into the `socials` array. Required fields:
 *      label (aria-label text), href (full URL), icon (Lucide icon name)
 *    The icon name must match a lucide-react export, e.g. "Github", "Linkedin",
 *    "Mail", "Twitter", "Dribbble", etc.
 *    Every place that renders social links (Header, Hero, Contact, Footer)
 *    maps this single array — one change updates all.
 *
 *  HOW TO ADD A NEW SKILL GROUP:
 *    Push a new object into the `skills` array with a `category` string and
 *    an `items` string[]. Each group renders as a labeled row of tags.
 *
 * ============================================================================
 */

// ---------------------------------------------------------------------------
//  Type definitions
// ---------------------------------------------------------------------------

export interface SocialLink {
  label: string;
  href: string;
  icon: string; // Lucide icon name
}

export interface SkillGroup {
  category: string;
  items: string[];
}

export interface ExperienceItem {
  role: string;
  company: string;
  startDate: string;
  endDate: string;
  bullets: string[];
  techStack: string[];
}

export interface Project {
  title: string;
  description: string;
  techStack: string[];
  githubUrl: string;
  liveUrl?: string;
  image?: string; // path to screenshot image
}

export interface EducationItem {
  institution: string;
  degree: string;
  field: string;
  startYear: string;
  endYear: string;
}

// ---------------------------------------------------------------------------
//  Profile
// ---------------------------------------------------------------------------

export const profile = {
  name: "Abenezer Mengesha",
  role: "Fullstack Developer",
  location: "Addis Ababa, Ethiopia",
  bio: "I build web applications end to end — from interactive React and Next.js frontends to robust Node.js and Express APIs backed by PostgreSQL. I care about clean architecture, type safety with TypeScript across the entire stack, and am increasingly focused on integrating AI-powered features into the products I ship.",
  about:
    "I'm a fullstack developer based in Addis Ababa, Ethiopia, passionate about crafting polished web experiences that solve real problems. I enjoy the challenge of owning a feature from database schema to pixel-perfect UI, and I thrive in fast-paced environments where I can learn and ship quickly. When I'm not coding, I'm exploring new tools, reading about system design, or experimenting with AI workflows.",

  availabilityStatus: "Open to opportunities",
};

// ---------------------------------------------------------------------------
//  Socials  —  add / remove a platform in one line; all render points update
// ---------------------------------------------------------------------------

export const socials: SocialLink[] = [
  {
    label: "GitHub",
    href: "https://github.com/Abeni23",
    icon: "Github",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/abenezer-mengesha-89a809254/",
    icon: "Linkedin",
  },
  {
    label: "Email",
    href: "mailto:abenezermengesha6@gmail.com",
    icon: "Mail",
  },
];

// ---------------------------------------------------------------------------
//  Skills
// ---------------------------------------------------------------------------

export const skills: SkillGroup[] = [
  {
    category: "Frontend",
    items: ["TypeScript", "React", "Next.js"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express.js", "PostgreSQL"],
  },
  {
    category: "Tools & Other",
    items: ["Git", "AI Development"],
  },
];

// ---------------------------------------------------------------------------
//  Experience
// ---------------------------------------------------------------------------

export const experience: ExperienceItem[] = [
  {
    role: "Software Development Intern",
    company: "Syntax Software Solutions",
    startDate: "January 2025",
    endDate: "March 2025",
    bullets: [
      "Contributed to the development of client-facing web applications using React and TypeScript, collaborating with senior engineers on feature implementation and code reviews.",
      "Built and integrated RESTful API endpoints with Node.js and Express, connecting frontend interfaces to PostgreSQL databases.",
      "Participated in agile sprints, daily standups, and retrospectives, gaining hands-on experience with professional software development workflows.",
    ],
    techStack: ["TypeScript", "React", "Node.js", "Express.js", "PostgreSQL", "Git"],
  },
];

// ---------------------------------------------------------------------------
//  Projects
// ---------------------------------------------------------------------------

export const projects: Project[] = [
  {
    title: "Gasha Drift Car Rental",
    // TODO: Refine this description to better reflect the final product
    description:
      "A fullstack car rental platform where users can browse a curated fleet of vehicles, check real-time availability, and complete bookings seamlessly. The app features an intuitive search-and-filter interface, a responsive booking flow, and a clean dashboard for managing reservations — all powered by a type-safe TypeScript codebase from frontend to backend.",
    techStack: ["TypeScript", "React", "Node.js", "Express.js", "PostgreSQL"],
    githubUrl: "https://github.com/Abeni23/Gasha-Drift-Car-Rental",
    // liveUrl: "https://gasha-drift.vercel.app",  // uncomment when deployed
    image: "/project-gasha-drift.webp",
  },
];

// ---------------------------------------------------------------------------
//  Education
// ---------------------------------------------------------------------------

export const education: EducationItem[] = [
  {
    institution: "HiLCoE School of Computer Science and Technology",
    degree: "Bachelor's Degree",
    field: "Computer Science",
    startYear: "2021",
    endYear: "2025",
  },
];
