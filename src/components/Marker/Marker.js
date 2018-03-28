import React from 'react';

const Marker = props => {
  const { $hover, clickHandler, job } = props;

  function handleOnClick(e) {
    clickHandler && clickHandler(job);
  }

  const style = $hover ? {background: 'green'} : {};

  return (
    <div className="marker" onClick={handleOnClick} style={style}>
      <span>{job.request_name || 'Job Request'}</span>
    </div>
  );
}

Marker.defaultProps = {
  job: {},
};

export default Marker;