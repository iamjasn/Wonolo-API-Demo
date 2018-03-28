import React, { Component } from 'react';

import { GOOGLE_API_KEY } from './api-keys';
import { getAuthToken, getJobRequests } from './utils';
import Map from './components/Map/Map';

import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      authToken: '',
      jobDetails: {},
      error: null,
      jobRequests: [],
      mapCenter: {
        lat: 37.773100,
        lng: -122.422944,
      },
      mapZoom: 12,
    }
  }

  displayJobDetails = (jobDetails) => {
    this.setState({ jobDetails });
  }

  componentDidMount() {
    getAuthToken.then(token => {
      getJobRequests(token).then(res =>
        this.setState({
          authToken: token,
          jobRequests: res.data.job_requests,
        })
      );
    })
    .catch(error => {
      this.setState({ error });
    })
  }

  render() {
    const { jobDetails } = this.state;

    return (
      <main className="App">
        <Map
          googleApiKey={GOOGLE_API_KEY}
          center={this.state.mapCenter}
          zoom={this.state.mapZoom}
          jobRequests={this.state.jobRequests}
          onClickMarker={this.displayJobDetails}
        />
          <aside className={!!jobDetails.id ? 'sidebar show' : 'sidebar'}>
            {!!jobDetails.id &&
              <dl>
                <dt>{jobDetails.request_name}</dt>
                <dd>({jobDetails.state})</dd>
                <dd>{jobDetails.category}</dd>
                <dt>Start Time:</dt>
                <dd>{new Date(jobDetails.start_time).toLocaleString()}</dd>
                <dt>Wage:</dt>
                <dd>{jobDetails.wage}</dd>
                <dt>Duration:</dt>
                <dd>{jobDetails.duration/60} hours</dd>
                {!!jobDetails.description &&
                  <dd>{jobDetails.description}</dd>
                }
              </dl>
            }
          </aside>
      </main>
    );
  }
}

export default App;
