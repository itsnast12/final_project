import React from 'react'
import s from './Author.module.sass'

export default function Author({ id,title, type_boock, description, price, url_title }) {

	return (
		<div className={s.main}>
        
        <div className={s.container}>
              <img className={s.photo} src={`./media/${url_title}`}></img>
              <div className={s.text}>
                  <p className={s.title}>{title}</p>
                  <p className={s.price}>{price}</p>
                  <p className={s.description}>{description}</p>
                  <div className={s.status}>
                      <div className={s.point}></div>
                          <p>{type_boock}</p>
                      </div>
              </div>
        </div>
    </div>
	)
}
