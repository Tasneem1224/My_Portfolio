import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Lottie from "lottie-react";
import Like from "../../../public/animation/like.json";
import "./projects.css";
import allDesignsData from "./alldesigns";
import socialMediaData from "./socialmedia";
import logosData from "./logos";
import printingData from "./printing";

const Projects = () => {
  const [activeContent, setActiveContent] = useState("All Designs");
  const [fullScreenImg, setFullScreenImg] = useState(null);
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState({});
  const [likes, setLikes] = useState({});

  /************************************************************************************************************* */

  useEffect(() => {
    const savedLikes = localStorage.getItem("likes");
    if (savedLikes) {
      setLikes(JSON.parse(savedLikes));
    }

    const savedComments = localStorage.getItem("comments");
    if (savedComments) {
      setComments(JSON.parse(savedComments));
    }
  }, []);

  const handleImageClick = (imgSrc) => {
    setFullScreenImg(imgSrc);
  };

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const handleSendComment = () => {
    if (comment && fullScreenImg) {
      const newComments = {
        ...comments,
        [fullScreenImg]: [...(comments[fullScreenImg] || []), comment],
      };
      setComments(newComments);
      localStorage.setItem("comments", JSON.stringify(newComments));
      setComment("");
    }
  };

  const handleDeleteComment = (imgSrc, index) => {
    const updatedComments = {
      ...comments,
      [imgSrc]: comments[imgSrc].filter((_, i) => i !== index),
    };
    setComments(updatedComments);
    localStorage.setItem("comments", JSON.stringify(updatedComments));
  };

  const handleLike = (id) => {
    const currentLikes = likes[activeContent] || {};
    const newLikes = {
      ...currentLikes,
      [id]: !currentLikes[id],
    };
    setLikes((prevLikes) => ({
      ...prevLikes,
      [activeContent]: newLikes,
    }));
    localStorage.setItem(
      "likes",
      JSON.stringify({ ...likes, [activeContent]: newLikes })
    );
  };

  const getDataForActiveContent = () => {
    switch (activeContent) {
      case "All Designs":
        return allDesignsData;
      case "Social Media":
        return socialMediaData;
      case "Logos":
        return logosData;
      case "Printing":
        return printingData;
      default:
        return [];
    }
  };
  /*///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/

  return (
    <main className="flex">
      <section className="flex lsection">
        <button
          className={activeContent === "All Designs" ? "active" : ""}
          onClick={() => setActiveContent("All Designs")}
        >
          All Designs
        </button>
        <button
          className={activeContent === "Social Media" ? "active" : ""}
          onClick={() => setActiveContent("Social Media")}
        >
          Social Media
        </button>
        <button
          className={activeContent === "Logos" ? "active" : ""}
          onClick={() => setActiveContent("Logos")}
        >
          Logos
        </button>
        <button
          className={activeContent === "Printing" ? "active" : ""}
          onClick={() => setActiveContent("Printing")}
        >
          Printing
        </button>
      </section>

      {/********************************************************************************************************** */}

      <section className="flex rsection">
        <AnimatePresence>
          {getDataForActiveContent().map((card) => (
            <motion.article
              layout
              initial={{ transform: "scale(0)" }}
              animate={{ transform: "scale(1)" }}
              transition={{ type: "spring", damping: 8, stiffness: 50 }}
              className="card"
              key={card.id}
              onClick={() => handleImageClick(card.imgSrc)}
            >
              <img src={card.imgSrc} loading="lazy" alt={card.title} />
              <div className="box">
                <h1 className="title">{card.title}</h1>
                <p className="subtitle">{card.description}</p>

                <button
                  className="likebtn"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleLike(card.id);
                  }}
                >
                  {likes[activeContent]?.[card.id] ? (
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <Lottie
                        animationData={Like}
                        loop={true}
                        style={{ width: 50, height: 50 }}
                      />
                      Liked
                    </div>
                  ) : (
                    "Like"
                  )}
                </button>
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </section>

      {/****************************************************************************************************************** */}

      {fullScreenImg && (
        <div className="fullscreen">
          <div className="commentsection">
            <div className="commentslist">
              {(comments[fullScreenImg] || []).map((comm, index) => (
                <p className="comment" key={index}>
                  <hr />
                  Comment {index + 1} <br />
                  {comm}
                  <br />
                  <button
                    className="deletecomment"
                    onClick={() => handleDeleteComment(fullScreenImg, index)}
                  >
                    Delete
                  </button>
                </p>
              ))}
            </div>

            <textarea
              placeholder="Add comment"
              value={comment}
              onChange={handleCommentChange}
            />

            <button className="addcomment" onClick={handleSendComment}>
              Send Comment
            </button>
          </div>

          <img
            src={fullScreenImg}
            alt="Full Screen"
            className="fullscreen-img"
          />

          <button
            className="icon-close"
            onClick={() => setFullScreenImg(null)}
          />
        </div>
      )}
    </main>
  );
};

export default Projects;
