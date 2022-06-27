import React from 'react';

import s from './ArticleResourse.module.sass'
const ArticleResourse = ({id, title, description, date, url_title}) => {
	return (

		<div className={s.main}>
				<img className={s.photo} src={`./media/${url_title}`}></img>
				<p className={s.text}>{title}</p>
				<p className={s.description}>{description}</p>
				<p className={s.date}>{date}</p>
			</div>

	);
}

export default ArticleResourse;
