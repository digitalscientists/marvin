import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { routeCodes } from "constants/routes";
import workAndCoLogoImg from "img/workco-logo.svg";

export default class Menu extends Component {
  componentDidCatch(error, info) {
    // Display fallback UI
    this.setState({ hasError: true });
    // You can also log the error to an error reporting service
    console.error("menu error", error, info);
  }

  render() {
    return (
      <div className="Menu">
        <div className="Menu-logo">
          <a
            href="https://work.co"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="Work & Co website"
          >
            <img src={workAndCoLogoImg} alt="Work & Co logo" />
          </a>
        </div>
        <div className="Menu-links">
          <NavLink
            activeClassName="Menu-link--active"
            className="Menu-link"
            exact
            to={routeCodes.DASHBOARD}
          >
            Home
          </NavLink>
          <NavLink
            activeClassName="Menu-link--active"
            className="Menu-link"
            to={routeCodes.PEOPLE}
          >
            API data example
          </NavLink>
          <NavLink
            activeClassName="Menu-link--active"
            className="Menu-link"
            to="/404"
          >
            404
          </NavLink>
        </div>
      </div>
    );
  }
}
