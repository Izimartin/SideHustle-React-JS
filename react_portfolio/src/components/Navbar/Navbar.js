/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import Container from "../Global/Container";
import { useState } from "react";

const Navbar = () => {
  const navItems = [
    {
      name: "Home",
      href: "#"
    },
    {
      name: "About",
      href: "#about"
    },
    {
      name: "Projects",
      href: "#projects"
    },
    {
      name: "Contact",
      href: "#contact"
    }
  ]
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav css={styles}>
      <Container>
        <div className="navIcon">
          <div className="navBar" isMenuOpen={isMenuOpen} onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <div className="bar1"></div>
            <div className="bar2"></div>
            <div className="bar3"></div>
          </div>
          <ul className={isMenuOpen ? "showNavItems" : "hideNavItems"}>
            {
            navItems.map(item => (
            <li><a href={item.href}>{item.name}</a></li>
            ))}
          </ul>
        </div>
      </Container>
    </nav>
  )
};

const styles = css`
  width: 100%;
  padding: 30px 0;
  position: absolute;
  top: 0;
  .container {
    display: flex;
    justify-content: flex-end;
    .navIcon {
      cursor: pointer;
      .bar1,
      .bar2,
      .bar3 {
        display: none;
        width: 24px;
        height: 3px;
        background-color: #fff;
        margin: 6px 0;
        transition: 0.4s;
      }
      ul {
        display: flex;
        align-items: center;
        li {
          padding: 0 10px;
          list-style: none;
          a {
            text-decoration: none;
            color: #fff;
          }
        }
      }
    }
  }
  @media (max-width: 996px) {
    .container {
      .navIcon {
        width: 100%;
        display: flex;
        flex-direction: row-reverse;
        justify-content: space-between;
        .bar1, 
        .bar2,
        .bar3 {
          display: block;
        }
        ul {
          display: none;
        }
        .hideNavItems {
          display: none;
        }
        .showNavItems {
          display: flex;
          width: 100%;
          justify-content: start;
        }
      }
    }
  }
`;

export default Navbar;
