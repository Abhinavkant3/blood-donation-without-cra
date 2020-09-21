import React, { Component } from 'react';
import './style.css'

export default class CampaignCard extends Component {
	render() {
		const {date, topic, description, location, image} = this.props.campaignDetails;
		return (
			<div>
				<div className="campaign-card">
						<img className='campaign-image' src={`./../../../src/images/${image}`} alt="icon"/>
						<div className="campaign-details-wrapper">
								<div className="event-date">{date}</div>
								<div className="event-topic">{topic}</div>
								<div className="event-description">{description}</div>
								<div className="event-location">{location}</div>
						</div>
				</div>	
			</div>
		)
	}
}
