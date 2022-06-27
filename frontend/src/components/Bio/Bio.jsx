import React from 'react'
import s from './Bio.module.sass'
import photo from '../../media/author.png'
import qr from '../../media/qr.png'

export default function Bio() {
  return (
    <div className={s.main}>

        <div className={s.img}>

            <div className={s.line}>
                <img className={s.photo} src={photo}></img>
            </div>

        </div>

        <div className={s.text}>

            <p className={s.about}>About the Author</p>

            <div className={s.line}></div>

            <p className={s.description}>
                We believe that bookstores are essential to a healthy culture. 
                They're where authors can connect with readers, where we discover 
                new writers, where children get hooked on the thrill of reading that can last a lifetime.
            </p>

            <div className={s.properties}>

                <div className={s.item}>
                    <div>
                        <p className={s.number}>02</p>
                        <p className={s.descriptor}>Books Published</p>
                    </div>
                </div>

                <div className={s.separator}></div>

                <div className={s.item}>
                    <p className={s.number}>4.5</p>
                    <p className={s.descriptor}>User Reviews</p>
                </div>

                <div className={s.separator}></div>

                <div className={s.item}>
                    <p className={s.number}>04</p>
                    <p className={s.descriptor}>Best Seller Awards</p>
                </div>

            </div>

            <div className={s.connection}>
                <img src={qr}></img>
                <div className={s.contact}>
                    <p className={s.name}>John Abraham , Ph.d</p>
                    <p className={s.mail}>Mail: johnabraham@gmail.com</p>
                    <p className={s.phone}>Phone: (+2) 123 545 9000</p>
                </div>
            </div>

        </div>

    </div>
  )
}
