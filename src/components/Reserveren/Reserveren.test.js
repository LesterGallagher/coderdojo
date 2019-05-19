
                import React from 'react';
import ReactDOM from 'react-dom';
import Reserveren from './Reserveren';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Reserveren />, div);
  ReactDOM.unmountComponentAtNode(div);
});
