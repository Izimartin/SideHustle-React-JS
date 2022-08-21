/** @jsx jsx */

import { css, jsx } from "@emotion/core";

import Container from "../Global/Container";
import TechIcon from "./TechIcon";
import css3Icon from "../../images/css3icon.svg";
import githubIcon from "../../images/githubIcon.svg";
import html5Icon from "../../images/html5icon.svg";
import jsIcon from "../../images/jsIcon.svg";
import reactIcon from "../../images/reactIcon.png";
import sassIcon from "../../images/sassIcon.svg";
import tailwindIcon from "../../images/tailwindIcon.svg";
import vscodeIcon from "../../images/vscodeIcon.svg";
import wordpressIcon from "../../images/OIP.png";

// Images









const About = () => {
  return (
    <section className="about" id="about" css={styles}>
      <h2>About Me</h2>
      <Container>
        <div className="aboutMe">
          <p>
            I'm a graudte of Computer Science from the Nigerian Institute of Leather and Science Technology and a front-end Web Developer from Nigeria. I have a passion for creating fast loading, dynamic, and responsive
            websites using the latest technologies available.
          </p>
        </div>
        <div className="techTools">
          <h3>Technologies & Tools that I use</h3>
          <div className="wrapper">
            <TechIcon imgIcon={html5Icon} imgAlt="HTML5" />
            <TechIcon imgIcon={css3Icon} imgAlt="CSS3" />
            <TechIcon imgIcon={sassIcon} imgAlt="SCSS" />
            <TechIcon imgIcon={tailwindIcon} imgAlt="Tailwind" />
            <TechIcon imgIcon={jsIcon} imgAlt="JavaScript" />
            <TechIcon imgIcon={reactIcon} imgAlt="React JS" />
            <TechIcon imgIcon={githubIcon} imgAlt="Github" />
            <TechIcon imgIcon={vscodeIcon} imgAlt="Visual Studio Code" />
            <TechIcon imgIcon={wordpressIcon} imgAlt="WordPress" />
           
          </div>
        </div>
      </Container>
    </section>
  );
};

const styles = css`
  width: 100%;
  padding: 100px 0;
  h2 {
    text-align: center;
    font-size: 3rem;
  }
  .container {
    padding: 60px 0;
    .aboutMe {
      width: 100%;
      max-width: 1100px;
      margin: 0 auto;
      text-align: center;
      p {
        font-size: 1.3rem;
        opacity: 0.8;
      }
    }
    .techTools {
      padding: 40px 0;
      h3 {
        text-align: center;
      }
      .wrapper {
        width: 100%;
        max-width: 800px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 0 auto;
        padding: 40px 0 0 0;
      }
    }
  }

  @media (min-width: 400px) and (max-width: 750px) {
    .container {
      padding: 30px 0 0 0;
      .aboutMe {
        max-width: 600px;
        p {
          font-size: 1.2rem;
          text-align: left;
        }
      }
      .techTools {
        margin: 0 auto;
        .wrapper {
          max-width: 600px;
          flex-wrap: wrap;
        }
      }
    }
  }

  @media (max-width: 359px) {
    h2 {
      font-size: 2rem;
    }
    .container {
      .aboutMe {
        max-width: 600px;
        p {
          font-size: 1rem;
          text-align: left;
        }
      }
      .techTools {
        margin: 0 auto;
        .wrapper {
          max-width: 600px;
          flex-wrap: wrap;
        }
      }
    }
  }
`;

export default About;
