import React from 'react'
import { motion } from 'framer-motion'
import { styles } from '../styles'
import { SectionWrapper } from '../hoc'
import { textVariant, fadeIn } from '../utils/motion'

const Resume = () => {
  const handleDownload = () => {
    const resumeUrl = '/Resume.pdf' // Updated to match the actual file name
    const link = document.createElement('a')
    link.href = resumeUrl
    link.download = 'Faisal_Nadeem_Resume.pdf'
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
        className="mt-4 text-secondary text-[17px] max-w-4xl leading-[30px]"
      >
        <p className="mb-6">
          Linux Administrator with 5+ years of experience managing enterprise-level Linux environments across IT
          services and financial sectors. Skilled in automation (Ansible, Bash, Python), system hardening, and cloud
          infrastructure (AWS, VMware vSphere). Experienced in monitoring with LogicMonitor, Datadog, and
          Foreman, as well as identity and access management with Active Directory and Centrify. Proven track
          record of troubleshooting complex issues, streamlining deployments, and maintaining secure, high-
          availability systems.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 items-start mb-8">
          <button
            onClick={handleDownload}
            className="bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary hover:bg-[#1a1a2e] transition-colors duration-200"
          >
            Download Resume (PDF)
          </button>

          <div className="text-sm text-secondary">
            <p>• Linux Administration & Cloud Engineering</p>
            <p>• System Architecture & Performance Optimization</p>
            <p>• DevOps & Automation (Ansible, Docker, CI/CD)</p>
            <p>• Identity & Access Management</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="p-6 bg-black-200 rounded-xl">
            <h3 className="text-white text-xl font-semibold mb-4">Technical Skills</h3>
            <div className="space-y-3 text-sm">
              <div>
                <h4 className="text-white font-medium mb-1">Operating Systems</h4>
                <p className="text-secondary">Ubuntu, Red Hat Enterprise Linux (RHEL), CentOS</p>
              </div>
              <div>
                <h4 className="text-white font-medium mb-1">Tools & Platforms</h4>
                <p className="text-secondary">Ansible, AWX, Ansible Tower, Git, Bitbucket, Docker, AWS (EC2, S3, Route53), VMware/vSphere, Atlassian/Jira</p>
              </div>
              <div>
                <h4 className="text-white font-medium mb-1">Monitoring & Security</h4>
                <p className="text-secondary">LogicMonitor, Datadog, Foreman, Centrify, sudosh</p>
              </div>
            </div>
          </div>

          <div className="p-6 bg-black-200 rounded-xl">
            <h3 className="text-white text-xl font-semibold mb-4">Experience Overview</h3>
            <div className="space-y-3 text-sm">
              <div>
                <h4 className="text-white font-medium mb-1">Professional Experience</h4>
                <p className="text-secondary">5+ years in Linux Administration</p>
                <p className="text-secondary">Enterprise-level environments</p>
                <p className="text-secondary">IT services and financial sectors</p>
              </div>
              <div>
                <h4 className="text-white font-medium mb-1">Core Competencies</h4>
                <p className="text-secondary">System Administration & Automation</p>
                <p className="text-secondary">Cloud Infrastructure Management</p>
                <p className="text-secondary">Security & Compliance</p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  )
}

export default SectionWrapper(Resume, "resume")
