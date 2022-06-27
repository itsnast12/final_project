import React from 'react'
import s from './Learn.module.sass'

export default function Learn({ id,description }) {

	return (
		<div className={s.main}>
        	<div className={s.circle}>{id}</div>
        	<p className={s.descroption}>{description}</p>
    	</div>
	)
}
