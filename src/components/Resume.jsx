import React from 'react'
import { motion } from 'framer-motion'
import { styles } from '../styles'
import { SectionWrapper } from '../hoc'
import { textVariant, fadeIn } from '../utils/motion'

const Resume = () => {
  const handleDownload = () => {
    // You can replace this with the actual path to your resume file
    const resumeUrl = '/resume.pdf' // Place your resume.pdf in the public folder
    const link = document.createElement('a')
    link.href = resumeUrl
    link.download = 'Faisal_Resume.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My Professional Background</p>
        <h2 className={styles.sectionHeadText}>Resume</h2>
      </motion.div>

      <motion.div
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        <p className="mb-6">
          Download my resume to learn more about my professional experience,
          skills, and qualifications. The resume includes detailed information
          about my work history, technical expertise, and educational background.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 items-start">
          <button
            onClick={handleDownload}
            className="bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary hover:bg-[#1a1a2e] transition-colors duration-200"
          >
            Download Resume (PDF)
          </button>

          <div className="text-sm text-secondary">
            <p>• Linux Administration & Cloud Engineering</p>
            <p>• Web Development (React, JavaScript, Node.js)</p>
            <p>• System Architecture & Performance Optimization</p>
            <p>• DevOps & Containerization (Docker)</p>
          </div>
        </div>

        <div className="mt-8 p-6 bg-black-200 rounded-xl">
          <h3 className="text-white text-xl font-semibold mb-4">Quick Overview</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div>
              <h4 className="text-white font-medium mb-2">Experience</h4>
              <p className="text-secondary">4+ years in Linux Administration</p>
              <p className="text-secondary">2+ years in Web Development</p>
            </div>
            <div>
              <h4 className="text-white font-medium mb-2">Specializations</h4>
              <p className="text-secondary">System Administration</p>
              <p className="text-secondary">Cloud Infrastructure</p>
              <p className="text-secondary">Full-Stack Development</p>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  )
}

export default SectionWrapper(Resume, "resume")
