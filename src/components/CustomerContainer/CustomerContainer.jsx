import React from 'react'
import Customer from '../Customer/Customer'
import s from './CustomerContainer.module.sass'

export default function CustomerContainer() {

    const data = [
        {
            "id": 1,
            "title": "Amazen Corp.",
            "description": "They has been helping readers, music lovers, and videophiles find quality material.",
            "cover": "kk"
        },
        {
            "id": 2,
            "title": "Megan Books",
            "description": "We help physical bookstores manage their overstock to the book inventory.",
            "cover": 'ff'
        },
        {
            "id": 3,
            "title": "Megank",
            "description": "Bookstore serving up the full spectrum of Black literature and wine black books.",
            "cover": 'ff'
        },
        {
            "id": 4,
            "title": "Urban Store",
            "description": "We also carry the latest records, issues of all of your favorite comic books.",
            "cover": 'ff'
        }
    ]


  return (
    <div >
        <div className={s.up}>
            <p className={s.header}>Trusted By The Best</p>
            <div className={s.line}></div>
        </div>
        <div className={s.main}>
            {data.map(cust => <Customer key={cust.id} data={cust}/>)}
        </div>
    </div>
  )
}
