import React from 'react';

const HemisphereDisplay = ({latitude}) => {
  console.log(latitude)
  const hemisphere = latitude > 0 ? 'Nothern Hemisphere' : 'Southern Hemisphere';
  return (
    <div>
      {hemisphere}
    </div>
  )
}

export default HemisphereDisplay;