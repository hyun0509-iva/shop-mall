import React from "react";
import common_style from "./common.module.css";
import style from "./footer.module.css";

const Footer = () => {
  return (
    <footer>
      <div className={common_style.container}>
        <div className={style.container}>footer</div>
      </div>
    </footer>
  );
};

export default Footer;
