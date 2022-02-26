import React from 'react';

export interface Props{
	title: string
}

const Header = (props: Props) => {
	return(
		<header>
			<p>{props.title}</p>
		</header>
	)
}

export default Header;