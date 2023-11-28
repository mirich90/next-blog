import React from "react";
import cl from "classnames";

import styles from "./index.module.scss";

const Article = ({ children, className }) => {
  return (
    <article className={cl(className, styles.article)}>{children}</article>
  );
};

export default Article;
