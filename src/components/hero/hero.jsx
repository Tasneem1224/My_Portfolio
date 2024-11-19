import "./hero.css";
import Lottie from "lottie-react";
import Graphicanimation from "../../../public/animation/Graphic.json";

const Hero = () => {
  return (
    <section className="hero flex">
      <div className="lsection">
        <div className="pavatar">
          <img src="./photo.png" className="avatar" alt="" />
        </div>
        <h1 className="title">Graphic Designer</h1>
        <p className="subtitle">
          I am a passionate and creative graphic designer with a keen eye for
          detail . With experience in various design tools and techniques, I
          specialize in creating stunning graphics, branding, logos, and
          promotional materials.
        </p>

        <div className="allicons flex">
          <div className="icon icon-twitter" />
          <div className="icon icon-github" />
          <div className="icon icon-linkedin" />
          <div className="icon icon-behance" />
        </div>
      </div>
      <div className="rsection animation">
        <Lottie animationData={Graphicanimation} />
      </div>
    </section>
  );
};
export default Hero;
