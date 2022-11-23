import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../../redux/configureStore';
import ListAllStocks from '../../pages/ListAllStocks';

test('renders list-all-stock component snapshot', () => {
  const { asFragment } = render(
    <Provider store={store}>
      <BrowserRouter>
        <ListAllStocks />
      </BrowserRouter>
    </Provider>,
  );
  expect(asFragment()).toMatchSnapshot();
});
