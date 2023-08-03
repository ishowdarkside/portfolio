import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.scss";
import { RiMenu5Line } from "react-icons/ri";
import { IoClose } from "react-icons/io5";
import { useState } from "react";
export default function Navbar() {
  const [isActive, setIsActive] = useState(false);
  return (
    <nav className={styles.nav}>
      <div className={styles.container}>
        <span>AJDIN</span>

        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
            <div className={styles.decoration}></div>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
            <div className={styles.decoration}></div>
          </li>
          <li>
            <NavLink to="/projects">Projects</NavLink>
            <div className={styles.decoration}></div>
          </li>
          <li>
            <a href="mailto:ajdin.work@gmail.com">Contact</a>
            <div className={styles.decoration}></div>
          </li>
        </ul>

        <button
          className={styles.navBtn}
          onClick={() => setIsActive((curr) => !curr)}
        >
          <RiMenu5Line />
        </button>

        {isActive && <MobileNav setIsActive={setIsActive} />}
      </div>
    </nav>
  );
}

// eslint-disable-next-line react/prop-types
function MobileNav({ setIsActive }) {
  return (
    <div className={styles.mobileNav}>
      <button className={styles.closeNav} onClick={() => setIsActive(false)}>
        <IoClose />
      </button>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About me</NavLink>
      <NavLink to="/projects">Projects</NavLink>
      <a href="mailto:ajdin.work@gmail.com">Contact</a>
    </div>
  );
}
