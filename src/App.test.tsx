import React from 'react';
import  { SamuraiJSApp } from './App';

test('renders without crashing', () => {
  const div = document.createElement('div');
  //@ts-ignore
  ReactDOM.render(<SamuraiJSApp />,div);
  //@ts-ignore
  ReactDOM.unmountComponentAtNode (div);
});
