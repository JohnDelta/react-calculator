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
			else return undefined;
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
			case "backspace" :
				var previousDisplay = [...this.props.displayText];
				var left = previousDisplay.slice(0,this.props.cursorPos-1);
				if(this.props.cursorPos === 0) left = [];
				var right = previousDisplay
					.slice(this.props.cursorPos,previousDisplay.length);
				var nextDisplay = [...left, ...right];
				this.props.moveCursor(true);
				this.props.updateDisplay(nextDisplay);
				this.solve(nextDisplay,false);
				
				break;
			default :
				previousDisplay = [...this.props.displayText];
				/*
					Insert each given value in the position of the cursor.
					Then, move the cursor one index down(right).
				*/
				left = previousDisplay.slice(0,this.props.cursorPos);
				var current = [numpad.symbol];
				right = previousDisplay
					.slice(this.props.cursorPos,previousDisplay.length);
				nextDisplay = [...left, ...current, ...right];
				this.props.moveCursor(false); //move cursor right
				
				if(this.checkInput(nextDisplay)) {
					this.props.updateDisplay(nextDisplay);
					this.solve(nextDisplay,false);
				}
					
				break;
		}
	}
	
	checkInput(newInput) {
		let input = [...newInput].join("").replace(/[\u00f7]/g,"/").replace(/[\u00d7]/g,"*");
		let valid = true;
		/*
			Regex which recognizes valid arithmetic expressions.
			34.34 - 3 + 0.12 + 1 + 0 - is valid.
			003 + 23 - - is not.
			
			reg : ^([()]*(([1-9][0-9]*|[0])([.][0-9]+)?)[()]*[+-][()]*)*(([()]*([0]|[1-9][0-9]*)[()]*[+-.]?[()]*)|[()]*(([1-9][0-9]*|[0])([.][0-9]+)?)[()]*)?$
			reg : ^[()]*[+-]?([()+\-/*]*(([1-9][0-9]*|[0])([.][0-9]+)?)[()]*[+\-/*][()]*)*(([()+\-/*]*([0]|[1-9][0-9]*)[()]*[*\-/+.]?[()]*)|[*()+\-/]*(([1-9][0-9]*|[0])([.][0-9]+)?)[()]*)?$
		*/
		let reg = /^[()]*[+-]?([()+\-/*]*(([1-9][0-9]*|[0])([.][0-9]+)?)[()]*[+\-/*][()]*)*(([()+\-/*]*([0]|[1-9][0-9]*)[()]*[*\-/+.]?[()]*)|[*()+\-/]*(([1-9][0-9]*|[0])([.][0-9]+)?)[()]*)?$/g;
		valid = reg.test(input);
		return valid;
	}
	
	solve(input,updateAns) {
		let valid = true;
		let str = [...input].join("").replace(/[\u00f7]/g,"/").replace(/[\u00d7]/g,"*");
		let ans = "";
		
		try {
			ans = eval(str);
			if(ans === undefined) ans="";
		} catch(e) {
			valid = false;
		}
		
		if(valid) {
			this.props.updateAns(ans);
		}
		if(updateAns) {
			if(valid) {
				this.props.updateDisplay(ans.toString());
				this.props.updateCursor(ans.toString().length);
			} else {
				this.props.showError();
			}
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