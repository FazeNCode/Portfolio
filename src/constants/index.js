import {
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  threejs,
  cloud,
  linux,
  vmware,
  ANC,
  Agio,
  Sterling,

} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",

  },

  {
    id: "resume",
    title: "Resume",

  },
  {
    id: "projects",
    title: "Projects",

  },


];



const services = [];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
 
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
  {
    name: "Linux",
    icon: linux,
  },
  {
    name: "VMware",
    icon: vmware,
  },
  {
    name: "AWS Cloud",
    icon: cloud,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Active Directory",
    icon: figma, // Placeholder - will be replaced with proper AD icon
  },

];

const experiences = [
  {
    title: "Linux Administrator",
    company_name: "ANC System Solutions",
    icon: ANC,
    iconBg: "#383E56",
    date: "06/2022 - 06/2025",
    points: [
      "Installed, configured, and maintained Linux servers (Ubuntu, RHEL, CentOS) including software packages and updates.",
      "Automated day-to-day server tasks with Ansible playbooks and Ansible Tower, cutting down manual administration.",
      "Oversaw VMware/vSphere virtualization, including provisioning VMs, snapshots, and system recovery.",
      "Configured and maintained Samba, CIFS, and NFS protocols to ensure secure and seamless cross-platform file access.",
      "Troubleshot operating system and application issues, resolving hardware/software problems quickly to minimize downtime.",
      "Performed routine system maintenance, package installations, and patching.",
      "Conducted root cause analysis and diagnostics on Ubuntu, RedHat, and CentOS systems, ensuring uptime and system stability.",
      "Strengthened security with sudosh session logging, enabling detailed auditing and forensic analysis of user terminal activity.",
      "Collaborated on release management and CI/CD workflows using Bitbucket and Ansible Tower for version control, automation workflows, and infrastructure orchestration.",
    ],
  },

  {
    title: "Linux Administrator",
    company_name: "Agio",
    icon: Agio,
    iconBg: "#383E56",
    date: "05/2020 - 05/2022",
    points: [
      "Monitored production and development systems using LogicMonitor and Datadog, identifying performance issues and reducing performance incidents through proactive monitoring.",
      "Performed regular patching, applied kernel upgrades, and implemented security hardening.",
      "Responded to incidents and outages, troubleshooting root cause analysis (RCA) and restoring services under tight SLAs.",
      "Managed VMware/vSphere virtualization, including VM creation, snapshots, capacity planning, VM provisioning, and disaster recovery.",
      "Deployed and maintained Foreman for repository management and provisioning, streamlining updates and version control across environments.",
      "Managed Identity and Access Management (IAM) using Active Directory and Centrify, controlling secure user and group access.",
      "Collaborated on release management and CI/CD workflows using Bitbucket and Ansible Tower for version control, automation workflows, and infrastructure orchestration.",
      "Supported hardware lifecycle management using Dell iDRAC and HP iLO for remote administration and diagnostics.",
    ],
  },

  {
    title: "Technical Service Linux Administrator",
    company_name: "Sterling Brokers Insurance Ltd",
    icon: Sterling,
    iconBg: "#383E56",
    date: "03/2018 - 03/2020",
    points: [
      "Provided technical support for Linux servers and internal systems, assisting with troubleshooting and patching.",
      "Assisted in deploying and maintaining software packages on Linux servers to support daily operations.",
      "Managed Active Directory user accounts and access controls for staff.",
      "Performed basic automation with Bash & Python scripts to streamline repetitive tasks.",
      "Created in-depth documentation for procedures and incident resolutions to support compliance and internal use.",
    ],
  },
];




// const testimonials = [
//   {
//     testimonial:
//       "His hard work and determantion is beyond words, He always manages to come up with unique solutions, with limited time",
//     name: "Ali Zaka",
//     designation: "Manager",
//     company: "TexadaSoftware",
//     image: "https://randomuser.me/api/portraits/women/4.jpg",
//   },
//   {
//     testimonial: "",
//     name: "A",
//     designation: "COO",
//     company: "DEF Corp",
//     image: "h",
//   },
// ];




// const projects = [
//   {
//     name: "DataAnalytics",
//     description: " ",
//     tags: [
//       {
//         name: "react",
//         color: "blue-text-gradient",
//       },
//       {
//         name: "mongodb",
//         color: "green-text-gradient",
//       },
//       {
//         name: "tailwind",
//         color: "pink-text-gradient",
//       },
//     ],
//     //   image: ,
//     source_code_link: "https://github.com/",
//   },
//   {
//     name: "FazeNcode",
//     description: "Blog website containing all of notes / tutorials  ",
//     tags: [
//       {
//         name: "react",
//         color: "blue-text-gradient",
//       },
//       {
//         name: "restapi",
//         color: "green-text-gradient",
//       },
//       {
//         name: "scss",
//         color: "pink-text-gradient",
//       },
//     ],
//     //   image: ,
//     source_code_link: "https://github.com/",
//   },
//   {
//     name: "MiniMape",
//     description: "Web-based card style memory game, inspired by MapleStory ",
//     tags: [
//       {
//         name: "nextjs",
//         color: "blue-text-gradient",
//       },
//       {
//         name: "supabase",
//         color: "green-text-gradient",
//       },
//       {
//         name: "css",
//         color: "pink-text-gradient",
//       },
//     ],
//     //   image: ,
//     source_code_link: "https://github.com/",
//   },
// ];



export { services, technologies, experiences };
