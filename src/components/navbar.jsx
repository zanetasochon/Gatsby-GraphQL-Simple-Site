import * as React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

import "./navbar.scss";

const Navbar = ({ siteTitle }) => {
  return (
    <nav className="navbar navbar-expand-md">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">
          <StaticImage
            style={{ width: "20rem", height: "10rem", borderRadius: "30%" }}
            src="../images/Site title.jpg"
            quality={100}
            formats={["AUTO", "WEBP"]}
            alt={siteTitle}
          />
        </Link>
      </div>
    </nav>
  );
};

Navbar.propTypes = {
  siteTitle: PropTypes.string,
};

Navbar.defaultProps = {
  siteTitle: ``,
};

export default Navbar;
