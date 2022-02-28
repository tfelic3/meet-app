import React, { Component } from 'react';
import { InfoAlert } from './Alert';




class CitySearch extends Component {
	
	
//State for queries, suggestions and info text 
	state = {
		query: '',
		suggestions: [],
		infoText: ''
		
	};

	/**
	 * Values changes as user types in search field 
	 * @param {value} event 
	 * @returns {state} query
	 */
	handleInputChanged = (event) => {
		const value = event.target.value;
	
		const suggestions = this.props.locations.filter((location) => {
		  return location.toUpperCase().indexOf(value.toUpperCase()) > -1;
		});
		if (suggestions.length === 0) {
		  this.setState({
			query: value,
			infoText: 'We can not find the city you are looking for. Please try another city',
		  });
		} else {
		  return this.setState({
			query: value,
			suggestions,
			
		  });
		}
	  };

	  /**
	   * Shows suggestions based on item clicked
	   * @param {string}suggestions
	   * @returns {state} suggestions
	   */

	handleItemClicked = (suggestion) => {
		this.setState({
			query: suggestion,
			infoText: null,
			showSuggestions: false
		});
		this.props.updateEvents(suggestion);
	};

	render() {
		return (
			<div className="CitySearch">
				 <InfoAlert text={this.state.infoText} />
				<input
					type="text"
					className="city"
					value={this.state.query}
					onChange={this.handleInputChanged}
					onFocus={() => { this.setState({ showSuggestions: true }) }}
					placeholder= "Type your city"
				/>
				<ul className="suggestions" style={this.state.showSuggestions ? {}: {display: 'none'}}>
					{this.state.suggestions.map((suggestion) => (
						<li key={suggestion} onClick={() => this.handleItemClicked(suggestion)}>
							{suggestion}
						</li>
					))}
					<li onClick={()=>this.handleItemClicked("all")}>
						<b>See all cities</b>
					</li>
				</ul>
			</div>
		);
	}
}

export default CitySearch;
