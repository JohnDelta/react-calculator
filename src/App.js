import React from 'react';
import './App.css';
import Display from './Display.js';
import Numpad from './Numpad.js';

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			displayText : "",
			displayCursorPos : 0
		};
		this.updateDisplay = this.updateDisplay.bind(this);
		this.updateCursor = this.updateCursor.bind(this);
	}
	
	updateDisplay(data) {
		this.setState({
			displayText : data
		});
	}
	
	// direction : true = right move, false = left
	updateCursor(direction) {
		if(direction) {
			if(this.state.displayCursorPos < this.state.displayText.length)
				this.setState({
					displayCursorPos : this.state.displayCursorPos+1
				});
		} else {
			if(this.state.displayCursorPos > 0)
				this.setState({
					displayCursorPos : this.state.displayCursorPos-1
				});
		}
	}
	
	render() {
		return (
			<div className="App">
				<Display 
					displayText={this.state.displayText}
					displayCursorPos={this.state.displayCursorPos}
				/>
				<Numpad 
					displayText={this.state.displayText}
					displayCursorPos={this.state.displayCursorPos}
					updateCursor={this.updateCursor}
					updateDisplay={this.updateDisplay}
				/>
			</div>
		);
	}
}

export default App;
