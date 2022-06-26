import React from 'react'
import s from './Copy_block.module.sass'
import cup from './cup.png' 

export default function Copy_block() {
  return (
    <div className={s.main}>

        <div className={s.text}>
            <p className={s.header}>Get Book Copy Today!</p>
            <div className={s.line}></div>
            <p className={s.description}>
            We believe that bookstores are essential to a healthy culture. 
            They're where authors can connect with readers.
            </p>
        </div>

        <img src={cup}></img>

    </div>
  )
}
