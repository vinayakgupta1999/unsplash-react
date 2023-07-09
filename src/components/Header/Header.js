import React, { useState, useEffect, useRef } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEllipsisH,
  faBell,
  faUserCircle,
} from "@fortawesome/free-solid-svg-icons";
import SubmitButton from "../SubmitButton/SubmitButton";

export default function Header() {
  const [openDrawer, toggleDrawer] = useState(false);
  const drawerRef = useRef(null);

  useEffect(() => {
    /* Close the drawer when the user clicks outside of it */
    const closeDrawer = (event) => {
      if (drawerRef.current && drawerRef.current.contains(event.target)) {
        return;
      }

      toggleDrawer(false);
    };

    document.addEventListener("mousedown", closeDrawer);
    return () => document.removeEventListener("mousedown", closeDrawer);
  }, []);

  return (
    <header className="wrapper">
      <nav className="navbar-wrapper">
        <div className="logo">
          <svg
            width="32"
            height="32"
            className="_1Jlgk"
            version="1.1"
            viewBox="0 0 32 32"
            aria-labelledby="unsplash-home"
            aria-hidden="false"
          >
            <title id="unsplash-home">Unsplash Home</title>
            <path d="M10 9V0h12v9H10zm12 5h10v18H0V14h10v9h12v-9z"></path>
          </svg>
        </div>

        <div className="hamburger-button-wrapper" onClick={() => toggleDrawer(true)}>
          <div className="lines"></div>
        </div>

        <ul className={`navbar-items ${openDrawer ? "open" : ""}`} ref={drawerRef}>
          <li className="navbar-item">
            <Link to="/" className="nav-item">
              Brands
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/" className="nav-item">
              Hiring
            </Link>
          </li>
          <li className="navbar-item">
            <FontAwesomeIcon className="nav-icon" icon={faEllipsisH} />
          </li>
          <li className="navbar-item">
            <SubmitButton></SubmitButton>
          </li>
          <li className="navbar-item">
            <FontAwesomeIcon className="nav-icon" icon={faBell} />
          </li>
          <li className="navbar-item">
            <FontAwesomeIcon className="nav-icon nav-icon-lg" icon={faUserCircle} />
          </li>
        </ul>
      </nav>
    </header>
  );
}
