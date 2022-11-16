import React, { useState, useEffect, useContext } from "react";
import "./Navbar.scss";

import { Link, useLocation, useNavigate } from "react-router-dom";
import { pages } from "../../utils/pages";
import { DarkThemeContext } from "../../utils/ThemeProvider";

import SKULE150Logo from "../../assests/images/Skule150Logo.png";

const Navbar = () => {
  const { DarkTheme, setDarkThemeStatus } = useContext(DarkThemeContext);

  return (
    <>
      <div className="navbar-desktop">
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
    pages.main.map((page) => {
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
        style={transparent ? { background: "none" } : {}}
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
