import React, { Component } from 'react';

class Event extends Component {

	state={
details: false,
	}

changeDetails=()=>{
	this.setState({details: true})
}	

hideDetails =()=>{
	this.setState({details: false})
}


showDetails=()=>{
if (this.state.details === false) 
return <><p className="summary">{this.props.event.summary}</p> <p className="dateTime">{this.props.event.end['dateTime']}</p> <p className="timezone">{this.props.event.originalStartTime['timeZone']}</p><button className="details-btn" onClick={this.changeDetails}>Show Details</button></>
 
return <> <p className="summary">{this.props.event.summary}</p><p className="dateTime">{this.props.event.end['dateTime']}</p> <p className="timezone">{this.props.event.originalStartTime['timeZone']}</p> <div className="extraDetails"><p className="description">{this.props.event.description}</p> <p className="location">{this.props.event.location}</p><a href={this.props.event.htmlLink}>Link here</a>	</div><button className="details-btn" onClick={this.hideDetails}>Hide Details</button></>

}
	

	render() {
		const event = this.props.event;
	
		
		return (
			
			<div className="event">
				
				{this.showDetails()}
			
		
					
	
				
			</div>
		);
	}
}

export default Event;
