import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { profile, youtube, github, youtube_circle } from "../assets";
import { Canvas } from "@react-three/fiber";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .send(
        //  For email_chaud@outlook.com 'service_amb9kvp',
        // For email_chaud@outlook.com 'template_lpwtltr',

        "service_kjo0u19",
        "template_1tk6s5o",
        {
          from_name: form.name,
          to_name: "Faisal",
          message: form.message,
        },
        // For faisal_chaudhry@outlook.com '4gm9wXJL6S8BOi5ad'
        "fPObwnyx_kC1knyTz"
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you, your message has been sent");
          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.log(error);
          alert("Oops something didn't work right");
        }
      );
  };

  return (
    <div className="xl::mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <div className=" flex justify-between ">
        <h2 className={styles.sectionHeadText}>Connect</h2>
    
          <img
            src={profile}
            alt="profile"
            className="rounded-full object-cover w-16 h-16 xs:w-20 xs:h-20 transition-all ease-in-out duration-1000"
          />
        </div>

        
       

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-14 flex flex-col gap-8"
        >
          <label className="form-label">
            <span className="form-span"> Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Enter Name"
              className="form-input"
            />
          </label>

          <label className="form-label">
            <span className="form-span"> Your Email:</span>
            <input
              type="text"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Enter Email"
              className="form-input"
            />
          </label>

          <label className="form-label">
            <span className="form-span">Message:</span>
            <textarea
              rows="7"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Write me a message"
              className="form-input"
            />
          </label>

          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-tertiary py-3 px-10 outline-none w-fit text-white font-bold shadow-2xl shadow-primary rounded-lg"
            >
              {loading ? "Sending..." : "Send"}
            </button>

            <div className="flex items-center space-x-2">
              <a
                href="https://github.com/FazeNCode"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={github}
                  alt="profile"
                  className="w-10 h-10 sm:w-14 sm:h-14 rounded-full object-cover"
                />
              </a>

              {/* ! IMPORT A NEW youtube_circle WITH A SMALLER SIZE TO MATCH GITHUB LOGO! */}
              <img
                src={youtube_circle}
                alt="profile"
                className="w-10 h-10 sm:w-14 sm:h-14 rounded-full object-cover"
              />
            </div>
          </div>
        </form>
      </motion.div>
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className=" transform -translate-x-1/2 w-full xl:w-3/6 xl:h-auto  h-[42em]"
      >
 

{/* AN IDEA! CAN BE USED TO TAKE THE USER TO THE TOP OF THE SCREEN FROM THE BOTTOM */}
        <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[60px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop"
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1 "
            />
          </div>
        </a>
      </div>
      
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
