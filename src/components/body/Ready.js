import React from 'react'
import css from './Column.module.css'

const Ready = ({ready}) => {
	return (
		<div className={css.column}>
			<p className={css.column__title}>Готово</p>
			<hr />
			{ready.map(item => (
				<div key={item.id} className={css.column__item} draggable={true}>
					<p className={css.column__item__text}>{item.text}</p>
					<button className={css.column__item__btn__del}>X</button>
				</div>
			))}
			<button className={css.column__item__btn__add}>Добавить</button>
		</div>
	)
}

export default Ready
