import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchStocks } from '../redux/homepage/homepage';

const Homepage = () => {
  const allStocks = useSelector((state) => state.allStocks.data);

  const dispatch = useDispatch();
  useEffect(() => {
    if (allStocks.length < 1) {
      dispatch(fetchStocks());
    }
  }, [dispatch, allStocks]);

  return (
    <div>
      <h1>Homepage</h1>
    </div>
  );
};

export default Homepage;
