export const getTechnicalSkills = () => {
  return [
    {
      groupName: "Frontend",
      tools: [
        { name: "React", logoUrl: "./techno/react-logo.png" },
        { name: "JS / TS", logoUrl: "./techno/ts-logo.png" },
        { name: "Material-UI", logoUrl: "./techno/material-ui-logo.svg" },
        { name: "TailwindCss" },
        { name: "Shadcn" },
      ],
    },
    {
      groupName: "Backend",
      tools: [
        { name: "Node.js", logoUrl: "./techno/nodejs-logo.png" },
        { name: "Python", logoUrl: "./techno/python-logo.svg" },
        { name: "SQL / NoSQL" },
      ],
    },
    {
      groupName: "CI / CD",
      tools: [
        {
          name: "Github Workflows",
          logoUrl: "./techno/github-logo.svg",
        },
        {
          name: "Docker",
          logoUrl: "./techno/docker-logo.png",
        },
        {
          name: "Unit Testing",
        },
        { name: "E2E Testing" },
      ],
    },
    {
      groupName: "Cloud",
      tools: [
        {
          name: "GCP",
          logoUrl: "./techno/gcp-logo.webp",
          certification: {
            embed_url: "https://www.credly.com/assets/utilities/embed.js",
            name: "Associate Cloud Engineer",
          },
        },
        { name: "Firebase", logoUrl: "./techno/firebase-logo.png" },
        { name: "Heroku", logoUrl: "./techno/heroku-logo.webp" },
      ],
    },
    {
      groupName: "Tools",
      tools: [
        { name: "VS Code", logoUrl: "./techno/vscode-logo.png" },
        { name: "GPT, Claude AI, Copilot", logoUrl: "./techno/gpt-logo.png" },
        {
          name: "Cypress",
          logoUrl: "./techno/github-logo.svg",
        },
        {
          name: "Playwright",
          logoUrl: "./techno/github-logo.svg",
        },
      ],
    },
    {
      groupName: "Data Visualization / Export",
      description: "I have worked on several projects where i built:",
      tools: [
        { name: "Complex dashboards with advanced filtering" },
        { name: "Interactive graphic charts 📊📈📉" },
        { name: "Exportable reports in multiple formats (PDF, CSV ...)" },
      ],
    },
    {
      groupName: "3D Configurator",
      description: "I can help you build 3D Configurator for your products",
      tools: [],
    },
  ] as TechnicalSkill[];
};

export const getSkills = () => {
  const skills: Skill[] = [
    {
      title: "Full Stack Application",
      description:
        "Experienced in developing end-to-end applications with a focus on creating modular and scalable user interfaces.",
      iconName: "globe",
    },
    {
      title: "Specialized Frontend",
      description:
        "Expert in React with 6+ years of experience building complex, interactive web applications.",
      imageUrl: "./techno/react-logo.svg",
    },
    {
      title: "GCP Certified",
      description:
        "Google Cloud certified, proficient in leveraging cloud technologies for robust and scalable solutions.",
      imageUrl: "./techno/gcp-logo.webp",
    },
    {
      title: "E2E Testing Expert",
      description:
        "Experienced with Cypress and Playwright for end-to-end testing, integrated into CI/CD pipelines for reliable deployments.",
      iconName: "test-tube",
    },
    {
      title: "Code Quality Advocate",
      description:
        "Committed to writing maintainable code that is easy for teams to understand, modify, and extend over time.",
      iconName: "scan-search",
    },
  ];

  return skills;
};
