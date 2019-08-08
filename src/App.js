import React from 'react';
import './App.css';
import Display from './Display.js';
import Numpad from './Numpad.js';

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			displayText : "",
			cursorPos : 0
		};
		this.updateDisplay = this.updateDisplay.bind(this);
		this.moveCursor = this.moveCursor.bind(this);
	}
	
	updateDisplay(data) {
		this.setState({
			displayText : data
		});
	}
	
	// direction : true = left move, false = right
	moveCursor(direction) {
		if(direction) {
			if(this.state.cursorPos > 0)
				this.setState({
					cursorPos : this.state.cursorPos-1
				});
		} else {
			if(this.state.cursorPos < this.state.displayText.length)
				this.setState({
					cursorPos : this.state.cursorPos+1
				});
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
				/>
			</div>
		);
	}
}

export default App;
