export const bio = [
  "Greetings! I'm David Miller, an experienced Unreal Developer with a proven ability in python, shader development, and third party plugin forking.",
  "I am passionate about using my technical skills to drive impactful contributions in challenging projects.",
  "Thanks for visiting!",
];

export const skills = [
  {
    title: "GameDev",
    skillName: "C++",
    color: "1",
    percentage: "60",
  },
  {
    title: "Scripting",
    skillName: "Python",
    color: "6",
    percentage: "75",
  },
  {
    title: "Design",
    skillName: "Unreal Blueprints, Shader Dev",
    color: "4",
    percentage: "90",
  },
  {
    title: "Version Control",
    skillName: "GitHub, Perforce, JIRA",
    color: "7",
    percentage: "85",
  },
  {
    title: "Tools",
    skillName: "PyCharm, Visual Studio",
    color: "3",
    percentage: "80",
  },
//   {
//     title: "Analytics",
//     skillName: "CleverTap, Countly",
//     color: "5",
//     percentage: "50",
//   },
//   {
//     title: "IDE",
//     skillName: "VS Code",
//     color: "6",
//     percentage: "70",
//   },
];

export const projects = {
  webProjects: [],
  softwareProjects: [
    {
      projectName: "Pizza Ordering ChatBot",
      image: "images/pizzaorderchatbot.png",
      summary:
        "ChatBot using Dialogflow, Firebase database which stores the chat data in the realtime database.",
      preview: "https://github.com/vinaysomawat/Pizza-Ordering-ChatBot",
      techStack: ["Dailogflow", "Firebase"],
    },
    {
      projectName: "WhatsApp-Bot",
      image: "images/whatsappbot.jpg",
      summary:
        "Python script which helps to send messages to WhatsApp contacts automatically using selenium and web automation.",
      preview: "https://github.com/vinaysomawat/WhatsApp-Bot",
      techStack: ["Selenium", "Chrome Webdriver", "Python"],
    },
    {
      projectName: "Bill Generator",
      image: "images/billgenerator.png",
      summary:
        "GUI to transfer data to excel sheets and generate bills on the local shops.",
      preview: "https://github.com/vinaysomawat/Bill-Generator",
      techStack: ["Tkinter", "Openxlpy", "Python"],
    },
  ],
  androidProjects: [],
  freelanceProjects: [
    {
      projectName: "SnylloAir.com",
      image: "images/snylloair.png",
      summary:
        "Developed a company website to showcase the purpose, services and products provided by the company to audience.",
      preview: "https://www.snylloair.com/",
      techStack: ["Bootstrap", "JavaScript", "AWS-S3"],
    },
    {
      projectName: "Delivery+",
      image: "images/AM-Logo-.png",
      summary: "Android Application to display website in android devices.",
      preview:
        "https://play.google.com/store/apps/details?id=com.americanmarket.americanmarketandroid",
      techStack: ["Android", "JAVA", "Play Store"],
    },
  ],
};

