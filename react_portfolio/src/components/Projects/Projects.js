/** @jsx jsx */

import { css, jsx } from "@emotion/core";

import Container from "../Global/Container";
import EDVTN from "../../images/Edvtn.png";
import Maxitecture from "../../images/Favicon generator.png";
import Project2 from "../../images/Martins Akhivbareme.png";
import ProjectCard from "../Projects/ProjectCard";

const Projects = () => (
  <div css={styles} id="projects">
    <h3>Projects</h3>
    <Container>
      <div className="projectWrapper">
        <ProjectCard
          img={EDVTN}
          cardTitle="Voting App"
          cardDesc="A website for Voting. Learned DOM Javascript from EdwardSpeak"
          techUsed="HTML5, SCSS, JavaScript"
          projectLink="https://esvotingapp.netlify.app/"
          codeLink="https://github.com/Izimartin/Edward-Speak"
        />
        <ProjectCard
          img={Maxitecture}
          cardTitle="Favicon Generator Website"
          cardDesc="Replicate template using HTML5, SCSS, Python and Javascript"
          techUsed="HTML5, SCSS, JavaScript, Python"
          projectLink="https://favicon61.netlify.app/"
          codeLink="https://github.com/zuri-training/Favicon-Gen-Team-61"
        />
        <ProjectCard
          img={Project2}
          cardTitle="Personal Portfolio Website"
          cardDesc="Replicate template and learn responsiveness"
          techUsed="HTML5, CSS, JavaScript"
          projectLink="https://martinsakhivbareme.netlify.app/"
          codeLink="https://github.com/Izimartin/Personal-Portfolio"
        />
      </div>
    </Container>
  </div>
);

const styles = css`
  width: 100%;
  padding: 100px 0;
  background: #1b242f;
  color: #000;
  h3 {
    text-align: center;
    color: #fff;
    font-size: 3rem;
  }
  .container {
    padding: 40px 0 0 0;
    .projectWrapper {
      display: flex;
      justify-content: space-between;
    }
  }
  @media (max-width: 740px) {
    .container {
      .projectWrapper {
        flex-direction: column;
        align-items: center;
      }
    }
  }

  @media (min-width: 741px) and (max-width: 1121px) {
    .container {
      .projectWrapper {
        flex-wrap: wrap;
      }
    }
  }
`;

export default Projects;
