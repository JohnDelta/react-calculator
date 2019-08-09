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
				this.props.moveCursor(true);
				break;
			case "rightArrow" : 
				this.props.moveCursor(false);
				break;
			case "reset" :
				this.props.reset();
				break;
			default :
				/*
					Insert each given value in the position of the cursor.
					Then, move the cursor one index down(right).
				*/
				let previousDisplay = [...this.props.displayText];
				let left = previousDisplay.slice(0,this.props.cursorPos);
				let current = [numpad.symbol];
				let right = previousDisplay
					.slice(this.props.cursorPos,previousDisplay.length);
				let res = [...left, ...current, ...right];
				this.props.moveCursor(false); //move cursor right
				this.props.updateDisplay(res);
				
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