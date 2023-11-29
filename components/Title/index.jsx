import React from "react";
import cl from "classnames";

import styles from "./index.module.scss";

const Title = ({ className, children, type }) => {
  if (type === "small") {
    return (
      <h2 className={cl(className, styles.title, styles.titleSmall)}>
        {children}
      </h2>
    );
  }

  return (
    <h1 className={cl(className, styles.title, styles.titleMedium)}>
      {children}
    </h1>
  );
};

export default Title;
