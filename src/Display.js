import React from 'react';

class Display extends React.Component {
	constructor(props) {
		super(props);
		this.handleEvent = this.handleEvent.bind(this);
	}
	
	
	handleEvent(e) {
		var txt = document.getElementById("text");
		var len = txt.value.length;
		txt.setSelectionRange(0,len-1);
	}
	
	render() {
		
		return(
			<div className="Display">
				<input id="text" type="text" value="asdfsdf" onFocus={this.handleEvent}/>
			</div>
		);
	}
}

export default Display;