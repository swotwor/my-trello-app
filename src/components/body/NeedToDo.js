import React from 'react'
import css from './Column.module.css'

const NeedToDo = ({ needToDo }) => {
	return (
		<div className={css.column}>
			<p className={css.column__title}>Надо сделать</p>
			<hr />
			{needToDo.map(item => (
				<div key={item.id} className={css.column__item} draggable={true}>
					<p className={css.column__item__text}>{item.text}</p>
					<button className={css.column__item__btn__del}>X</button>
				</div>
			))}
			<button className={css.column__item__btn__add}>Добавить</button>
		</div>
	)
}

export default NeedToDo
