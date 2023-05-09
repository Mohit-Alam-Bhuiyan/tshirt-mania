import React, { useState } from 'react';
import Uncle from '../Uncle/Uncle';
import Father from '../Father/Father';
import Aunty from '../Aunty/Aunty';
import './Grandpa.css';
import { createContext } from 'react';

/*
   context api
   1. call createContext with a default value
   2. set a variable of the context with uppercase
   3. Make sure you export the context to use it in other places
   4. Wrap your child content using RingContext.Provider
   5. Provide a value 
   6. to consume the context from child component 
   7. useContext hook and you will need to pass the contextName
   8. Make sure you take notes...
*/

export const RingContext = createContext('ring');

const Grandpa = () => {
	const [ house, setHouse ] = useState(1);

	const ornament = 'White Gold Ring';

	const handleBuyAHouse = () => {
		const newHouseCount = house + 1;
		setHouse(newHouseCount);
	};
	return (
		<RingContext.Provider value={[ house, setHouse ]}>
			<div className="grandpa">
				<h3>Grandpa</h3>
				<p>
					house: {house} <button onClick={handleBuyAHouse}>Buy A House</button>
				</p>
				<section style={{ display: 'flex' }}>
					<Father house={house} />
					<Uncle house={house} />
					<Aunty house={house} />
				</section>
			</div>
		</RingContext.Provider>
	);
};

export default Grandpa;
