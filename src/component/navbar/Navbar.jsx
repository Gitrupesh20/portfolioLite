
import { useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  const [isActive, setIsActive] = useState("");

  return (
    <div className="navbar">
      <div className="navbar-item">
        <ul>
          <li className={isActive === "Work" ? "active" : ""} onClick={() => { setIsActive("Work") }}>
            <Link to= "/work">Work</Link>
          </li>
          <li className={isActive === "about" ? "active" : ""} onClick={() => { setIsActive("about") }}>
            <Link to = "/about" >About</Link>
          </li>
          <li className={isActive === "game" ? "active" : ""} onClick={() => { setIsActive("game") }}>
           <Link to= "/game">Game</Link>
          </li>
          <li className={isActive === "resume" ? "active" : ""} onClick={() => { setIsActive("resume") }}>
           <Link to= "/resume">resume</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
