import { Link } from "react-router-dom";
import styles from "./Index.module.scss";
import Navbar from "../ui/Navbar";

export default function Index() {
  return (
    <>
      <Navbar />
      <div className={styles.sectionIndex}>
        <div className={styles.container}>
          <h1>
            Hi, I am <span>Ajdin</span>
          </h1>
          <h2>Full Stack Web Developer</h2>
          <div className={styles.buttonWrapper}>
            <Link
              to="/about"
              className="py-2 px-4  bg-indigo-50 text-indigo-500 rounded-3xl uppercase font-poppins ease-in-out duration-300 hover:-translate-y-2"
            >
              About Me
            </Link>
            <Link
              to="/projects"
              className="py-2 px-4 border border-indigo-50 rounded-3xl  uppercase font-poppins  ease-in-out duration-300 hover:-translate-y-2"
            >
              Projects
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