export const experience = [
  {
    title: "Halon Entertainment (Technical Director)",
    duration: "Febuary 2020 - Present",
    subtitle: "Technical Director",
    details: ["Working in support and escalation team."],
    tags: ["JavaScript", "Angular", "Bootstrap", "Nodejs", "Jenkins"],
    icon: "truck ",
  },
  {
    title: "Halon Entertainment (Technical Artist)",
    duration: "October 2018 - Febuary 2020",
    subtitle: "Technical Artist",
    details: [
      `Implemented microfrontends using the Module Federation Plugin in Angular.
            Rendered components from remote modules/repositories, enabling a modular and scalable architecture`,
      `Upgraded application with a dynamic base URL for flexible operation across multiple regions and verticals, leading to
            recognition with the Biofourmis Bravo award in Q1, 2023.`,
      `Implemented RxState for managing local state in components, resulting in elegant and reactive facades.`,
      `Utilized Twilio-Video for group video call rooms and Countly for Web Analytics.`,
      `Integrated NGXS WebSocket, enhancing state management and replacing legacy service injections.`,
      `Implemented extensive RxJS usage for reactive programming, resulting in efficient data handling, improved state
            management, and enhanced application performance.`,
      `Dramatically optimized load time and performance through code splitting, lazy loading, caching, and preload`,
      `Enhanced video call experience by implementing real-time switching of I/O devices and audio level indicators,
            resulting in reduced audio issues and increased user satisfaction.`,
      `Owned and led successful Angular application upgrades from version 12 to 13 and 14, improving performance
            and enhancing features.`,
    ],
    tags: [
      "JavaScript",
      "Optimization",
    ],
    icon: "heartbeat",
  },
  {
    title: "Novopay Solutions Private Limited",
    duration: "June 2020 - April 2022",
    subtitle: "Software Engineer",
    details: [
      `Implemented AePS Services, including Bio-metric eKYC, Cash Withdrawal, Balance Enquiry, Mini-Statements,
            and Money transfer.`,
      `Implemented QR Code integration for retailer wallet money loading, Clevertap events for user action tracking,
            Freshdesk ticketing, Chatbot services, and Retailer onboarding/admin interfaces.`,
      `Developed retailer QR code system for seamless money loading into wallets, resulting in improved user transactions.`,
      `Achieved 70 percent code coverage of the entire application by writing unit tests for legacy code.`,
    ],
    tags: ["JavaScript", "Angular", "Bootstrap", "Nodejs", "Jenkins"],
    icon: "qrcode",
  },
  {
    title: "ThinkPedia LLP",
    duration: "May 2019 - June 2019",
    subtitle: "SDE Intern",
    details: [
      `Developed a customer web application for social media management, supporting the advertisement domain.`,
    ],
    tags: ["JavaScript", "Angular", "Bootstrap", "Java", "Spring Boot"],
    icon: "group",
  },
];

export const education = [
  {
    title: "B.Tech. in Computer Science and Engineering",
    duration: "2016 - 2020",
    subtitle: "National Institute of Technology, Warangal",
    details: [],
    tags: [
      "Data Structures & Algorithms",
      "Operating Systems",
      "Database Management System",
      "Computer Networks",
      "Compiler Designing",
      "Cloud Computing",
    ],
    icon: "graduation-cap",
  },
  {
    title: "Class 12th in Science and Mathematics",
    duration: "",
    subtitle: "Board of Secondary Education, Rajasthan",
    details: [],
    tags: ["Physics", "Chemistry", "Mathematics"],
    icon: "book",
  },
];

export const footer = [
//   {
//     label: "Dev Profiles",
//     data: [
//       {
//         text: "GitHub",
//         link: "https://github.com/simsaladoo",
//       },
//       {
//         text: "LeetCode",
//         link: "https://leetcode.com/simsaladoo/",
//       },
//     ],
//   },
//   {
//     label: "Resources",
//     data: [
//       {
//         text: "Enable Dark/Light Mode",
//         func: "enableDarkMode()",
//       },
//       {
//         text: "Print this page",
//         func: "window.print()",
//       },
//       {
//         text: "Clone this page",
//         link: "https://github.com/simsaladoo/simsaladoo.github.io",
//       },
//     ],
//   },
  {
    label: "Links",
    data: [
    //   {
    //     text: "Linkedin",
    //     link: "https://www.linkedin.com/in/simsaladoo/",
    //   },
    //   {
    //     text: "Twitter",
    //     link: "https://twitter.com/thesigmakid",
    //   },
      {
        text: "Buy me a coffee",
        link: "https://www.buymeacoffee.com/r194dME8y",
      },
      {
        text: "Github/simsaladoo.github.io",
        link: "https://github.com/simsaladoo/simsaladoo.github.io",
      },
    ],
  },
  {
    label: "copyright-text",
    data: [
      "Made with &hearts; by Simsaladoo.",
      "&copy; No Copyrights. Feel free to use this template.",
    ],
  },
];
