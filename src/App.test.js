import React from 'sreact';
import { render } from '@testing-library/react';

import App from './App';

const setupApp = () => render(<App />);

describe('<App />', () => {
  it('should display list of users', () => {
    setupApp();
  });
});
