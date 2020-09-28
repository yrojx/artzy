import React from 'react';
import { Info } from '../../components';
import { homeObjOne, homeObjThree } from './Data';

function SignUp() {
  return (
    <>
      <Info {...homeObjOne} />
      <Info {...homeObjThree} />
    </>
  );
}

export default SignUp;