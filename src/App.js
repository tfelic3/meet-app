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
		getEvents().then((response) => {
		  const locationEvents = (location === 'all') ?
			response.events :
			response.events.filter((event) => event.location === location);
		  this.setState({
			events: locationEvents,
			locations: response.locations
			
		  });
		});
	  }

	  componentDidMount() {
		
		this.mounted = true;
		getEvents().then((response) => {
		
		
		  if(this.mounted) {
		  this.setState({ events: response.events, locations: response.locations,});
	
		  }
		});
	  }
	
	  componentWillUnmount(){
		this.mounted = false;
	  }

  
	 
	

	render() {
		return (
			<div className="App">
				<p>City Search Bar</p>
				
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
