import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../../redux/configureStore';
import StockDetails from '../../pages/StockDetails';

test('renders stock-details component snapshot', () => {
  const { asFragment } = render(
    <Provider store={store}>
      <BrowserRouter>
        <StockDetails />
      </BrowserRouter>
    </Provider>,
  );
  expect(asFragment()).toMatchSnapshot();
});
