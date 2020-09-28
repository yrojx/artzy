import React from 'react';
import { Info, Pricing } from '../../components';
import { homeObjOne, homeObjThree } from './Data';

function Services() {
  return (
    <>
      <Pricing />
      <Info {...homeObjOne} />
      <Info {...homeObjThree} />
    </>
  );
}

export default Services;