/**
 * About component
 *
 * Space for you to describe more about yourself.
 */

import React from "react";

/**
 * About background image
 *
 * Below is a sample image. Upload the image of your choice into the "images"
 * directory and import here for use. Then, set imageAltText to string that 
 * represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a image you
 * freely use on your site.
 */
import image from "../images/motion-background.jpg";

const imageAltText = "purple and blue abstract background";

/**
 * Sort description that expands on your title on the Home component.
 */
const description =
  "I'm currently studying B.Sc. Internet Computing at the University of Passau. Currently learning more about Cloud Computing and Machine Learning.";

/**
 * List of some of skills or technologies you work on, are learning,
 * passionate about, or enjoy,
 */
const skillsList = [
  "Neural Networks",
  "Cloud Computing",
  "Evolutionary Algorithms",
  "Java and Python",
  "Vue.js and React.js",
  "Game Development",
];

/**
 * Use this to give more information about what you are passionate about,
 * how you best work, or even a quote. This will help someone learn more
 * about you on a professional level.
 */
const detailOrQuote =
  "I am excited to learn new technologies, especially when they provide good future prospects. I am a fast learner and always looking for new challenges.";

const About = () => {
  return (
    <section className="padding" id="about">
      <img className="background" src={image} alt={imageAltText} />
      <div
        style={{
          backgroundColor: "white",
          width: "50%",
          padding: "4rem",
          margin: "3rem auto",
          textAlign: "center",
        }}
      >
        <h2>About Myself</h2>
        <p className="large">{description}</p>
        <hr />
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            margin: "2rem 2rem",
            fontSize: "1.25rem",
            textAlign: "left",
          }}
        >
          {skillsList.map((skill) => (
            <div
              key={skill}
              style={{
                flexBasis: "50%",
                padding: "0.5rem",
                boxSizing: "border-box",
              }}
            >
              {skill}
            </div>
          ))}
        </div>
        <hr />
        <p style={{ padding: "1rem 3rem 0" }}>{detailOrQuote}</p>
      </div>
    </section>
  );
};

export default About;
