import React from 'react'
import { motion } from 'framer-motion'
import { styles } from '../styles'
import { SectionWrapper } from '../hoc'
import { textVariant, fadeIn } from '../utils/motion'
import { Tilt } from 'react-tilt'

const projects = [
  {
    title: "FazeNAuto.com",
    description: "Comprehensive automotive marketplace platform with advanced search capabilities and real-time inventory management. Features user authentication, responsive design, and modern DevOps deployment.",
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    technologies: ["React", "Next.js", "MongoDB", "AWS", "CSS", "Node.js"],
    status: "Live",
    link: "https://fazenauto.com",
    github: "#",
  },
  // {
  //   title: "WrenchsUp.com",
  //   description: "Automotive service platform connecting vehicle owners with certified mechanics. Includes appointment scheduling, service tracking, payment processing, and admin dashboard.",
  //   image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
  //   technologies: ["React", "Next.js", "MongoDB", "AWS", "CSS", "Node.js"],
  //   status: "Live",
  //   link: "https://wrenchsup.com",
  //   github: "#",
  // },
]

const ProjectCard = ({ project, index }) => (
  <Tilt
    options={{
      max: 10,
      scale: 1.02,
      speed: 450,
    }}
    className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
  >
    <motion.div
      variants={fadeIn("up", "spring", index * 0.5, 0.75)}
      className="w-full"
    >
      <div className="relative w-full h-[230px]">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover rounded-2xl cursor-pointer hover:opacity-80 transition-opacity duration-300"
          onClick={() => window.open(project.link, '_blank')}
          title={`Visit ${project.title}`}
        />
      </div>

      <div className="mt-5">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-white font-bold text-[24px]">{project.title}</h3>
        </div>

        <p className="mt-2 text-secondary text-[14px] leading-[20px]">
          {project.description}
        </p>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {project.technologies.map((tech, techIndex) => (
          <span
            key={`${project.title}-${tech}-${techIndex}`}
            className="text-[12px] bg-black-200 px-2 py-1 rounded text-white"
          >
            #{tech}
          </span>
        ))}
      </div>


    </motion.div>
  </Tilt>
)

const Projects = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Current Work:</p>
        <h2 className={styles.sectionHeadText}>Projects</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Following projects showcase my skills and experience through real-world examples of my work.
          Each project is briefly described with links to code repositories and live demos.
          It reflects my ability to solve complex problems, work with different technologies, and manage projects effectively.
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7 justify-center">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} project={project} index={index} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(Projects, "projects")
