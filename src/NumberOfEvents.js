import React, { Component } from 'react';
import { ErrorAlert } from './Alert';

class NumberOfEvents extends Component {
	state = {
		numberOfEvents: 32,
		ErrorAlert: '',
	};

	/**
	 * Shows the number of events based in a particular city
	 * @param {number} eventCount
	 * @returns {number}
	 */
	changeInput = (eventCount) => {
		const value = eventCount.target.value;
		this.setState({ numberOfEvents: value, ErrorAlert: '' });
		this.props.updateEvents(null, value);

		if (value < 1 || value > 32) {
			this.setState({
				infoText: 'Select number of events from 1 to 32',
				numberOfEvents: value,
			});
		} else {
			this.setState({
				infoText: '',
			});
		}
	};

	render() {
		return (
			<div className="numberOfEvents">
				<label>Number of Events:</label>
				<input
					type="number"
					id="numberOfEvents input"
					value={this.state.numberOfEvents}
					onChange={this.changeInput}
				/>
				<ErrorAlert text={this.state.infoText} />
			</div>
		);
	}
}

export default NumberOfEvents;
