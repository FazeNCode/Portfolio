import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";
import { Linuxs} from "./canvas";

// import {Reacts} from './canvas';

const ServiceCard = ({ index, title, icon }) => {
  return (
    // tilt component coming from react titlt
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.8 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[30px] shadow-card"
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-tertiary rounded-[2px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt={title} className="w-28 h-28 object-contain" />
          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <motion.div>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>About</h2>
      </motion.div>

      {/* Parameters 1st:Direction 2nd:Type 3rd:Delay 4th:Duration*/}
      <motion.p
        variants={fadeIn("", "", 0.1, 2)}
        // leading will add space between the specified between sentences
        className="mt-2 text-secondary text-[21px] max-w-3xl leading-[30px]"
      >
        <Linuxs />
        Experienced Linux administrator proficient in managing and maintaining
        Linux-based computer systems, ensuring stability, security, and
        efficiency. Skilled in installation, configuration, monitoring, and
        maintenance of Linux operating systems, such as Redhat | Centos |
        Ubuntu. Expertise in user and access management, network services
        administration, troubleshooting, and problem resolution. Strong
        knowledge of security measures, compliance standards, and documentation.
        Proficient in automation and scripting for streamlined system
        management. Adept at collaborating with teams and generating reports.
        <br/>
        <br/>
        Self-taught Web Developer proficient in HTML, CSS,
        JavaScript, and various web development frameworks. such as, React |
        Tailwindcss | Nodejs. <br/> Experienced in responsive design, cross-browser
        compatibility, and optimizing website performance.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10 ">
        {/* loop over the services, get each indivdual service  */}
        {services.map((service, index) => (
          // for each service, render a custom ServiceCard
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

// wrapping "About" component export with the Higher order component
//
export default SectionWrapper(About, "about");
