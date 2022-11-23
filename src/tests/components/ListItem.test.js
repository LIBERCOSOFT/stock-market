import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';
import ListItem from '../../components/ListItem';

test('renders list-all-stock component snapshot', () => {
  const { asFragment } = render(
    <BrowserRouter>
      <ListItem />
    </BrowserRouter>,
  );
  expect(asFragment()).toMatchSnapshot();
});
