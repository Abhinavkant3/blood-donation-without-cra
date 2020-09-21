import React, { Component } from 'react';
import Header from './shared/header/Header';
import DonationProcess from './donationProcess/DonationProcess';
import ActiveCampaignsCard from './ActiveCampaignsCard/ActiveCampaignsCard';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <DonationProcess />
        <ActiveCampaignsCard />
      </div>
    );
  }
}

export default App;
