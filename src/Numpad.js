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
				let res = [...left, ...current, ...right];
				this.props.moveCursor(false); //move cursor right
				
				/*
					Before you update input,
					make sure the input expression will stay in the correct form.
					Check  its operators if they are in a correct place.
					They cannot be two or more together one next to another.
				*/
				let reg = /[-+\u00d7\u00f7 ]/;
				if(!(reg.test(res[res.length-1]) && reg.test(previousDisplay[previousDisplay.length-1]))) {
					this.props.updateDisplay(res);
					this.solve(res,false);
					
					this.props.updateAns("");
				} else this.props.updateAns("ha! ha! nope..");
					
				break;
		}
	}
	
	solve(input,updateAns) {
		let str = [...input].join("").replace(/[\u00f7]/g,"/")
			.replace(/[\u00d7]/g,"*");
		
		
		console.log(str);
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