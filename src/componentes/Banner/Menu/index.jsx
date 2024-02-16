import { Link } from "react-router-dom";
import React from "react";
import styles from "./Menu.module.css";

const Menu = () => {
  return (
    <nav>
      <ul className={styles.menu}>
        <li>
          <Link className={styles.menuItem} to="/">
          Sobre mim
          </Link>
        </li>
        <li>
          <Link className={styles.menuItem} to="/formulario">
          Skills
          </Link>
        </li>
        <li>
          <Link className={styles.menuItem} to="/sobre">
          Contatos
          </Link>
          <Link className={styles.menuItem} to="/sobre">
          Comentários
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
