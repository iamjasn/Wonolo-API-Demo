import React from 'react';
import ReactDOM from 'react-dom';
import Marker from './Marker';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Marker />, div);
  ReactDOM.unmountComponentAtNode(div);
});
