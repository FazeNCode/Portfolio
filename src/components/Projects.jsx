import React from 'react'
import { motion } from 'framer-motion'
import { styles } from '../styles'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import { SectionWrapper } from '../hoc'
import { textVariant } from '../utils/motion'

const projects = [
  {
    title: "FazeNAuto.com",
    company_name: "Automotive Marketplace Platform",
    icon: '', // Will use a placeholder or project icon
    iconBg: "#383E56",
    date: "2024 - Present",
    points: [
      "Developed a comprehensive automotive marketplace platform with advanced search capabilities and real-time inventory management.",
      "Implemented user authentication system with secure login/registration and user profile management.",
      "Built responsive frontend using React.js with modern UI/UX design principles and mobile-first approach.",
      "Created RESTful API backend with Node.js and Express.js for efficient data handling and business logic.",
      "Integrated MongoDB database for scalable data storage and optimized query performance.",
      "Deployed application with modern DevOps practices ensuring high availability and performance.",
    ],
    technologies: ["React", "Node.js", "MongoDB", "Express", "JavaScript", "CSS3"],
    status: "Live",
    link: "https://fazenauto.com",
  },
  {
    title: "WrenchsUp.com",
    company_name: "Automotive Service Platform",
    icon: '', // Will use a placeholder or project icon
    iconBg: "#383E56",
    date: "2024 - Present",
    points: [
      "Built comprehensive automotive service platform connecting vehicle owners with certified mechanics.",
      "Developed appointment scheduling system with real-time availability and automated notifications.",
      "Implemented service tracking functionality allowing users to monitor repair progress and history.",
      "Integrated Stripe payment processing for secure transactions and subscription management.",
      "Created admin dashboard for service providers to manage appointments, customers, and business analytics.",
      "Utilized TypeScript for enhanced code reliability and PostgreSQL for robust data management.",
    ],
    technologies: ["React", "TypeScript", "PostgreSQL", "Stripe API", "Node.js", "CSS3"],
    status: "Live",
    link: "https://wrenchsup.com",
  },
]

const ProjectCard = ({ project }) => (
  <VerticalTimelineElement
    contentStyle={{ background: '#1d1836', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid #232631' }}
    date={project.date}
    iconStyle={{ background: project.iconBg }}
    icon={
      <div className='flex justify-center items-center h-full w-full'>
        <img
          src={project.icon || '/api/placeholder/40/40'}
          alt={project.title}
          className="w-[60%] h-[60%] object-contain"
        />
      </div>
    }
  >
    <div>
      <div className="flex justify-between items-start mb-2">
        <div>
          <h3 className="text-white text-[24px] font-bold">{project.title}</h3>
          <p className='text-secondary text-[16px] font-semibold' style={{ margin: 0 }}>
            {project.company_name}
          </p>
        </div>
        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
          project.status === 'Live' ? 'bg-green-500 text-white' : 'bg-yellow-500 text-black'
        }`}>
          {project.status}
        </span>
      </div>
    </div>

    <ul className='mt-5 list-disc ml-5 space-y-2'>
      {project.points.map((point, index) => (
        <li
          key={`project-point-${index}`}
          className='text-white-100 text-[14px] pl-1 tracking-wider'
        >
          {point}
        </li>
      ))}
    </ul>

    <div className="mt-4 flex flex-wrap gap-2">
      {project.technologies.map((tech, index) => (
        <span
          key={`${project.title}-${tech}-${index}`}
          className="text-[12px] bg-tertiary px-2 py-1 rounded text-secondary"
        >
          {tech}
        </span>
      ))}
    </div>

    <div className="mt-4 flex gap-3">
      <button
        onClick={() => window.open(project.link, "_blank")}
        className="bg-tertiary py-2 px-4 rounded-lg outline-none w-fit text-white font-medium text-[14px] shadow-md shadow-primary hover:bg-[#1a1a2e] transition-colors duration-200"
      >
        Visit Live Site
      </button>
    </div>
  </VerticalTimelineElement>
)

const Projects = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Current Work:</p>
        <h2 className={styles.sectionHeadText}>Projects</h2>
      </motion.div>

      <div className='mt-20 flex flex-col'>
        <VerticalTimeline>
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  )
}

export default SectionWrapper(Projects, "projects")
