import React from "react";
import "./index.css";

const Dropdown = ({ label, options }) => {
  return (
    <div className="dropdown">
      <button
        className="btn dropdown-toggle text-white"
        type="button"
        id="dropdownMenuButton"
        data-mdb-toggle="dropdown"
        aria-expanded="false"
      >
        {label}
      </button>
      <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
        {options?.map((option, id) => (
          <li key={id}>
            <a className="dropdown-item" href="/">
              {option?.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dropdown;
