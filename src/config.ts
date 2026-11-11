/**
 * rubenich.dev — site configuration.
 * Only `title` and `url` matter to get started; everything else has a default.
 */
export const SITE = {
  title: "rubenich.dev",
  description:
    "Rafael Rubenich is a senior full-stack software engineer (TypeScript, React, Node.js, Python) building healthcare and AI products. Notes on software engineering, system design and AI agents.",
  tagline: "Senior Software Engineer", // used in the home page title and structured data
  photo: "/rafael-rubenich.jpg", // 1200x1200 round portrait on white, used for social cards and structured data
  twitter: "@rrubenich",
  locale: "en_US",
  url: "https://rubenich.dev", // your deployed URL (used for RSS, sitemap, canonical links)
  author: "Rafael Rubenich",
  lang: "en",

  // Header navigation. Remove or add links freely.
  nav: [
    { label: "Home", href: "/" },
    { label: "Archive", href: "/posts" },
    { label: "About", href: "/about" },
  ],

  // Turn features on or off.
  features: {
    search: true, // needs `npm run build` once; search runs on the built site
    readingMode: true, // font size, width and typeface controls on posts
    toc: true, // table of contents on posts
    ogImages: true, // generate a social preview image for every post at build time
  },

  // Google Tag Manager container ID (e.g. "GTM-ABC1234"). Leave empty to load no tracking.
  // The PUBLIC_GTM_ID environment variable overrides it.
  gtmId: "GTM-NTP8WDZN",

  postsOnHome: 4, // posts listed beside the featured one; older ones go under "More posts"
  morePostsOnHome: 6,
  // Profiles shown as icons in the header (icon: "github" | "linkedin").
  profiles: [
    { label: "GitHub", href: "https://github.com/rrubenich", icon: "github" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/rubenich", icon: "linkedin" },
  ],

  // Links shown in the footer. Leave empty to hide.
  social: [
    { label: "GitHub", href: "https://github.com/rrubenich" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/rubenich" },
    { label: "RSS", href: "/rss.xml" },
  ],
};
