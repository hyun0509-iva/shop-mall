import React from "react";
import Gnb from "../base/Gnb";
import TobMemu from "../base/TobMemu";
import common_style from "./common.module.css";
import style from "./header.module.css";

const Header = () => {
  return (
    <header>
      <div className={style.header__wrap}>
        <div className={common_style.container}>
          <TobMemu />
          <Gnb />
        </div>
      </div>
    </header>
  );
};

export default Header;
