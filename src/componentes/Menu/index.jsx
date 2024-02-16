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
          <Link className={styles.menuItem} to="/skills">
          Skills
          </Link>
        </li>
        <li>
          <Link className={styles.menuItem} to="/contatos">
          Contatos
          </Link>
          <Link className={styles.menuItem} to="/comentarios">
          Comentários
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
