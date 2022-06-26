import React from 'react'
import s from './Resource.module.sass'

export default function Resource({data}) {
  return (
    <div className={s.main}>
        <div className={s.photo}></div>
        <p className={s.text}>{data.text}</p>
        <p className={s.description}>{data.description}</p>
        <p className={s.date}>{data.date}</p>
    </div>
  )
}
