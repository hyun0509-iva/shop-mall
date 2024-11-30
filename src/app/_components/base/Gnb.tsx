import React from "react";
import style from "./gnbMenu.module.css";

const Gnb = () => {
  return (
    <div className={style.gnbMenu__wrap}>
      <div className={style.logo__wrap}>
        <img src="https://dummyimage.com/120/ffffff/000000" alt="logo" />
      </div>
      <nav className={style.gnbMenu}>
        <ul>
          <li>best</li>
          <li>best</li>
          <li>best</li>
        </ul>
      </nav>
    </div>
  );
};

export default Gnb;
