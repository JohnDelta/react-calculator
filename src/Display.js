import React from 'react';

class Display extends React.Component {
	constructor(props) {
		super(props);
	}
	
	render() {
		/*
			In order to display the text with a cursor
			seperator which can be moved manualy by buttons(from user),
			(and not use the default text or textarea method)
			i have to transform the text to an array and each time put a symbol
			of cursor in the proper position.
		*/		
		let text = [...this.props.displayText];
		let k1 = text.slice(0,this.props.cursorPos);
		let k2 = ["|"];
		let k3 = text.slice(this.props.cursorPos,text.length);
		
		let res = [...k1,...k2,...k3].map( (item,index) => {
			if(index !== this.props.cursorPos)
				return <div key={"value"+index} className="value">{item}</div>;
			else
				return <div key={"value"+index} className="cursor">{item}</div>;
		});

		return(
			<div 
				className="Display"
			>
				{res}
			</div>
		);
	}
}

export default Display;