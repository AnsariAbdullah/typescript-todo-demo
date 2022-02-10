import React, { useState } from 'react';
import './App.css';

function App() {

	const [listItems, setListItems] = useState<string[]>([]);
	const [input, setInput] = useState<string>('car');

	const handleChange = (e: any) => {
		// console.log(e.target.value)
		setInput(e.target.value)
	}

	const handleSubmit = () => {
		setInput('');
		setListItems([...listItems, input]);
	}

	const deleteItem = (index: number) => {
		let newArr: string[];
		newArr = listItems;
		newArr.splice(index, 1);
		console.log(newArr);
		setListItems([...newArr])
	}

	return (
		<div className="App">
			<div className="controls">
				<input
					type="text"
					className="input-box"
					onChange={(e) => handleChange(e)}
					value={input}
					placeholder="add todo"
				/>
				<button
					className="submit-button"
					onClick={handleSubmit}
				>
					Add
				</button>
			</div>
			<div className="todo">
				<ul className="list-wrapper">
					{listItems && listItems.map((item, index) =>
						<li className="list-item" key={index}>
							{item}
							<span
								onClick={() => deleteItem(index)}
								className="close"
							>
								X
							</span>
						</li>
					)}
				</ul>
			</div>
		</div>
	);
}

export default App;
