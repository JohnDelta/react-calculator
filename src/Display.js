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
			i have to transform the text to an array and put a symbol
			of cursor in the proper position each time.
		*/
		let text = [...this.props.displayText].map( (item,index) => {
			return <div className="value" key={"char"+index} >{item}</div>
		});
		let k1 = text.slice(0,this.props.displayCursorPos);
		let k2 = text.slice(this.props.displayCursorPos,text.length);
		let result = [...k1,<div className="cursor" key="charSep">|</div>,...k2];
		
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