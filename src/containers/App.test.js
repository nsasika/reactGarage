import React from 'react';
import ReactDOM from 'react-dom';
import Parent from '../components/Parent';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Parent />, div);
  ReactDOM.unmountComponentAtNode(div);
});
