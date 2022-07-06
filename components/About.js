import React from "react";
import Image from "next/image"
import sara from "../assets/sara.png"

const About = () => {
    return (
      <div className="about">
        <div className="about-container">
          <div className="content1">
            <h2>
              <span>About</span> me
            </h2>
            <p>
              My name is Sara Peksin and I am student at Faculty of Traffic and
              Communications and full stack web developer. I have been working in
              web development field for almost 3 years but I am also really
              passionate about cyber security.
            </p>
            <div>
              <button>
                <a
                  target="_blank"
                  href="https://dev-sara-peksin-portfolio.pantheonsite.io/"
                >
                  Portfolio
                </a>
              </button>
            </div>
          </div>
          <div className="content2">
            <Image src={sara} />
          </div>
        </div>
      </div>
    );
  };
  
  export default About;