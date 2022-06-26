import React from 'react'
import s from './Learn.module.sass'

export default function Learn({data}) {
  return (
    <div className={s.main}>
        <div className={s.circle}>{data.id}</div>
        <p className={s.descroption}>{data.description}</p>
    </div>
  )
}
