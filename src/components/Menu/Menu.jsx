import React from "react";
import { Link, NavLink } from "react-router-dom";

const Menu = () => {
  return (
    <div>
      <ul>
        <li>
          <NavLink to="/Noticias">Noticias</NavLink>
        </li>
        <li>
          <NavLink to="/Carreras">Carreras</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
