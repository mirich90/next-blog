import React from "react";
import cl from "classnames";

import SideBar from "../SideBar";
import styles from "./index.module.scss";

const MyGithub = ({ className }) => {
  return (
    <SideBar type="right">
      <div className={cl(className, styles.buyCoffee)}>
        <a
          href="https://github.com/mirich90"
          target="_blank"
          className={styles.buyCoffeeButton}
          rel="noreferrer"
        >
          Мой гитхаб
        </a>
      </div>
    </SideBar>
  );
};

export default MyGithub;
