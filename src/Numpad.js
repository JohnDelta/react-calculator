import React from 'react';
import getDefaultNumpad from './getDefaultNumpad';

class Numpad extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			numpads : [...getDefaultNumpad()],
		};
		this.handleClick = this.handleClick.bind(this);
		/*
			Solve evaluates the given input.
			if argument updateAns = true, then it also updates the textDisplay with the result
			else it only updates the ans field.
		*/
		this.solve = this.solve.bind(this);
		this.checkInput = this.checkInput.bind(this);
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
			case "=" :
				this.solve(this.props.displayText,true);
				break;
			default :
				let previousDisplay = [...this.props.displayText];
				/*
					Insert each given value in the position of the cursor.
					Then, move the cursor one index down(right).
				*/
				let left = previousDisplay.slice(0,this.props.cursorPos);
				let current = [numpad.symbol];
				let right = previousDisplay
					.slice(this.props.cursorPos,previousDisplay.length);
				let nextDisplay = [...left, ...current, ...right];
				this.props.moveCursor(false); //move cursor right
				
				if(this.checkInput(nextDisplay)) {
					this.props.updateDisplay(nextDisplay);
					this.solve(nextDisplay,false);
					this.props.updateAns("");
				} else this.props.updateAns("ha! ha! nope..");
					
				break;
		}
	}
	
	checkInput(newInput) {
		let input = newInput.join("");
		let valid = true;
		/*
			Regex which recognizes valid arithmetic expressions.
			34.34 - 3 + 0.12 + 1 + 0 - is valid.
			003 + 23 - - is not.
			
			reg : ^((([1-9][0-9]*|[0])([.][0-9]+)?)[+-])*((([0]|[1-9][0-9]*)[+-.]?)|(([1-9][0-9]*|[0])([.][0-9]+)?))?$
		*/
		console.log(newInput);
		let reg = /^((([1-9][0-9]*|[0])([.][0-9]+)?)[+-])*((([0]|[1-9][0-9]*)[+-.]?)|(([1-9][0-9]*|[0])([.][0-9]+)?))?$/g;
		valid = reg.test(input);
		return valid;
	}
	
	solve(input,updateAns) {
		let str = [...input].join("").replace(/[\u00f7]/g,"/")
			.replace(/[\u00d7]/g,"*");
		
		
		//console.log(str);
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