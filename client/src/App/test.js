import React from 'react';
import { shallow,mount,render } from 'enzyme';
import App from './App';


describe('App Component', () => {
  it('should render without throwing an error', () => {
    expect(shallow(<App />).find('.app').exists()).toBe(true);
  });
});