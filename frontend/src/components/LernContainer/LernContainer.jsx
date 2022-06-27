import Learn from '../Learn'
import s from './LernContainer.module.sass'
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux'
import { getAllLearn } from '../../assynncActions/learn'
import { useDispatch } from 'react-redux'
import photo from '../../media/You.png'

const LernContainer = () => {
	const dispatch = useDispatch();
	const learning = useSelector((state) => state.learning);

	useEffect(() => {
		if (!learning.id) {
			dispatch(getAllLearn())
		}
	}, []);

	return (
		<div>
        <div className={s.up}>
            <p className={s.header}>What Will You Learn?</p>
            <div className={s.line}></div>
        </div>

        <div className={s.main}>
            <div className={s.card}>
              {learning.map(lern => <Learn key={lern.id} {...lern} />)}
            </div>

            <div className={s.photo}>
              <div className={s.frame}>
                <img src={photo}></img>
              </div>
            </div>

        </div>

    </div>
	);
}

export default LernContainer;
