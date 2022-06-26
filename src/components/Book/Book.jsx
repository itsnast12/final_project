import React from 'react'
import s from './Book.module.sass'

export default function Book({data}) {
  return (
    <div className={s.main}>
        
        <div className={s.container}>
            <div className={s.img}>{data.cover}</div>
            <div className={s.text}>
                <p className={s.title}>{data.title}</p>
                <p className={s.price}>{data.price}</p>
                <p className={s.description}>{data.description}</p>
                <div className={s.status}>
                    <div className={s.point}></div>
                    <p>{data.status}</p>
                </div>
            </div>
        </div>
    </div>
  )
}
