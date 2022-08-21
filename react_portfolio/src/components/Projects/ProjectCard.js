/** @jsx jsx */
import { css, jsx } from "@emotion/core";

const ProjectCard = ({ img, cardTitle, cardDesc, techUsed, projectLink, codeLink }) => (
  <div className="projects" css={styles}>
    <img src={img} />
    <div className="imgInfo">
      <h3>{cardTitle}</h3>
      <p>
        <strong>Description:</strong> {cardDesc}
      </p>
      <div className="techUsed">
        <span>
          <strong>Tech Used:</strong> {techUsed}
        </span>
      </div>
      <div className="viewProjects">
        <a href={projectLink}>
          VIEW PROJECT
        </a>
        <a href={codeLink}>
          VIEW CODE
        </a>
      </div>
    </div>
  </div>
);

const styles = css`
  width: 100%;
  max-width: 450px;
  background: #fff;
  border-radius: 10px;
  img {
    display: block;
    width: 100%;
    border-radius: 10px 10px 0 0;
    height: 300px;
  }
  .imgInfo {
    padding: 10px 0 20px 13px;
    h3 {
      color: #000;
      text-align: left;
      padding: 14px 0;
      font-size: 1.4rem;
    }
    .techUsed {
      padding: 6px 0 0 0;
      span {
        display: block;
        padding: 0 0 20px 0;
      }
    }
    .viewProjects {
      a {
        padding: 10px 20px;
        color: #000;
        border: 1px solid #000;
        text-decoration: none;
        margin: 0 10px 0 0;
        font-size: 0.8rem;
        display: inline-block;
        transition: box-shadow .4s ease-in-out;
        &:hover {
          box-shadow: 0 4px 10px -6px black;
        }
      }
    }
  }
  @media (max-width: 740px) {
    max-width: 470px;
    &:nth-child(2) {
      margin: 30px 0;
    }
  }

  @media (min-width: 741px) and (max-width: 1121px) {
    max-width: 48%;
    &:last-of-type {
      margin: 30px 0 0 0;
    }
    .imgInfo {
      h3{
        font-size: 18px;
      }
      p {
        font-size: 14px;
      }
      .techUsed {
        span {
          font-size: 13px;
        }
      }
    }
  }

  @media (min-width: 1122px) and (max-width: 1575px) {
    max-width: 32%;
    .imgInfo {
      h3{
        font-size: 18px;
      }
    }
  }

  @media (min-width: 741px) and (max-width: 1575px) {
    .imgInfo {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      height: 244px;
      min-height: 244px;
    }
  }

`;

export default ProjectCard;
