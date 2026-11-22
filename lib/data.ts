// Everything you see on the site comes from this file.
// Replace the placeholder text with your own details and the pages update.

import { title } from "process";

export type Social = { label: string; href: string };

export type Project = {
  slug: string;
  title: string;
  year: string;
  description: string; // one or two sentences, shown in lists
  tags: string[];
  featured?: boolean;
  role: string;
  problem: string; // what was wrong or missing
  approach: string; // what you built and why
  result: string; // what changed. Numbers help.
  lesson: string; // what was hard, or what you'd change
  image?: string; // e.g. "/projects/ledger.png" (file goes in /public/projects)
  liveUrl?: string; // adds a "Live site" link
  sourceUrl?: string; // adds a "Source code" link
};

export type ResumeEntry = {
  title: string;
  org: string;
  location?: string;
  period: string;
  points?: string[];
};

export const profile = {
  name: "Cyril Mandin",
  role: "Student and web developer",

  statement: "I build tools that make complicated things feel simple.",
  intro:
    "I'm a student developer who builds with C++, Java, Kotlin, and the web. I learn by building real projects, and I'm working on an Android app right now.",

  email: "cyrilmandin123@gmail.com",
  location: "Davao, Philippines",
  availability: "Open to internships and learning opportunities",

  photo: "/me.jpeg" as string | null,

  socials: [
    { label: "GitHub", href: "https://github.com/J1npachi" },
  ] satisfies Social[],
};

export const now = {
  updated: "November 2026",
  items: [
  { label: "Building", value: "An Android app with Kotlin, Firebase, and Firestore authentication" },
  { label: "Learning", value: "Android Studio and how apps handle user accounts" },
  { label: "Reading", value: "Replace with a book, course, or docs you're reading" },
],
};

export const about = {
  paragraphs: [
    "I'm an Information Technology student at Holy Cross of Davao College. I first studied Computer Systems Servicing in senior high school and earned my NC II from TESDA, so I learned how computers work before I learned how to program them.",
    "Since then I've been building projects to learn: a typing speed test in C++ and Java, a fitness website called FitPacer with HTML and CSS, and a mobile app layout in Figma.",
    "Right now I'm building an Android app with Kotlin, Firebase, and Firestore authentication in Android Studio. I learn best by making something real and fixing what breaks.",
    "I'm looking for chances to learn from a team and build things people can use.",
  ],
  facts: [
    { label: "Based in", value: "Davao City, Philippines", },
    { label: "Studying", value: "BS Information Technology" },
    { label: "Certificate", value: "Computer Systems Servicing NC II" },
    { label: "Works with", value: "C++, Java, Kotlin, HTML, CSS" },
    { label: "Availability", value: "Open to internships and learning opportunities" },
  ],
};

export const projects: Project[] = [
  {
    slug: "speedster-typing-test",
    title: "Speedster Typing Test",
    year: "2025",
    description:
      "A typing speed test written in C++ that measures how fast and how accurately you type.",
    tags: ["C++"],
    featured: true,
    role: "Development",
    problem:
      "I wanted to practice typing and see my progress, and I wanted to learn how to build a real program from scratch.",
    approach:
      "I wrote the typing test in C++. It shows text to type, times the user, and calculates typing speed and accuracy.",
    result:
      "A working program that gives a speed and accuracy score after each test.",
    lesson:
      "I learned how to handle user input, work with timers, and organize a program into small, clear functions.",
  },
  {
    slug: "fitpacer",
    title: "FitPacer",
    year: "2026",
    description:
      "A fitness website that helps people see workouts and plans clearly, built with HTML and CSS.",
    tags: ["HTML", "CSS"],
    featured: true,
    role: "Design and development",
    problem:
      "Many fitness sites are cluttered and hard to use on a phone, which makes it harder to stay consistent.",
    approach:
      "I built FitPacer as a clean, responsive website using HTML and CSS. The layout is simple, so visitors can find what they need quickly on any screen size.",
    result:
      "My first complete website, working on both phone and computer screens.",
    lesson:
      "I learned how much layout and spacing matter, and how to make one page work on different screen sizes.",
  },
  {
    slug: "java-typing-test",
    title: "Java Speed Typing Test",
    year: "2026",
    description:
      "A speed typing test built in Java, made to compare how the same idea works in a different language.",
    tags: ["Java"],
    featured: true,
    role: "Development",
    problem:
      "After building a typing test in C++, I wanted to learn how the same idea looks in Java.",
    approach:
      "I rebuilt the typing test in Java, using object-oriented design to keep the timer, the text, and the scoring in separate parts.",
    result:
      "A working typing test in Java, and a clear comparison between my C++ and Java versions.",
    lesson:
      "I learned the difference between C++ and Java, and how classes and objects make a program easier to grow.",
  },
  {
    slug: "mobile-app-layout",
    title: "Mobile App Layout",
    year: "2026",
    description:
      "A mobile app interface designed in Figma, from the first sketches to connected screens.",
    tags: ["Figma", "UI design"],
    role: "UI design",
    problem:
      "Before writing any code for an app, I wanted to plan how every screen would look and how users would move between them.",
    approach:
      "I designed the app screens in Figma and linked them into a clickable prototype, so the flow can be tested before building.",
    result:
      "A complete set of mobile screens with a working prototype.",
    lesson:
      "Planning the screens first made me realize how much easier coding is when you already know what you're building.",
  },
];


