import React from 'react';
import getDefaultNumpad from './getDefaultNumpad';

class Numpad extends React.Component {
	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
	}
	
	handleClick(e) {
		let numpad = getDefaultNumpad()
			.filter(item => item.id === e.target.id)[0];
			
		switch(numpad.value) {
			case "leftArrow" : 
				this.props.updateCursor(true);
				break;
			case "rightArrow" : 
				this.props.updateCursor(false);
				break;
			default :
			
				let previousDisplay = [...this.props.displayText];
				
				let left = previousDisplay
					.slice(0,previousDisplay.length-this.props.displayCursorPos);
				let current = [numpad.value];
				let right = previousDisplay
					.slice(previousDisplay.length-this.props.displayCursorPos,previousDisplay.length);
				
				let res = [...right, ...current, ...left];
				
				this.props.updateDisplay(res);
				
				console.log("left : "+left);
				console.log("right : "+right);
				
				
				break;
		}
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
					onClick={this.handleClick}
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