import "./globals.css";

export const metadata = {
  title: "Asif Zulfiqar - Web Developer",
  description:
    "Hi, I'm Asif Zulfiqar, a passionate MERN Web Developer with expertise in HTML, CSS, JavaScript, Bootstrap, Tailwind CSS, Reactjs, Nextjs, Node.js, Express, MongoDB, WordPress, Git/GitHub and Typescript. Explore my work and experience in building dynamic, scalable web applications and crafting visually stunning, interactive web solutions.",
  openGraph: {
    title: "Asif Zulfiqar - Web Developer",
    description:
      "Explore the world of web development with Asif Zulfiqar, a MERN Web Developer skilled in HTML, CSS, JavaScript, Bootstrap, Tailwind CSS, Reactjs, Nextjs, Node.js, Express, MongoDB, WordPress, Git/GitHub and Typescript. Discover visually stunning and interactive web solutions in my portfolio.",
    url: "https://asifzulfiqar.vercel.app/",
    image: "https://asifzulfiqar.vercel.app/assets/images/asif.png",
  },
  linkedin: {
    profile: "https://www.linkedin.com/in/asifzulfiqar8/",
  },
  github: {
    profile: "https://github.com/asifzulfiqar8",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
