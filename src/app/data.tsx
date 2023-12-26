import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import YouTubeIcon from "@mui/icons-material/YouTube";
// import { FaBehance } from "react-icons/fa";
// import { FaDribbble } from "react-icons/fa";

const projectdata = [
  {
    title: "Monumenta",
    stack: "App Dev | Full Stack Dev | UI/UX",
    description:
      "Monumenta lets you discover a treasure trove of monument details at your fingertips along with providing you with numerous features and sleek UI.",
  },
  {
    title: "Chat It",
    stack: "Full Stack Dev | UI/UX",
    description:
      "A messaging platform where you can initiate conversations with others by simply sharing a link. Letting you connect with the someone seamlessly and securely.",
  },
  {
    title: "Unmask",
    stack: "Full Stack Dev | ML | UI/UX",
    description:
      "A surveillance app for taking input from CCTV and providing various analysis like mask detection, face recognition, crowd detection etc.",
  },
  {
    title: "Line",
    stack: "Full Stack Dev | ML | App Dev",
    description:
      "Line is a road safety app that does behavior tagging, lane detection, distraction detachment to prevent road collisions and inefficient driving.",
  },
  {
    title: "Shuttl",
    stack: "Full Stack Dev | App Dev",
    description:
      "A dedicated shuttle app for our college providing students with real-time location updates, ensuring seamless access to campus infrastructure and promoting efficient transportation within the campus.",
  },
  {
    title: "Supplify",
    stack: "Full Stack Dev",
    description:
      "A blockchain-based supply chain to enhance efficiency by minimizing paperwork, streamlining logistics, and fostering transparency and securing transactions.",
  },
];

const workdata = [
  {
    title: "Full Stack Developer",
    company: "Kommit Techno Legal",
    date: "October 2023 - Present",
    description:
      "Built a full stack digital notarization application. Worked on analysing the system flow and work processes visually and then implementing in the frontend UI and backend APIs for seamless notarization and user experience.",
  },
  {
    title: "Motion Design Freelancer",
    company: "Anicut Capital",
    date: "April 2023 - Jun 2023",
    description:
      "Created diverse promo videos for the website which involved incorporating external clips, extensive color grading. Worked on creating animated GIFs for more appealing look of the website.",
  },
  {
    title: "Design and Motion Design Intern",
    company: "Halara",
    date: "January 2023 - April 2023",
    description:
      "Worked on making of an educational AR/VR/MR comparison video. Analysed promotional content for better blending of creativity and technicality.",
  },
  {
    title: "Chief Advisor",
    company: "Exun Clan",
    date: "August 2018 - August 2022",
    description:
      "Led creative/technical teams at Exun event(22+ events, 2000+ participants each year). Anchored Exun Talks 2022 hosting professionals from all around the world. Taught courses on Design and Motion Design to 100+ people including organisation of Girls in Tech initiative. Won/participated in 20+ hackathons internationally and nationally.",
  },
  {
    title: "Honorary Chief Advisor",
    company: "Aeross",
    date: "August 2018 - August 2022",
    description:
      "Won/Participated in 7+ NASA and NSS competitions. Met External Affairs Minister and Vice President of India. Was part of numerous projects like CubeSAT, HAB etc.",
  },
];

