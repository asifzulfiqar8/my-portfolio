import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { RootProvider } from "./components/providers/root-provider";
import { SmoothScroll } from "./components/smooth-scroll";

const geist = Geist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Asif Zulfiqar - Software Engineer",
  description:
    "Hi, I'm Asif Zulfiqar, a passionate Software Engineer with expertise in HTML, CSS, JavaScript, Tailwind CSS, Reactjs, Nextjs, Node.js, Express, MongoDB, WordPress, Git/GitHub and Typescript. Explore my work and experience in building dynamic, scalable web applications and crafting visually stunning, interactive web solutions.",
  keywords: [
    "Software Engineer",
    "React.js",
    "Next.js",
    "TypeScript",
    "TanStack",
    "Node.js",
    "Express",
    "MongoDB",
    "WordPress",
    "Git/GitHub",
    "Full Stack Developer",
    "Web Development",
    "Frontend Developer",
  ],
  openGraph: {
    title: "Asif Zulfiqar - Software Engineer",
    description:
      "Explore the world of web development with Asif Zulfiqar, a Software Engineer skilled in HTML, CSS, JavaScript, Tailwind CSS, Reactjs, Nextjs, Node.js, Express, MongoDB, WordPress, Git/GitHub and Typescript. Discover visually stunning and interactive web solutions in my portfolio.",
    url: "https://www.asifzulfiqar.pro",
    type: "website",
    images: [
      {
        url: "https://www.asifzulfiqar.pro/assets/images/asif-banner.png", // MUST be 1200x630
        width: 1200,
        height: 630,
        alt: "Asif Zulfiqar - Software Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Asif Zulfiqar - Software Engineer",
    description:
      "Explore the world of web development with Asif Zulfiqar, a Software Engineer skilled in HTML, CSS, JavaScript, Tailwind CSS, Reactjs, Nextjs, Node.js, Express, MongoDB, WordPress, Git/GitHub and Typescript. Discover visually stunning and interactive web solutions in my portfolio.",
    images: ["https://www.asifzulfiqar.pro/assets/images/asif-banner.png"],
    site: "@asifzulfiqar", // optional if you have a Twitter username
  },
  authors: [
    {
      name: "Asif Zulfiqar",
      url: "https://www.asifzulfiqar.pro",
    },
  ],
  alternates: {
    types: {
      "application/x-github": "https://github.com/asifzulfiqar8",
      "application/x-linkedin": "https://www.linkedin.com/in/asifzulfiqar8/",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="light">
      <body
        className={`${geist.className} antialiased min-h-screen bg-bgColor flex flex-col`}
      >
        <RootProvider>
          <SmoothScroll>{children}</SmoothScroll>
        </RootProvider>
      </body>
    </html>
  );
}
