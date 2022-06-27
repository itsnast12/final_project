import React from 'react'
import s from './Titul.module.sass'
import book from './book.png'
import Button from '../UI/Button'

export default function Titul() {
  return (
    <div className={s.titul}>
        <div className={s.text}>
            <div className={s.little}>
                <div className={s.line}></div>
                <p className={s.welcome}>Welcome to Pages!!!</p>
            </div>

            <p className={s.big}>
                Your Books From
            </p>

            <p className={s.big}>
                The Best Writer.
            </p>

           <div className={s.description}>
                <p>
                    We believe that reading books are essential to a healthy culture.
                </p>
                <p>
                    They're where authors can connect with readers.
                </p>
           </div>

           <div className={s.order}>
                <Button>Order Today</Button>
                <p className={s.demo}>
                    Read Free Demo
                </p>
           </div>

           <div className={s.properties}>

                <div className={s.item}>
                    <div className={s.circle}></div>
                    <div>
                        <p className={s.name}>Pages:</p>
                        <p className={s.decoding}>250 Pages</p>
                    </div>
                </div>

                <div className={s.item}>
                    <div className={s.circle}></div>
                    <div>
                        <p className={s.name}>Length:</p>
                        <p className={s.decoding}>10 Hours</p>
                    </div>
                </div>

                <div className={s.item}>
                    <div className={s.circle}></div>
                    <div>
                        <p className={s.name}>Rating:</p>
                        <p className={s.decoding}>4.5/5 (305 ratings)</p>
                    </div>
                </div>

           </div>

        </div>
        <div className={s.img}>
            <img alt='' src={book}></img>
        </div>
    </div>
  )
}
