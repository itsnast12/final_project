import React from 'react'
import s from './Nav.module.sass'
import logotip from './logo.svg'
import logo_text from './logo2.svg'
import Button from '../UI/Button'
import facebook from './facebook.svg'
import twitter from './twitter.svg'
import ins from './in.svg'

export default function Nav() {
  return (
    <nav className={s.main}>
         <a href='#'>
        <div className={s.logo}>
            <img src={logotip}></img>
            <img src={logo_text}></img>
            <div className={s.network}>
            <a href='#' >
                <div className={s.link}>
                    <img src={facebook}></img>
                </div>
            </a>
            <a href='#'>
                <div className={s.link}>
                    <img src={twitter}></img>
                </div>
            </a>
            <a href='#'>
                <div className={s.link}>
                    <img src={ins}></img>
                </div>
            </a>
        </div>
        </div>
        </a>
        <ul className={s.main__list}> 
            <li>Home</li>
            <li>About</li> 
            <li>Pages</li>
            <li>Contact us</li>
        </ul>
        <div className={s.btn}>
            <Button>Order Today</Button>
        </div>
    </nav>
  )
}
