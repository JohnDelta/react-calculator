import React from 'react';

class Numpad extends React.Component {
	constructor(props) {
		super(props);
	}
	
	render() {
		
		let numpads = [];
		for(let i = 0; i < 10; i++) {
			numpads.push(
				<button 
					key={"numpad"+i}
					id={"numpad"+i}
					value={i}
					dangerouslySetInnerHTML={{__html : i}}
				/>
			);
		}
		
		return(
			<div className="Numpad">
				{numpads}
				
			</div>
		);
	}
}

export default Numpad;