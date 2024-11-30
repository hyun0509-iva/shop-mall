import React from "react";
import common_style from "../common/common.module.css"
import style from "./main.module.css";

const Main = () => {
  return <div className={style.main__wrap}>
    
    <div className={style.visual}>
      visual section
    </div>
    <div className={common_style.container}>
      <section>1</section>
      <section>2</section>
      <section>3</section>
    </div>
  </div>;
};

export default Main;
