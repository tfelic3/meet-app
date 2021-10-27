import React, { Component } from 'react';
import './App.css';
import EventList from './EventList.js';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import {getEvents} from './api.js';
import "./nprogress.css";
import {extractLocations} from "./api.js";


class App extends Component {

	
	state = {
		events: [],
		locations: [],
		NumberOfEvents: 32,
	};

	
	  updateEvents = (location) => {
		getEvents().then((events) => {
		  const locationEvents = (location === 'all') ?
			events :
			events.filter((event) => event.location === location);
		  this.setState({
			events: locationEvents
		  });
		});
	  }

	  componentDidMount() {
		
		this.mounted = true;
		getEvents().then((events) => {
		
			
		
		  if(this.mounted) {
		  this.setState({ events, locations: extractLocations(events)});
		  }
		});
	  }
	
	  componentWillUnmount(){
		this.mounted = false;
	  }

  
	 
	

	render() {
		return (
			<div className="App">
				<p>Hello Friends</p>
				
				<CitySearch
					locations={this.state.locations}
					updateEvents={this.updateEvents}
				/>
				<NumberOfEvents updateEvents={this.updateEvents} />
				<EventList events={this.state.events} />
			</div>
		);
	}
}

export default App;
