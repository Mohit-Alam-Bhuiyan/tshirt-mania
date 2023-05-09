import React from 'react';
import MySelf from '../MySelf.js/MySelf';
import Brother from '../Brother/Brother';
import Sister from '../Sister/Sister';
const Father = ({ house, ornament }) => {
	return (
		<div>
			<h4>Father</h4>
			<p>house: {house}</p>
			<div style={{ display: 'flex' }}>
				<MySelf house={house}/>
				<Brother house={house} />
				<Sister house={house} />
			</div>
		</div>
	);
};

export default Father;
