import React from 'react';
import getDefaultNumpad from './getDefaultNumpad';

class Numpad extends React.Component {
	constructor(props) {
		super(props);
	}
	
	render() {
		let numpad = getDefaultNumpad();
		let keyboard = [];
		numpad.forEach( (item,index) => {
			keyboard.push(
				<button
					key={item.id}
					id={item.id}
					value={item.value}
					dangerouslySetInnerHTML={{__html : item.symbol}}
				/>
			);
		});
		
		return(
			<div className="Numpad">
				{keyboard}	
			</div>
		);
	}
}

export default Numpad;