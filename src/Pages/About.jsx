import { Link } from "react-router-dom";
import styles from "./About.module.scss";
import Navbar from "../ui/Navbar";

export function About() {
  return (
    <>
      <Navbar />
      <div className={styles.sectionAbout}>
        <div className={styles.container}>
          <div>
            <div className={styles.headerWrapper}>
              <h2>About me</h2>
              <div>
                <a href="https://github.com/ishowdarkside">
                  <img src="/github-white.svg" />
                </a>

                <a href="https://www.linkedin.com/in/ajdin-omerovi%C4%87-2a5a31219/">
                  <img src="/linkedin-logo-fill.svg" />
                </a>
              </div>
            </div>
            <p>
              👋 Hello there! I'm <span>Ajdin Omerović</span>, a passionate MERN
              stack developer hailing from the beautiful city of Tuzla, Bosnia.
              I find immense joy in creating intricate and sophisticated web
              applications that push the boundaries of what's possible on the
              web.
            </p>

            <p>
              When I'm not diving into lines of code, you can often find me
              immersing myself in the world of music. Whether it's listening to
              various genres,or even playing an instrument, music resonates with
              my soul and fuels my creativity.
            </p>

            <div>
              <span className={styles.techLabel}>
                Here are some technologies I have been working with:
              </span>

              <ul>
                <li>Javascript ES6+</li>
                <li>React</li>
                <li>Node.js</li>
                <li>Express</li>
                <li>MongoDB</li>
                <li>React Query</li>
                <li>Redux</li>
                <li>Tailwind</li>
              </ul>
            </div>

            <div className={styles.buttonWrapper}>
              <Link to="/projects">Projects</Link>
              <a href="mailto:ajdin.work@gmail.com">Contact Me</a>
            </div>
          </div>
          <img src="/me.jpg" className={styles.me} />
        </div>

        <p className={styles.hidden}>
          “I’ve never found it hard to hack most people. If you listen to them,
          watch them, their vulnerabilities are like a neon sign.” ― Mr. Robot
        </p>
      </div>
    </>
  );
}
