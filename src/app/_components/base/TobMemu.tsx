import React from 'react'
import style from './tobMenu.module.css';

function TobMemu() {
  return (
    <div className={style.tobMenu__wrap}>
      <ul>
        <li>고객센터</li>
        <li>로그인</li>
        <li>회원가입</li>
      </ul>
    </div>
  )
}

export default TobMemu
