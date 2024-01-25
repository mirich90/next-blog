import React from "react";
import cl from "classnames";

import styles from "./index.module.scss";

const SideBar = ({ className, type, children }) => {
  return (
    <div
      className={cl(
        className,
        styles.sideBar,
        type === "right" ? styles.sideBarRight : styles.sideBarLeft
      )}
    >
      {children}
    </div>
  );
};

export default SideBar;
