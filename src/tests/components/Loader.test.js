import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Loader from '../../components/Loader';

test('renders loader component snapshot', () => {
  const { asFragment } = render(
    <Loader />,
  );
  expect(asFragment()).toMatchSnapshot();
});
