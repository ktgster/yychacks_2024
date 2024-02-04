import React from 'react';
import { Link } from 'react-router-dom';

export default function Button({ className = "", style = "", content, linkUrl}) {
	return (
		<div>
			<button className={className} style={style}>
				<Link to={linkUrl}>
					{content}
				</Link>
			</button>
		</div>
	)
}