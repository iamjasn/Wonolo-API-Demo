import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const Marker = ({ text }) => <div>{text}</div>

class Map extends Component {
  static defaultProps = {
    jobRequests: [],
  }

  getHeatmap = (list) => {
    return list.map(item => {
      return { lat: +item.latitude, lng: +item.longitude };
    })
  }

  render() {
    return (
      <div style={{ height: '80vh', width: '80vw' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: this.props.googleApiKey }}
          center={this.props.center}
          defaultZoom={this.props.zoom}
          heatmapLibrary={true}
          heatmap={{
            positions: this.getHeatmap(this.props.jobRequests),
            options: {
              radius: 30,
              intensity: 800,
              opacity: 0.9,
              gradient: [
                'rgba(0, 255, 255, 0)',
                'rgba(0, 255, 255, 1)',
                'rgba(0, 191, 255, 1)',
                'rgba(0, 127, 255, 1)',
                'rgba(0, 63, 255, 1)',
                'rgba(0, 0, 255, 1)',
                'rgba(0, 0, 223, 1)',
                'rgba(0, 0, 191, 1)',
                'rgba(0, 0, 159, 1)',
                'rgba(0, 0, 127, 1)',
                'rgba(63, 0, 91, 1)',
                'rgba(127, 0, 63, 1)',
                'rgba(191, 0, 31, 1)',
                'rgba(255, 0, 0, 1)'
              ]
            }
          }}
        >
          <Marker
            lat={this.props.center.lat}
            lng={this.props.center.lng}
            text={'You'}
          />
          {this.props.jobRequests.map((job) =>
            <Marker
              key={job.id}
              lat={job.latitude}
              lng={job.longitude}
              text={job.wage}
            />
          )}
        </GoogleMapReact>
      </div>
    );
  }
}

export default Map;