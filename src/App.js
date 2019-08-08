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
	}
	
	componentWillMount() {
		this.setState({
			displayText : "hello",
			displayCursorPos : this.state.displayText.length-2
		});
	}
	
	render() {
		return (
			<div className="App">
				<Display 
					displayText={this.state.displayText}
					displayCursorPos={this.state.displayCursorPos}
				/>
				<Numpad />
			</div>
		);
	}
}

export default App;
