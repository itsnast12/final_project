import React from 'react'
import s from './Trusted.module.sass'

const Trust = ({ id, description, company_name,	url_title}) => {
	return (
		<div className={s.container}>
            <img className={s.img} src={`./media/${url_title}`}></img>
            <p className={s.title}>{company_name}</p>
            <p className={s.description}>{description}</p>
        </div>

	)
}
export default Trust;