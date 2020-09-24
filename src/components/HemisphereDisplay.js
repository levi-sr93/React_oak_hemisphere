import React from 'react';
import './Hemisphere.css'

import northPic from '../img/north.jpg';
import southPic from '../img/south.jpg';

const hemisphereConfig = {
  Northern: {
    text: 'it is northern hemisphere',
    picture: northPic
  },
  Southern: {
    text: 'it is southern hemisphere',
    picture: southPic
  }
}

const HemisphereDisplay = ({latitude}) => {
  console.log(latitude)
  const hemisphere = latitude > 0 ? 'Northern' : 'Southern';
  const {text, picture} = hemisphereConfig[hemisphere]

  return (
    <div className={hemisphere}>
      <div className="ui raised text container segment">
        <div className="image">
          <img src={picture} alt="Hemisphere"/>
        </div>
        <div className="ui teal bottom attached label">
          <h1>{text}</h1>
        </div>
      </div>
    </div>
  )
}

export default HemisphereDisplay;