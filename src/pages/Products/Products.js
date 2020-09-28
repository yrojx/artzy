import React from 'react';
import { Info } from '../../components';
import { homeObjOne, homeObjTwo } from './Data';

function Products() {
  return (
    <>
      <Info {...homeObjOne} />
      <Info {...homeObjTwo} />
    </>
  );
}

export default Products;