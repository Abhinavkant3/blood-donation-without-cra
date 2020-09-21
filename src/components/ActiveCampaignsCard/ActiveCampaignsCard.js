import React, { Component } from 'react';
import './style.css';
import activeCampaigns from './constants';
import CampaignCard from './../shared/campaignCard/CampaignCard'

class ActiveCampaignsCard extends Component {
	render() {
		return (
			<div className='active-campaign-wrapper'>
				<div className="title-wrapper">
					<div>
						<h2 id="title">Our Campaigns</h2>
						<div className="description">Encourage new donors to donate Blood. We have donor centers all across the country. Please find the active Campaigns down below.</div>
					</div>
					<div className="see-all">
						<span className='see-all-text'>See All</span>
						<span className='see-all-icon'>&#8594;</span>
					</div>
				</div>
				<div className='campaigns-list'>
					{
						activeCampaigns.map((item)=>{
							return <CampaignCard campaignDetails={item} />;
						})
					}
				</div>
			</div>
		)
	}
}

export default ActiveCampaignsCard;