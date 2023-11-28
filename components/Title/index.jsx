import React from "react";
import cl from "classnames";

import styles from "./index.module.scss";

const Title = ({ className, children, type }) => {
  if (type === "small") {
    return (
      <h3 className={cl(className, styles.title, styles.titleSmall)}>
        {children}
      </h3>
    );
  }

  return (
    <h2 className={cl(className, styles.title, styles.titleMedium)}>
      {children}
    </h2>
  );
};

export default Title;
