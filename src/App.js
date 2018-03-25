import React, { Component } from 'react';
import axios from 'axios';

import { GOOGLE_API_KEY } from './api-keys';
import { REVERSE_GEOCODE_REQUEST } from './constants';
import { getAuthToken, getUserLocation, getJobRequests } from './utils';
import Map from './components/Map/Map';

import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      mapCenter: {
        lat: 37.773100,
        lng: -122.422944,
      },
      mapZoom: 11,
      authToken: '',
    }
  }

  componentDidMount() {
    let jobRequests;

    axios.all([getAuthToken, getUserLocation])
    .then(axios.spread((token, location) => {
      axios.post(`${REVERSE_GEOCODE_REQUEST}${location.lat},${location.lng}`)
      .then(res => {
        const shortNames = res.data.results[0].address_components.map(item =>
          item.short_name);

        if (shortNames[1] !== 'US') {
          this.setState({
            authToken: token,
            mapCenter: location,
            jobRequests: [],
          })
          return;
        }
        getJobRequests(token).then(res => {
          jobRequests = res.data.job_requests;

          this.setState({
            authToken: token,
            mapCenter: location,
            jobRequests: jobRequests,
          })
        });
      });
    }));
  }

  render() {
    return (
      <div className="App">
        <Map
          googleApiKey={GOOGLE_API_KEY}
          center={this.state.mapCenter}
          zoom={this.state.mapZoom}
          jobRequests={this.state.jobRequests}
        />
      </div>
    );
  }
}

export default App;