const notesdata = [
  {
    title: "Adding local fonts to NextJS + MUI app",
    date: "25 December 2023",
    description: "Adding custom fonts to NextJS site which uses MUI.",
    hero: "Adding local fonts to NextJS apps is pain when you have MUI because MUI overrides the NextJS defaults with its own. Here is the solution I found out to this issue. First off, place all your fonts in public/fonts (I have used San Francisco font here). Then import next/font in your src/app/layout.tsx and make a const the way shown below. Then use the const(SFText for me) in the className of body tag in app/layout.tsx ",
    code:
      '//layout.tsx \n'+
      'import { ThemeProvider } from "@mui/material";\n'+
      'import localFont from "next/font/local";\n\n' +
      'const SFText = localFont({\n' +
      '  src: "./public/fonts/SF-Pro-Text-Regular.woff",\n' +
      '  variable: "--font-sftext-bold",\n' +
      "});\n\n" +
      "export const metadata: Metadata = {\n" +
      '  title: "Lorem Ipsum",\n' +
      '  description: "Lorem ipsum dolo sit",\n' +
      "};\n" +
      "\n" +
      "export default function RootLayout({\n" +
      "  children,\n" +
      "}: {\n" +
      "  children: React.ReactNode;\n" +
      "}) {\n" +
      "  return (\n" +
      '    <html lang="en">\n' +
      "      <head>\n" +
      "        <title>Lorem Ipsum</title>\n" +
      "      </head>\n" +
      "      <body className={SFText.className}>\n" +
      "        <ThemeProvider theme={theme}>\n" +
      "          {children}\n" +
      "        </ThemeProvider>\n" +
      "      </body>\n" +
      "    </html>\n" +
      "  );\n" +
      "}\n",
    subtext:
      "After this we need to override the defaults of MUI as it uses Roboto etc. Import next/font/local and create the same const(SFText) like we did previously and place it in style.ts(Your custom style theme file). Then use createTheme() and mention a field for typography as shown below. The final step is just placing ThemeProvider around your layout.tsx like shown above.",
    code2:
      "//style.ts \n" +
      'import { createTheme } from "@mui/material";\n' +
      'import localFont from "next/font/local";\n\n' +
      "const SFText = localFont({\n" +
      '  src: "./public/fonts/SF-Pro-Text-Regular.woff",\n' +
      '  variable: "--font-sftext-bold",\n' +
      "});\n\n" +
      "const theme = createTheme({\n" +
      "  typography: { fontFamily: `${SFText}`},\n" +
      "});\n",
    othertext:"Other issues you would face is when you use Buttons and similar stuff it would show some random fonts. You will have to make there font family same as the className that shows up in element. The easiest way to get this is do Ctrl+I and click the element that has your font(SFText) applied to it. Then, under the font family copy it. It would look something like __SFTEXT_CAA964. Now use this as a font family for your button."
  },
];

const photographyimage = [
  {
    img: "/photography/boatman-1.jpg",
  },
  {
    img: "/photography/cat-1.jpg",
  },
  {
    img: "/photography/cat-2.jpg",
  },
  {
    img: "/photography/cat-dustbin1.jpg",
  },
  {
    img: "/photography/couple-1.jpg",
  },
  {
    img: "/photography/dog-looking-back1.jpg",
  },
  {
    img: "/photography/dog.jpg",
  },
  {
    img: "/photography/dragonfly.jpg",
  },
  {
    img: "/photography/lamp.jpg",
  },
  {
    img: "/photography/moon.jpg",
  },
  {
    img: "/photography/nest-11.jpg",
  },
  {
    img: "/photography/sad-dog-2.jpg",
  },
  {
    img: "/photography/sad-dog-3.jpg",
  },
  {
    img: "/photography/thinker1.jpg",
  },
  {
    img: "/photography/uncle-11.jpg",
  },
];

const socialdata = [
  {
    name: GitHubIcon,
    link: "https://github.com/aryamanchandra",
  },
  {
    name: LinkedInIcon,
    link: "https://www.linkedin.com/in/aryamanchandra/",
  },
  {
    name: YouTubeIcon,
    link: "https://www.youtube.com/channel/UCoGX05bLREPTR2s9VTHEbNw",
  },
  {
    name: EmailIcon,
    link: "mailto:aryamanow@gmail.com",
  },
  // {
  //   name: FaDribbble,
  //   link: "https://dribbble.com/aryamanchandra"
  // },
  // {
  //   name: FaBehance,
  //   link: "https://www.behance.net/aryamanchandra"
  // },
];

export { projectdata, workdata, photographyimage, notesdata, socialdata };
