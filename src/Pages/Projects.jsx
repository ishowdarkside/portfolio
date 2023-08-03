/* eslint-disable react/prop-types */
import styles from "./Projects.module.scss";
import Navbar from "../ui/Navbar";

export default function Projects() {
  return (
    <div className={styles.sectionProjects}>
      <Navbar />
      <div className={styles.container}>
        <h1>Projects</h1>
        <Project
          h2="Mojdom"
          h3="Real Estate Web application"
          p=" MOJDOM is a cutting-edge web application designed to
          revolutionize the way real estate transactions are conducted. This
          platform allows users to seamlessly search for, list, and filter real
          estate properties for both buying and renting. With its user-friendly
          interface and advanced features, MOJDOM ensures a hassle-free
          experience for all users involved in the real estate market."
          imgSrc="mojdom1.png"
          websiteURL="https://ajdin-real-estate.onrender.com/"
          githubURL="https://github.com/ishowdarkside/real-estate-fullstack-app"
        />

        <Project
          h2="Banking System Application"
          h3="Full Stack Web Application for making and managing transactions"
          p="BankEasy is an innovative MERN stack web application that aims to simplify and streamline the banking experience for its users. This online banking system provides a secure and user-friendly platform for customers to manage their finances effectively."
          imgSrc="/banking.png"
          websiteURL="https://darksidebanking.onrender.com"
          githubURL="https://github.com/ishowdarkside/bankingMern"
          containerReverse={true}
        />

        <Project
          h2="Social Network Clone"
          h3="Instagram web application clone"
          p='This is a bit older web app i have worked on. This is NOT MERN stack project, but server side renderd application which uses PUG.JS templating engine with node.js express.js for features like authentication, authorization, creating posts. However, I think that concepts I have learned building this project will be "reusable" and will come in handy one i start learning NEXT.js'
          imgSrc="/socialNet.png"
          websiteURL="https://expectopatronum.onrender.com/"
          githubURL="https://github.com/ishowdarkside/expectoPatronum"
        />

        <Project
          h2="Static Website with beutiful UI"
          h3="Static website showcaing my frontend skills"
          p="This project is an exquisite static website that serves as a personal portfolio, highlighting the frontend skills. This visually captivating project is designed to demonstrate my keen eye for aesthetics and expertise in using advanced techniques with the SCSS preprocessor. The website is a seamless blend of creativity, functionality, and user experience, making it an exemplary representation of modern web development."
          imgSrc="/rowling.png"
          websiteURL="https://health-care-rowling.netlify.app/"
          containerReverse={true}
          githubURL="https://github.com/ishowdarkside/css"
        />

        <Project
          h2="Static Website with beutiful UI"
          h3="Static website showcaing my frontend skills"
          p="This project is an exquisite static website that serves as a personal portfolio, highlighting the frontend skills. This visually captivating project is designed to demonstrate my keen eye for aesthetics and expertise in using advanced techniques with the SCSS preprocessor. The website is a seamless blend of creativity, functionality, and user experience, making it an exemplary representation of modern web development."
          imgSrc="/mrt.png"
          websiteURL="https://mrt-web.netlify.app/"
          githubURL="https://github.com/ishowdarkside/landingPage"
        />
      </div>
    </div>
  );
}

function Project({
  h2,
  h3,
  p,
  imgSrc,
  websiteURL,
  githubURL,
  containerReverse,
}) {
  return (
    <div
      className={`${styles.projectWrapper} ${
        containerReverse ? styles.containerReverse : ""
      }`}
    >
      <div className={styles.projectInfo}>
        <h2>{h2}</h2>
        <h3>{h3}</h3>
        <p>{p}</p>
        <div className={styles.ctaWrapper}>
          <a
            className={styles.websiteCTA}
            target="_blank"
            href={websiteURL}
            rel="noreferrer"
          >
            Checkout Website
          </a>
          {githubURL && (
            <a target="_blank" href={githubURL} rel="noreferrer">
              <img src="/github-logo-fill.svg" />
            </a>
          )}
        </div>
      </div>
      <img src={imgSrc} className={styles.img} />
    </div>
  );
}
