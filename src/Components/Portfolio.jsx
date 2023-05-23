/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/web-design-desk.jpg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Bachelor's Thesis on Neuroevolution",
    description:
      "Evolution of neural network that controls game AI. Analysis of simulation data and comparison between multiple neuroevolution algorithms.",
    //url: "https://dev.to/azure/10-things-to-know-about-azure-static-web-apps-3n4i",
  },
  {
    title: "This Portfolio Site",
    description:
      "Created with github codespaces portfolio template. Uses React.js. for single page application. Deployed on Azure Static Web Apps.",
    //url: "https://github.com/microsoft/workshop-library/tree/main/full/build-resume-website",
  },
  {
    title: "Java Incremental Clicker Game",
    description:
      "Implementation of a game inspired by Cookie Clicker using the libGDX framework. Experience with: Gradle, Git, jPackage",
    //url: "https://github.com/microsoft/web-dev-for-beginners",
  },
  {
    title: "Python Wordle Game",
    description:
      "Introduction to the Python programming language. Implemented using the PyGame framework",
    //url: "https://www.youtube.com/watch?v=c3hHhRME_XI",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div className="animation-container" style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            className="desk-image"
            src={image}
            style={{
              height: "90%",
              width: "100%",
              objectFit: "cover",
              animation: "1s ease-out 0s 1 slideIn",
            }}
            alt={imageAltText}
          />
        </div>
        <div className="container" style={{ display: "flex", flexWrap: "wrap", padding: "20px" }}>
          {projectList.map((project) => (
            <div
              className="box"
              key={project.title}
              style={{
                flexBasis: "calc(50% - 10px)",
                maxWidth: "calc(50% - 10px)",
                padding: "10px",
                boxSizing: "border-box",
              }}
            >
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "400px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
