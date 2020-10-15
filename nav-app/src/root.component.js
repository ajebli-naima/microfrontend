import React from "react";
import { BrowserRouter, Link } from "react-router-dom";
import "./root.component.css";

export default function Root(props) {
  return (
    <BrowserRouter>
      <nav className="nav">
        <Link to="/authentication" className="link">
          Authentication
      </Link>
        <Link to="/edocument" className="link">
          Edocument
      </Link>
        <Link to="/search" className="link">
          Search
      </Link>

      </nav>
    </BrowserRouter>
  );
}
