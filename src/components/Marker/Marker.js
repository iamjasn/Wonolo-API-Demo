import React from 'react';

const markerStyle = {
  position: 'absolute',
  padding: 3,
  backgroundColor: '#e7e7ec',
  border: '1px solid #607d8b',
  borderRadius: 3,
  color: '#ff5722',
  fontSize: 16,
  fontWeight: 500,
  opacity: 0.8,
  cursor: 'pointer',
};

const Marker = props => {
  const { clickHandler, job } = props;

  function handleOnClick(e) {
    clickHandler && clickHandler(job);
  }

  return (
    <div className="marker" onClick={handleOnClick} style={markerStyle}>
      <span>{!!job.category && job.category[0]}</span>
    </div>
  );
}

Marker.defaultProps = {
  job: {},
};

export default Marker;