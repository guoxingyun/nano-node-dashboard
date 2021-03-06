import React from "react";
import ReactSVG from "react-svg";
import { NavLink } from "react-router-dom";

import "./Navigation.css";
import Logo from "./images/logo.svg";
import PriceTicker from "./partials/PriceTicker";
import injectClient from "../lib/ClientComponent";

const Navigation = ({ config }) => {
  const explorerActive = (match, location) => {
    return location.pathname === "/" || /^\/explorer\//.test(location.pathname);
  };

  return (
    <div id="Navigation" className="row align-items-center">
      <div className="col-auto my-3">
        <div className="LogoWrap">
          <ReactSVG path={Logo} className="Logo" /> Node Dashboard
        </div>
      </div>

      <div className="col-md">
        <ul className="NavigationList nav ml-2">
          <li className="nav-item">
            <NavLink
              to="/"
              className="nav-link"
              activeClassName="active"
              isActive={explorerActive}
            >
              Explorer
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              exact
              to="/network"
              className="nav-link"
              activeClassName="active"
            >
              Network Status
            </NavLink>
          </li>
          {config.features.nodeStatus && (
            <li className="nav-item">
              <NavLink
                exact
                to="/status"
                className="nav-link"
                activeClassName="active"
              >
                Node Status
              </NavLink>
            </li>
          )}
        </ul>
      </div>

      <div className="col col-auto d-none d-lg-flex">
        <PriceTicker />
      </div>
    </div>
  );
};

export default injectClient(Navigation);
