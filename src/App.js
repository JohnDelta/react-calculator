import React from 'react';
import './App.css';
import Display from './Display.js';
import Numpad from './Numpad.js';

/*
	I'll display the output text with a cursor
	seperator which can be moved manualy by buttons(from user),
	(and not use the default text or textarea method).
*/

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			displayText : "",
			/*
				cursorPos : the position of the cursor.
			*/
			cursorPos : 0
		};
		this.updateDisplay = this.updateDisplay.bind(this);
		this.moveCursor = this.moveCursor.bind(this);
		this.reset = this.reset.bind(this);
	}
	
	reset() {
		this.setState({
			displayText : "",
			cursorPos : 0
		});
	}
	
	updateDisplay(data) {
		this.setState({
			displayText : data
		});
	}
	
	// direction : true = left move, false = right
	moveCursor(direction) {
		if(direction) {
			if(this.state.cursorPos > 0) {
				this.setState({
					cursorPos : this.state.cursorPos-1
				});
			}
		} else {
			if(this.state.cursorPos <= this.state.displayText.length) {
				this.setState({
					cursorPos : this.state.cursorPos+1
				});
			}
		}
	}
	
	render() {
		return (
			<div className="App">
				<Display 
					displayText={this.state.displayText}
					cursorPos={this.state.cursorPos}
				/>
				<Numpad
					cursorPos={this.state.cursorPos}
					displayText={this.state.displayText}
					moveCursor={this.moveCursor}
					updateDisplay={this.updateDisplay}
					reset={this.reset}
				/>
			</div>
		);
	}
}

export default App;
