import Trusted from '../Trusted'
import s from './TrustedConteiner.module.sass'
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux'
import { getAllTrusted } from '../../assynncActions/trusted'
import { useDispatch } from 'react-redux'

const TrustedConteiner = () => {
	const dispatch = useDispatch();
	const trusted = useSelector((state) => state.trusted);

	useEffect(() => {
		if (!trusted.id) {
			dispatch(getAllTrusted())
		}
	}, []);

	return (
		<div >
			<div className={s.up}>
				<p className={s.header}>Trusted By The Best</p>
				<div className={s.line}></div>
			</div>
			<div className={s.main}>
					{trusted.map(trust => <Trusted key={trust.id} {...trust} />)}
			</div>
		</div>
	);
}

export default TrustedConteiner;
