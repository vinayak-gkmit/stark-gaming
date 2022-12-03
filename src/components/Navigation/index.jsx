import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { BiHomeAlt, BiSearchAlt } from "react-icons/bi";
import { MdSlowMotionVideo, MdOutlineFactCheck } from "react-icons/md";

import "./index.css";

export default function NavigationBar({navRef}) {
  const [activeIndex, setActiveIndex] = useState("home");
  const [innerWidth, setInnerWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", resize);
  },[]);

  function resize() {
    setInnerWidth(window.innerWidth);
  }

  return (
    <div ref={navRef} className="nav-bar">
      <div className="logo desktop">
        {
          innerWidth>992 ? "Stark Gaming": "SG"
        }
      </div>
      <div className="nav-menu">
        <NavLink to="/" className="nav-link">
          <BiHomeAlt size="1.1em" />
          <span>Home</span>
        </NavLink>
        <NavLink to="browse" className="nav-link">
          <BiSearchAlt />
          <span>Browse</span>
        </NavLink>
        <Link className="nav-link">
          <MdSlowMotionVideo />
          <span>Video</span>
        </Link>
        <Link className="nav-link">
          <MdOutlineFactCheck />
          <span>Compatibility</span>
        </Link>
      </div>
    </div>
  );
}