import React from "react";
import cl from "classnames";

import ScreenEgg from "../ScreenEgg";
import styles from "./index.module.scss";

const BuyMeCoffee = ({ className }) => {
  return (
    <ScreenEgg type="right">
      <div className={cl(className, styles.buyCoffee)}>
        <a
          href="https://buy.stripe.com"
          target="_blank"
          className={styles.buyCoffeeButton}
          rel="noreferrer"
        >
          Buy my coffee...
        </a>
      </div>
    </ScreenEgg>
  );
};

export default BuyMeCoffee;
