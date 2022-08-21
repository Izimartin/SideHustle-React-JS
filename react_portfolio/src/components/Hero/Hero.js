/** @jsx jsx */

import { css, jsx } from "@emotion/core";

import Container from "../Global/Container";
import Martins from "../../images/Martins.png"
import Navbar from "../Navbar/Navbar";
import Typist from "react-typist";

const Hero = () => (
  <section className="hero" css={styles}>
    <Navbar />
    <Container>
      <div className="heroContent">
        <div className="heroHeading">
           <div>
            < img src ={Martins} alt ="porfile image"style={{ display: "flex", float: 'right'}} />
            </div>
          <h2>Hello there, </h2>
          <h2>I'm Martins Akhivbareme.</h2>
          <Typist>
            <p>A front-End Web Developer.</p>
            <Typist.Backspace count={26} delay={800} />
            <p>I love creating website's in React.</p>
            <Typist.Backspace count={35} delay={800} />
            <p>Let's create something cool together!</p>
          </Typist>
        </div>

        <div className="heroButtons">
          <a href="#projects">Explore Projects</a>
          <a href="#contact">Contact Me</a>
        </div>
        
         
      </div>
    </Container>
  </section>
);

const styles = css`
  width: 100%;
  min-height: 100vh;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-bottom: 1px solid #ccc;
  background: #1b242f;
  .container {
    .heroContent {
      .heroHeading {
        margin-top:150px;
        postion: relative;
        color: #fff;
        font-size: 2rem;
        line-height: 3.6rem;
        .Typist {
          display: flex;
          align-items: center;
         
        }
      }
    }
    p {
      color: #fff;
      opacity: 0.7;
      font-size: 1.3rem;
    }
    .heroButtons {
      a {
        text-decoration: none;
        background: transparent;
        border: 1px solid #fff;
        color: #fff;
        padding: 12px 20px;
        margin: 20px 20px 0 0;
        border-radius: 4px;
        text-transform: uppercase;
        display: inline-block;
        cursor: pointer;
        outline: none;
        transition: box-shadow 0.4s ease-in-out;
        &:hover {
          box-shadow: 0 8px 16px -6px black;
        }
      }
    }    
      
    }
  }

  @media(min-width: 360px) and (max-width: 510px) {
    min-height: 65vh;
      .container {
      .heroContent {
        .heroHeading {
          color: #fff;
          font-size: 1.4rem;
          line-height: 2.4rem;
          .Typist {
            display: flex;
            align-items: center;
            padding:  10px 0 0 0;
            p{
              font-size: 1rem;
            }
          }
        }
        .heroButtons {
          a {
            padding: 10px 12px;
            font-size: .8rem;
            margin: 10px 6px 0 0;
          }
        }
      }
    }
  }
  @media (max-width: 359px) {
    .container {
      .heroContent {
        .heroHeading {
          color: #fff;
          font-size: 1.2rem;
          line-height: 2rem;
          .Typist {
            display: flex;
            align-items: center;
            padding:  10px 0 0 0;
            p{
              font-size: .9rem;
            }
          }
        }
        .heroButtons {
          padding: 10px 0 0 0;
          display: inline-flex;
          flex-direction: column;
          a {
            text-transform: capitalize;
            padding: 0;
            text-align: center;
            padding: 6px 12px;
            margin: 0;
            font-size: .8rem;
            &:nth-child(2) {
              margin: 10px 0 0 0;
            }
          }
        }
      }
    }
  }
`;

export default Hero;
