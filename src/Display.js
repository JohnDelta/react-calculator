import React from 'react';

class Display extends React.Component {
	constructor(props) {
		super(props);
	}
	
	render() {
		/*
			Transform the text to an array and put a symbol
			of cursor in the proper position (in the real cursor pos).
		*/	
		let text = [...this.props.displayText];
		let cursorPos = this.props.cursorPos;
		if(cursorPos > text.length) cursorPos = text.length;
		
		let k1 = text.slice(0,cursorPos);
		let k2 = ["|"];
		let k3 = text.slice(cursorPos,text.length);

		let res = [...k1,...k2,...k3].map( (item,index) => {
			if(index !== cursorPos)
				return <div key={"value"+index} className="value">{item}</div>;
			else
				return <div key={"value"+index} className="cursor">{item}</div>;
		});

		return(
			<div className="Display">
				<div className="input">
					{res}
				</div>
				<div
					className="answer"
					dangerouslySetInnerHTML={{__html : "ans : 20"}}
				/>
			</div>
		);
	}
}

export default Display;