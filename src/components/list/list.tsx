import React from 'react';

const List: Function = (props: { listItems: string[], deleteItem: Function }): JSX.Element[] => {
	const { listItems, deleteItem } = props;

	return listItems && listItems.map((item:string, index:number) =>
		<li className="list-item" key={index}>
			{item}
			<span
				onClick={() => deleteItem(index)}
				className="close"
			>
				X
			</span>
		</li>
	);
}
 
export default List;