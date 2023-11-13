import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";



import { profile, youtube, github, youtube_circle } from "../assets";




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
        //  For faisal_chaudhry@outlook.com 'service_amb9kvp',
        // For faisal_chaudhry@outlook.com 'template_lpwtltr',

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
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl" >
       
    <div className="absolute justify-end right-6 ">
    <img
              src={profile}
              alt="profile"
              className=" w-24 h-24  rounded-full object-cover" 
            />
        </div>
        <h2 className={styles.sectionHeadText}>Contact</h2>
       
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4"> Your Name:</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Enter Name:"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
            />
          </label>

          <label className="flex flex-col">
            <span className="text-white font-medium mb-4"> Your Email:</span>
            <input
              type="text"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Enter Email:"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
            />
          </label>

          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Message:</span>
            <textarea
              rows="7"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Write me a message:"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
            />
          </label>

  <div className="flex items-center justify-between">
  <button
    type="submit"
    className="bg-tertiary py-3 px-9 outline-none w-fit text-white font-bold shadow-2xl shadow-primary rounded-lg"
  >
    {loading ? "Sending..." : "Send"}
  </button>

  <div className="flex items-center space-x-4">
    <a href="https://github.com/FazeNCode" target="_blank" rel="noopener noreferrer">
    <img
      src={github}
      alt="profile"
      className="w-14 h-14 rounded-full object-cover"
    />
    </a>
   

    <img
      src={youtube_circle}
      alt="profile"
      className="w-12 h-12 rounded-full object-cover"
    />
  </div>
</div>



        

        </form>

      </motion.div>
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h=[550px] h-[350px]"
      ></motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
