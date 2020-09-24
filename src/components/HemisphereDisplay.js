import React from 'react';

import northPic from '../img/north.jpg';
import southPic from '../img/south.jpg';


const HemisphereDisplay = ({latitude}) => {
  console.log(latitude)
  const hemisphere = latitude > 0 ? 'Nothern Hemisphere' : 'Southern Hemisphere';
  const picture = latitude > 0 ? northPic : southPic;

  return (
    <div>
      <img src={picture} alt="Hemisphere" style={{width:"300px"}}/>
      {hemisphere}
    </div>
  )
}

export default HemisphereDisplay;