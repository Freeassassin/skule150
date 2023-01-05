import React, { useState, useEffect } from "react";
import "./Navbar.scss";

import { Link, useLocation } from "react-router-dom";
import { pages } from "../../utils/pages";
import SKULE150Logo from "../../assests/images/Skule150Logo.png";

const Navbar = () => {
  return (
    <>
      <div className="navbar-desktop desktop-only">
        <NavbarDesktop />
      </div>
    </>
  );
};

const NavbarDesktop = () => {
  const { pathname } = useLocation();
  const [transparent, setTransparent] = useState(false);

  useEffect(() => {
    let check = false;
    pages.main.forEach((page) => {
      if (pathname === page.path && page.transparentNavbar === true) {
        check = true;
      }
    });
    if (check) {
      setTransparent(check);
    } else {
      setTransparent(check);
    }
  }, [pathname]);

  return (
    <>
      <div
        className="navbar-container"
        style={transparent ? { background: "none", position: "absolute" } : {}}
      >
        <div className="navbar-logo">
          <Link to={"/"} key={"home"}>
            <img
              className="icon-logo"
              src={SKULE150Logo}
              alt="skule150 logo"
            ></img>
          </Link>
        </div>
        <div className="navbar-main">
          {/* MAIN PAGES - Home, About, FAQ */}
          {pages.main.map((page) => {
            return (
              <Link
                to={pathname === page.path ? {} : page.path}
                key={page.path}
                style={pathname === page.path ? { pointerEvents: "none" } : {}}
              >
                <div className="navbar-sub-container" key={page.path}>
                  <div
                    className={
                      pathname === page.path
                        ? "navbar-link-selected"
                        : "navbar-link"
                    }
                  >
                    {page.label}
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
        <div
          className="bottom-line"
          style={transparent ? { visibility: "hidden" } : {}}
        ></div>
      </div>
    </>
  );
};

export { Navbar, NavbarDesktop };
