import React from "react";

//stateless functional component

const Navbar = ({ totalCounters }) => {
  return (
    <React.Fragment>
      <nav className="navbar navbar-light bg-light ">
        <div className="badg badge-pill badge-secondary">{totalCounters}</div>
      </nav>
    </React.Fragment>
  );
};

export default Navbar;
