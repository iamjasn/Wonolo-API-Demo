import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

import Marker from './../Marker/Marker';

import { HEATMAP_OPTIONS } from './../../constants';
import './map.css';

class Map extends Component {
  static defaultProps = {
    jobRequests: [],
  }

  getHeatmap = (list) => {
    return list.map(item => {
      return { lat: +item.latitude, lng: +item.longitude };
    })
  }

  handleMarkerClick = (details) => {
    this.props.onClickMarker && this.props.onClickMarker(details);
  }

  render() {
    return (
      <div className="map-container">
        <GoogleMapReact
          bootstrapURLKeys={{ key: this.props.googleApiKey }}
          center={this.props.center}
          defaultZoom={this.props.zoom}
          heatmapLibrary={true}
          heatmap={{
            positions: this.getHeatmap(this.props.jobRequests),
            options: HEATMAP_OPTIONS,
          }}
        >
          {this.props.jobRequests.map((job) =>
            <Marker
              key={job.id}
              lat={job.latitude}
              lng={job.longitude}
              job={job}
              clickHandler={this.handleMarkerClick}
            />
          )}
        </GoogleMapReact>
      </div>
    );
  }
}

export default Map;