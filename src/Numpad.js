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
				
				if(this.checkInput(previousDisplay,nextDisplay)) {
					this.props.updateDisplay(nextDisplay);
					this.solve(nextDisplay,false);
					this.props.updateAns("");
				} else this.props.updateAns("ha! ha! nope..");
					
				break;
		}
	}
	
	checkInput(previousInput, nextInput) {
		let update = true;
		let previous = previousInput.join("").match(/([0-9]+[\.]?[0-9]*[-+\u00d7\u00f7 ]?)$/);
		let next = nextInput.join("").match(/([0-9]+[\.]?[0-9]*[-+\u00d7\u00f7 ]?)$/);
		
		let regs = [
			/[-+\u00d7\u00f7 ]/, //no more than one operator together
			/[.]?[0-9]+[.]/ //no more than one dot per number
		];
		
		regs.forEach((reg,index) => {
			if(reg.test(previous) && reg.test(next)) {
				update = false;
			}
		});
		 
		console.log("previous : "+previous);
		console.log("next : "+next);
		
		return update;
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