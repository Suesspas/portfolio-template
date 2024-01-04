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
  "I'm currently working as a Java Software Engineer at the LDBV after successfully completing my B.Sc. Internet Computing at the University of Passau. Also learning more about Cloud Computing in my spare time by following Microsoft Learn Paths and learning about things in Azure.";

// Splitting the description into an array of words
const words = description.split(" ");
//set integer to the lenght of words
const wordToLink = words.length - 1;

// Creating a new array where the word to be hyperlinked is a JSX link
const descriptionWithLink = words.map((word, index) =>
  index === wordToLink ? (
    <a
      key={index}
      href="https://learn.microsoft.com/api/credentials/share/de-de/PascalS-7486/D55FDFE87A908108?sharingId=37D1D1BA30222D74"
    >
      {word}
    </a>
  ) : (
    <React.Fragment key={index}>{word} </React.Fragment>
  )
);

/**
 * List of some of skills or technologies you work on, are learning,
 * passionate about, or enjoy,
 */
const skillsList = [
  <a key={"bachelorthesis"} href="https://github.com/Suesspas/BachelorThesis">
    "Neural Networks & Evolutonary Algorithms"
  </a>,
  <a key={"kubernetesappliedskills"} href="https://github.com/Suesspas/BachelorThesis">
    "Azure & Kubernetes"
  </a>,
  <a key={"skittleclicker"} href="https://github.com/Suesspas/SkittleClicker">
    "Game Development in Java (and Python)"
  </a>,
  <a key={"ldbv"} href="https://www.linkedin.com/in/pascal-suess/">
    "Developing Microservices during work"
  </a>,
];

/**
 * Use this to give more information about what you are passionate about,
 * how you best work, or even a quote. This will help someone learn more
 * about you on a professional level.
 */
const detailOrQuote =
  "I am always excited to learn new technologies, especially those that hold great potential for the future. ";

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
        <p className="large">{descriptionWithLink}</p>
        <hr />
        <h3>Experiences With</h3>
        <div
          className="skills-list"
          style={{
            display: "flex",
            flexWrap: "wrap",
            margin: "2rem 2rem",
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
        <p className="quote" style={{ padding: "1rem 3rem 0" }}>
          {detailOrQuote}
        </p>
      </div>
    </section>
  );
};

export default About;
