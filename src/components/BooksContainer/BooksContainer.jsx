import React from 'react'
import Book from '../Book'
import s from './BooksContainer.module.sass'

export default function BooksContainer() {
    
    const data = [
        {
            "id": 1,
            "title": "Atomic One's",
            "price":"$ 13.84 USD",
            "description": "As the book contains theoretical content as well as solved questions.",
            "status": "Printed Book",
            "cover": "kk"
        },
        {
            "id": 2,
            "title": "The Dark Light",
            "price":"$ 86.11 USD",
            "description": "As the book contains theoretical content as well as solved questions.",
            "status": "Printed Book",
            "cover": 'ff'
        }
    ]


  return (
    <div >
        <div className={s.up}>
            <p className={s.header}>The Author's Book</p>
            <div className={s.line}></div>
        </div>
        <div className={s.main}>
            {data.map(book => <Book key={book.id} data={book}/>)}
        </div>
    </div>
  )
}
