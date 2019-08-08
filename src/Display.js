import React from 'react';

class Display extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			maxValues : 18
		};
	}
	
	render() {
		/*
			In order to display the text with a cursor
			seperator which can be moved manualy by buttons(from user),
			(and not use the default text or textarea method)
			i have to transform the text to an array and put a symbol
			of cursor in the proper position each time.
		*/		
		let text = [...this.props.displayText];
		let k1 = text.slice(0,this.props.displayCursorPos);
		let k2 = text.slice(this.props.displayCursorPos,text.length);
		let k3 = Array(this.state.maxValues-text.length-1).fill(" ");
		let result = [...k1,
						"|",
						...k2,
						...k3];
		result.map(i=>"sdf"+i);
		console.log(result);
		
		return(
			<div 
				className="Display"
			>
				{result}
			</div>
		);
	}
}

export default Display;