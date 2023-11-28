import React from "react";
import cl from "classnames";

import styles from "./index.module.scss";

const Cover = ({ className, title }) => {
  return (
    <div className={cl(className, styles.cover)}>
      <h1
        className={cl(className, styles.coverTitle)}
        dangerouslySetInnerHTML={{ __html: title }}
      ></h1>
    </div>
  );
};

export default Cover;
