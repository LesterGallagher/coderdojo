
                import React from 'react';
import ReactDOM from 'react-dom';
import LesModulesGrid from './LesModulesGrid';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<LesModulesGrid />, div);
  ReactDOM.unmountComponentAtNode(div);
});
