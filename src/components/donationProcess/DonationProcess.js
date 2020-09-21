import React, { Component } from 'react';
import donationSteps from './constants';
import './style.css'

class DonationProcess extends Component {
	render() {
		return (
			<div className='donation-process'>
				<div id="title-with-description">
          <h2 id="title">Donation Process</h2>
          <div className="description">Trusted Blood Bank Services in Ranchi. Donating blood has benefits for your emotional and physical health</div>
        </div>
        <div className="donation-steps">
          {
            donationSteps.map((item)=>{
              return (
                <div className='step'>
                  <div className={`step-id step-${item.id}`}>{item.id}</div>
                  <div className="step-name">{item.stepName}</div>
                  <div className="step-description">{item.stepDescription}</div>
                </div>
              )
            })
          }
        </div>
			</div>
		)
	}
}

export default DonationProcess;
