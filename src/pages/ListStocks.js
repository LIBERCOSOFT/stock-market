import React from 'react';
import { useParams } from 'react-router-dom';

const ListStocks = () => {
  const { id } = useParams();

  return (
    <div>{id}</div>
  );
};

export default ListStocks;
