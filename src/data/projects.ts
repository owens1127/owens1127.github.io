import { ProjectData } from "@/types";

export const projects: ProjectData[] = [
  {
    title: "RaidHub",
    description:
      "RaidHub is a showcase of my expertise across full-stack web development. It demonstrates my knowledge across the tech stack: front end, backend, cloud, continuous integration, and much more. As the primary developer on the team, I played a pivotal role in bringing RaidHub to life and maintaining the application.\n\nThe site is a centralized platform designed for the Destiny 2 gaming community, providing advanced in-game statistics, leaderboards for World First races, custom achievements, and more.\n\nThe cornerstone of the site is a robust REST API. This API connects to our highly optimized PostgreSQL database, managing over 600GB of connected records, including over 300 unique raid summaries and 20 million players. The scale of this database presents a massive technical hurdle, one we are proud to surpass.\n\nOur microservices written in Go form a solid infrastructure. Notably, our web crawler efficiently sends out over 250 web requests per second at peak times, updating the database with live records. This ensures players receive real-time updates on live activities, creating a dynamic and engaging user experience.\n\nA message queue system built on RabbitMQ handles many post-processing tasks such as insertion into Clickhouse and fetching incomplete data.\n\nOn the front end, battled-tested TypeScript config serves as the bedrock for code reliability and early bug detection through well-defined linters and code formatters. We harness the power of Next.js through both server-side rendering and static generation in conjunction with Vercel's CDN to deliver fully hydrated pages from the edge, all optimized for SEO. The integration of tRPC streamlines communication between the front end and our serverless backend-for-the-frontend, resulting in type-safe data retrieval, input sanitization/validation, and a seamless developer experience. Additionally, industry standard tools such as react-query efficiently manage data caching mechanisms and optimizes performance for client-side data fetching, ensuring quick load times and enabling optimistic updates.",
    url: "https://raidhub.io/",
    repository: "https://github.com/raid-hub",
    image: "/raidhub.png",
    tech: [
      "Go",
      "RabbitMQ",
      "Postgres",
      "Clickhouse",
      "Cloudflare",
      "TypeScript",
      "Express.js",
      "Grafana",
      "GitHub Actions",
      "Next.js",
      "React",
      "tRPC",
      "Prisma",
      "AWS S3",
      "Vercel",
    ],
  },
  {
    title: "Sydney Housing Market Model",
    description:
      "This tool assists Sydney renters by predicting average market rental prices and identifying agents offering properties above or below the market rate, helping users make informed decisions amid rising inflation. The project was created as part of my study abroad in Sydney in July 2024. Our model was built with Python scripts utiziling pandas to clean and configure the data, before being created through AWS Sagemaker. We used the Chalice framework to deploy a static page to AWS lambda. The final model posts an RMSE of $160, which isfairly accurate. The project was a great learning experience, allowing me to explore the world of data science and machine learning, and apply my skills to a real-world problem.",
    repository: "https://github.com/CS4992-AI-ML/open-house",
    image: "/sydney.png",
    tech: [
      "Python",
      "Jupyter Notebook",
      "Pandas",
      "AWS Sagemaker",
      "AWS S3",
      "AWS Lambda",
      "Chalice",
    ],
  },
  {
    title: "NU Carpool",
    description:
      "Carpool is a web app developed by Sandbox for Northeastern students seeking to carpool to their co-ops in the Boston area. As part of the development team, I collaborated on integrating new features using the T3 web stack (Typescript, React, Next.js, tRPC, Prisma.js, TailwindCSS). I played a key role in developing and implementing essential features such as a favoriting system, invitation system, and carpool group management using Prisma.js + MySQL. Additionally, I contributed to the intuitive user interface, allowing users to easily favorite others, join carpool groups, and manage their profiles. Lastly, I worked towards delivering the final product to our client, MentorHub at Northeastern, for summer 2023.",
    repository: "https://github.com/sandboxnu/nucarpool",
    url: "https://www.carpoolnu.com/",
    image: "/carpool.png",
    tech: ["Next.js", "NextAuth", "tRPC", "Prisma", "MySQL", "TailwindCSS"],
  },
  {
    title: "Next Bungie Auth",
    description:
      "Next Bungie Auth is a highly configurable and extensible Typescript authentication library that I created to simplify the process of authenticating users with the Bungie.net API. After spinning up numerous projects and implementing auth multiple times, I decided to create a library that would streamline the process. The library uses OAuth 2.0 to authenticate users and store their session data in cookies. It is available for all standard package managers and is designed to be easy to use and integrate with any Next.js application. The library is fully documented and includes examples to help developers get started quickly. It is actively maintained and updated to ensure compatibility with the latest versions of Next.js and the Bungie.net API.",
    url: "https://www.npmjs.com/package/next-bungie-auth",
    repository: "https://github.com/owens1127/next-bungie-auth",
    image: "/next-bungie-auth.png",
    tech: ["TypeScript", "npm", "OAuth", "Cookies", "Next.js"],
  },
  {
    title: "Good Dog Licensing",
    description:
      "Good Dog is a free, Northeastern University run, no-risk platform designed for independent media-makers and musicians. It helps media-makers find great music for their projects while allowing musicians to expand their audience. Artists retain 100% of all copyrights in their music, and the platform uses a carefully developed music license to facilitate collaboration. My team at Sandbox is tasked with rebuilding the website from scratch.",
    repository: "https://github.com/sandboxnu/good-dog-licensing",
    image: "/gdl.png",
    url: "https://good-dog-licensing.vercel.app/",
    tech: ["Next.js", "Postgres", "Sendgrid", "react-email", "Vercel"],
  },
  {
    title: "Bungie.net Core",
    description:
      "The Bungie.net Core project is node npm package that I created. It leverages TypeScript and OpenAPI v3.0 tools to auto-generate TypeScript definitions for the Bungie.net API. These defintions speed up the development process of web applications working with the Bungie.net platform due to strong type safety. The project's main focus is on automating the generation of TypeScript definitions with up-to-date documentation for developers, but I have also created utility functions to access the manifest and manage authentication. Additionally, I optimized the npm package to reduce bundle size and improve overall performance. By incorporating live updates, the project ensures seamless support for new game systems in Destiny 2, enabling developers stay up-to-date with the latest features and functionality.",
    url: "https://www.npmjs.com/package/bungie-net-core",
    repository: "https://github.com/owens1127/bungie-net-core",
    image: "/bungie-net-core.png",
    tech: ["TypeScript", "Babel", "OpenAPI", "Swagger", "npm"],
  },
  {
    title: "Tweeter",
    description:
      "Tweeter is a Twitter bot that I created to generate tweets using OpenAI's GPT-3. The bot uses Puppeteer to scrape tweets from a specified Twitter account and sends them to the OpenAI API to generate a response. The bot then posts the response as a tweet from the specified account. The project is designed to help users generate parody tweets and have a quick laugh. The bot is fully automated and runs on a schedule to generate tweets at regular intervals",
    repository: "https://github.com/owens1127/tweeter",
    tech: ["Pupeeter", "OpenAI", "Twitter API", "cron"],
    image: "/tweeter.png",
  },
  {
    title: "PZC Mobile App",
    description:
      "The Pasty Zaddy Club mobile app is an iOS app prototype created for Pasta Zaddy, a private pasta chef and influencer in the Boston area. It was developed with react native and a firebase backend. The app allows frequent customers to view upcoming events, read magazines, and communicate with the chef.",
    image: "/pzc.png",
    tech: ["React Native", "Firebase"],
  },
  {
    title: "Ada-2",
    description:
      "Ada-2 is a discontinued JavaScript-based Discord bot designed to enhance the gaming experience for players in Destiny 2 by notifying them daily when rare items are sold by in-game vendors. The application was deployed to the cloud using AWS, supporting over 100 guilds and 2000 users daily. I optimized the algorithm to run using a Cron job to efficiently handle over 1000 API requests in less than 5 minutes, in order to efficiently serve a large user base once per day. Additionally, I actively managed operations by prioritizing feature requests and addressing bugs through various public forums.",
    repository: "https://github.com/owens1127/Ada2",
    image: "/ada.png",
    tech: ["Discord.js", "SQLite", "AWS Lambda", "cron"],
  },
  {
    title: "Wooper",
    description:
      "This project helps my friend manage his in-game guild, as he joins a different guild each day of the week. The dashboard allows my friend to log in via OAuth to his main Bungie.net account and a separate account for each day. Account details, including tokens, usernames, and clan names, are securely stored in MongoDB. A nightly cron job automates sending a guild invite using the account for that day, making guild management seamless and efficient for Wauby.",
    url: "https://wooper-omega.vercel.app/",
    repository: "https://github.com/owens1127/wooper",
    image: "/wooper.png",
    tech: ["OAuth", "MongoDB"],
  },
];
