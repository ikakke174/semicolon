import type {
  AboutPoint,
  Client,
  Insight,
  NavLink,
  Service,
  SiteConfig,
  Stat,
} from "@/module/lib/utility/types/content.interface";

// Central place for content. Anything null or marked `placeholder` still needs real, approved information.
export const site: SiteConfig = {
  name: "Semicolon Technologies",
  description:
    "IT consulting and digital solutions that help businesses solve technology problems.",
  // A fixed year on purpose: with `cacheComponents` enabled, calling new Date() while prerendering fails the build.
  copyrightYear: 2026,
  // Paste a link to your company video (YouTube, Vimeo or a file URL). While null, the About photo's play
  // button opens a clearly labelled "sample video" message instead of a video.
  aboutVideoUrl: null,
  contact: {
    email: null, // e.g. "hello@yourdomain.com"
    phone: null, // e.g. "+234 000 000 0000"
    address: null, // e.g. "12 Example Street, Lagos"
  },
  // Add { label: "LinkedIn", href: "https://..." } entries. Empty = no social links shown.
  socials: [],
  // Must be written out in full so Next can inline them into the browser bundle.
  endpoints: {
    contact: process.env.NEXT_PUBLIC_CONTACT_ENDPOINT,
    newsletter: process.env.NEXT_PUBLIC_NEWSLETTER_ENDPOINT,
  },
};

export const navLinks: NavLink[] = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Clients", href: "#clients" },
  { label: "Contact", href: "#contact" },
];

// Proposed copy: confirm against the company's real offerings.
export const services: Service[] = [
  {
    title: "IT Consulting & Strategy",
    description: "Plan technology around your business goals, budget and team.",
    icon: "briefcase",
  },
  {
    title: "Software Development & Digital Transformation",
    description: "Build and modernise the software your business relies on.",
    icon: "code",
  },
  {
    title: "Cloud Solutions & IT Infrastructure",
    description:
      "Design, move and run systems in the cloud or on your own infrastructure.",
    icon: "cloud",
    featured: true,
  },
];

export const serviceOptions: string[] = [
  ...services.map((service) => service.title),
  "Not sure yet",
];

// Placeholder values: replace with verified figures, or remove the section.
export const stats: Stat[] = [
  { value: "00+", label: "Projects delivered", icon: "layers", placeholder: true },
  { value: "00+", label: "Clients served", icon: "users", placeholder: true },
  { value: "00%", label: "Client satisfaction", icon: "award", placeholder: true },
  { value: "00+", label: "Years in business", icon: "briefcase", placeholder: true },
];

// Sample content: replace with real articles.
export const insights: Insight[] = [
  {
    title: "Build an IT strategy that fits your business",
    text: "Start with your goals, then choose the technology that supports them.",
    image: "/images/insight-1.jpg",
    alt: "Colleagues working at a laptop in a bright office",
  },
  {
    title: "Is the cloud right for your workloads?",
    text: "What to weigh before moving systems to cloud computing.",
    image: "/images/insight-2.jpg",
    alt: "Glass office towers seen from below",
  },
  {
    title: "Choose a software development approach",
    text: "How to match a delivery method to your project and team.",
    image: "/images/insight-3.jpg",
    alt: "Hands working over documents and a laptop",
  },
  {
    title: "First steps in cybersecurity",
    text: "Practical habits that reduce risk for any growing business.",
    image: "/images/insight-4.jpg",
    alt: "People standing at a large office window",
  },
];

// Proposed copy: confirm before publishing.
export const aboutPoints: AboutPoint[] = [
  {
    title: "Business-focused problem solving",
    text: "We start from the problem you need solved, not the tool we want to sell.",
    icon: "target",
  },
  {
    title: "Tailored solutions and ongoing support",
    text: "Solutions fitted to your team, with support after launch.",
    icon: "support",
  },
];

// Replace with authorised client logos: { name, logo: "/images/clients/x.svg" }
export const clients: Client[] = Array.from({ length: 6 }, (_, index) => ({
  name: `Client logo ${index + 1}`,
  logo: null,
}));
