import React from 'react';
import './Body.css';

const Body = () => {
	const [boards, setBoards] = React.useState([
		{
			id: 1,
			title: 'Надо сделать',
			items: [
				{ id: 1, text: 'Надо сделать' },
				{ id: 2, text: 'Надо сделать' },
				{ id: 3, text: 'Надо сделать' },
			],
		},
		{
			id: 2,
			title: 'В процессе',
			items: [
				{ id: 4, text: 'В процессе' },
				{ id: 5, text: 'В процессе' },
				{ id: 6, text: 'В процессе' },
			],
		},
		{
			id: 3,
			title: 'Готово',
			items: [
				{ id: 7, text: 'Готово' },
				{ id: 8, text: 'Готово' },
				{ id: 9, text: 'Готово' },
			],
		},
	]);
	const [currentBoard, setCurrentBorder] = React.useState(null);
	const [currentItem, setCurrentItem] = React.useState(null);

	function dragOverHandler(e) {
		e.preventDefault();
		if (e.target.className === 'board__item') {
			e.target.style.boxShadow = '0 4px 3px gray';
		}
	}
	function dragLeaveHandler(e) {
		e.target.style.boxShadow = 'none';
	}
	function dragStartHandler(e, board, item) {
		setCurrentBorder(board);
		setCurrentItem(item);
	}
	function dragEndHandler(e) {
		e.target.style.boxShadow = 'none';
	}

	function dropCardHandler(e, board) {
		board.items.push(currentItem);
		const currentIndex = currentBoard.items.indexOf(currentItem);
		currentBoard.items.splice(currentIndex, 1);

		setBoards(
			boards.map((b) => {
				if (b.id === board.id) {
					return board;
				}
				if (b.id === currentBoard.id) {
					return currentBoard;
				}
				return b;
			})
		);
		e.target.style.boxShadow = 'none';
	}

	// const remove = (item, borderItems, boardId) => {
	// 	setBoards(boards.filter((p) =>
	// 		p.id === boardId
	// 		? console.log(borderItems.filter((j) => j.id !== item))
	// 		: borderItems
	// 	))
	// 	console.log(boardId) // 1 (id первой карточки с title: 'Надо сделать'
	// 	console.log(borderItems) // [{…}, {…}, {…}] (массив items в карточке)
	// 	console.log(item) // 1 (id нашего задания в items карточки)
	// }
	function remove(item, borderItems, boardId) {
		const removeBoard = boards.filter((p) =>
			p.id === boardId // идет поиск карточки в которой нажали на удаления задачи
			? borderItems.filter((j) => j.id !== item) // потом отфильтровываем уже без карточки
			: borderItems // иначе возвращаем
		)
		console.log(removeBoard)
		setBoards(removeBoard)
		
		// console.log(boardId) // 1 (id первой карточки с title: 'Надо сделать'
		// console.log(borderItems) // [{…}, {…}, {…}] (массив items в карточке)
		// console.log(item) // 1 (id нашего задания в items карточки)
	}

	return (
		<div className='body'>
			{boards.map((board) => (
				<div className='board' key={board.id}>
					<p className='board__title'>{board.title}</p>
					<div className='board__items' onDragOver={(e) => dragOverHandler(e)} onDrop={(e) => dropCardHandler(e, board)}>
						<hr />
						{board.items.map((item) => (
							<div
								key={item.id}
								className='board__item'
								draggable={true}
								onDragOver={(e) => dragOverHandler(e)}
								onDragLeave={(e) => dragLeaveHandler(e)}
								onDragStart={(e) => dragStartHandler(e, board, item)}
								onDragEnd={(e) => dragEndHandler(e)}
							>
								<p className='board__item__text'>{item.text}</p>
								<button className='board__item__btn__del' onClick={() => remove(item.id, board.items, board.id)}>X</button>
							</div>
						))}
						<button className='board__item__btn__add'>Добавить</button>
					</div>
				</div>
			))}
		</div>
	);
};

export default Body;
