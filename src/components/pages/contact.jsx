import { useState } from "react";
import "./contact.css";
import Lottie from "lottie-react";
import { motion } from "framer-motion";
import contactme from "../../../public/animation/contact3.json";
import Done from "../../../public/animation/done.json";

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    setIsSubmitted(true);
    setEmail("");
    setMessage("");
  };

  return (
    <section className="contactme">
      <h1 className="title">
        <span className="icon-envelope"></span>
        Contact me
      </h1>

      <div className="flex">
        <form onSubmit={handleSubmit}>
          {" "}
          <motion.div
            className="flex"
            initial={{ transform: "scale(0)" }}
            animate={{ transform: "scale(0.9)" }}
            transition={{ damping: 5, type: "spring", stiffness: 50 }}
          >
            <label htmlFor="email">Email Address</label>
            <input
              autoComplete="off"
              required
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </motion.div>
          <motion.div
            className="flex"
            initial={{ transform: "scale(0)" }}
            animate={{ transform: "scale(0.9)" }}
            transition={{ damping: 5, type: "spring", stiffness: 50 }}
          >
            <label htmlFor="message">Your message</label>
            <textarea
              required
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </motion.div>
          <motion.button
            initial={{ transform: "scale(0)" }}
            animate={{ transform: "scale(0.9)" }}
            transition={{ damping: 5, type: "spring", stiffness: 50 }}
            className="submit"
          >
            Submit
          </motion.button>
          {isSubmitted && (
            <motion.div
              className="done-animation"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              style={{ display: "flex", alignItems: "center" }}
            >
              <Lottie
                animationData={Done}
                loop={true}
                style={{ width: 100, height: 100 }}
              />
              <span className="donemessage">
                Your message has been sent successfully
              </span>
            </motion.div>
          )}
        </form>

        <motion.div
          initial={{ transform: "scale(0)" }}
          animate={{ transform: "scale(0.9)" }}
          transition={{ damping: 5, type: "spring", stiffness: 50 }}
          className="rsection animation "
        >
          <Lottie animationData={contactme} />
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
