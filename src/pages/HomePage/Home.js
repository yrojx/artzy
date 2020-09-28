import React from 'react'
import { Info } from '../../components'
import Pricing from '../../components/Pricing/Pricing'
import { homeObjFour, homeObjOne, homeObjThree, homeObjTwo } from './Data'

const Home = () => {

  return (
    <>
      <Info {...homeObjOne} />
      <Info {...homeObjTwo} />
      <Info {...homeObjThree} />
      <Pricing />
      <Info {...homeObjFour} />
    </>
  )
}

export default Home