export const resume = {
  summary:
    "Student developer with a Computer Systems Servicing NC II. I build projects in C++, Java, Kotlin, JavaScript, and the web, and I'm currently building an Android app with Firebase.",
  experience: [
    {
      title: "Student Projects",
      org: "Personal and school work",
      period: "2025 – Present",
      points: [
        "Built a typing speed test in C++ that measures speed and accuracy.",
        "Rebuilt the typing test in Java to compare the two languages.",
        "Designed a mobile app layout in Figma and linked the screens into a clickable prototype.",
        "Built FitPacer, a responsive fitness website, using HTML and CSS.",
        "Currently building an Android app with Kotlin, Firebase, and Firestore authentication in Android Studio.",
      ],
    },
    {
        title: "Work Immersion Intern, Computer Systems Servicing",
         org: "Barangay SK HUB",
          period: "2025 (80 hours)",
         points: [
        "Assisted with installing, setting up, and maintaining computers and software.",
         "Helped troubleshoot hardware, software, and network problems.",
        ],


        
    },
  ] satisfies ResumeEntry[],
  education: [
    {
      title: "Bachelor of Science in Information Technology",
      org: "Holy Cross of Davao College",
      location: "Sta. Ana Avenue, Davao City, Philippines",
      period: "2025 – Present",
      points: [
        "Currently pursuing a Bachelor of Science in Information Technology.",
        "Learning programming, web development, and software engineering.",
      ],
    },

     {
    title: "Computer Systems Servicing NC II",
    org: "TESDA (Core Institute of Technology)",
    location: "Davao City, Philippines",
    period: "2025",
    points: ["Earned Computer Systems Servicing NC II (TESDA)."],},
    {
      title: "Senior High School: Computer Systems Servicing NC II",
      org: "F. Bangoy National Senior High School",
      location: "Km.9 Sasa, Davao City, Philippines",
      period: "2023 – 2025",
      points: [
        "Learned computer assembly, OS installation, troubleshooting, and network server administration.",
      ],
    },
    {
      title: "Junior High School",
      org: "F. Bangoy National High School",
      location: "Km.9 Sasa, Davao City, Philippines",
      period: "2019 – 2023",
      points: [
        "Learned academic subjects and basic computer skills.",
      ],
    },
    {
      title: "Elementary",
      org: "Doña Asuncion Hizon Elementary School",
      location: "Pampanga, Davao City, Philippines",
      period: "2013 – 2019",
      points: [
        "Learned basic academic subjects and foundational skills.",
      ],
    },
  ] satisfies ResumeEntry[],
  skills: [
    { group: "Languages", items: ["C++", "Java", "Kotlin", "HTML", "CSS", "JavaScript", "SQL"] },
    { group: "Tools", items: ["Android Studio", "VS Code", "Firebase", "Firestore", "Figma", "Git", "GitHub"] },
    { group: "IT support", items: ["Computer assembly", "OS installation", "Troubleshooting"] },  
  ],
};
