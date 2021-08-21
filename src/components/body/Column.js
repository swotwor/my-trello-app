import React from 'react'
import css from './Column.module.css'

const Column = ({ columnNames }) => {
	return (
		<div className={css.column}>
			<p className={css.column__title}>{columnNames}</p>
			<hr />
			
		</div>
	)
}

export default Column
