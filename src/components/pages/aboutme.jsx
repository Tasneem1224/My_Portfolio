import "./aboutme.css";
import Lottie from "lottie-react";

import { motion } from "framer-motion";
import profile from "../../../public/animation/profile2.json";

const About = () => {
  return (
    <section className="about flex">
      <div className="info">
        <div className="pavatar">
          <motion.img
            initial={{ transform: "scale(0)" }}
            animate={{ transform: "scale(1.1)" }}
            transition={{ demping: 6, type: "spring", stiffness: 100 }}
            src="./photo.png"
            className="avatar"
            alt=""
          />
        </div>
        <div className="info0">
          <h2 className="title">Name</h2>
          <p className="subtitle">Tasneem Hossam EL Deen Farouk</p>
          <h2 className="title">Email</h2>
          <p className="subtitle">tasneemhossam@gmail.com</p>
          <h2 className="title">Phone</h2>
          <p className="subtitle">01012367684</p>
          <h2 className="title">Address</h2>
          <p className="subtitle">Menofia.Egypt</p>
          <h2 className="title">Education</h2>
          <p className="subtitle">Faculty of Computers and Information</p>
        </div>
      </div>
      <div className="rsection animation">
        <Lottie animationData={profile} />
      </div>
    </section>
  );
};

export default About;
