import React from 'react';
import getDefaultNumpad from './getDefaultNumpad';

class Numpad extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			numpads : [...getDefaultNumpad()]
		};
		this.handleClick = this.handleClick.bind(this);
	}
	
	handleClick(e) {
		let numpad = this.state.numpads.filter( (item) => {
			if(item.id === e.target.id) return item;
		})[0];
		
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
		let keyboard = [];
		this.state.numpads.forEach( (item,index) => {
			keyboard.push(
				<button
					key={item.id+index}
					id={item.id}
					onClick={this.handleClick}
					className={item.class} 
				>
					{item.symbol}
				</button>
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