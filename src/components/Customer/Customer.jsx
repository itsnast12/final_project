import React from 'react'
import s from './Customer.module.sass'

export default function Customer({data}) {
  return (
        <div className={s.container}>
            <div className={s.img}>{data.cover}</div>
            <p className={s.title}>{data.title}</p>
            <p className={s.description}>{data.description}</p>
        </div>
  )
}
