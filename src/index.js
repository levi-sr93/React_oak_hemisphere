import React from 'react';
import ReactDOM from 'react-dom';

// const App = () => {

//   //getting user location
//   window.navigator.geolocation.getCurrentPosition(
//     (position) => {console.log(position)},
//     (error) => { console.log(error)}
//   );
//   return (
//     <div>
//       latitude:  
//     </div>
//   )
// }

class App extends React.Component {
  render(){
    window.navigator.geolocation.getCurrentPosition(
          (position) => {console.log(position)},
          (error) => { console.log(error)}
        );
    return (
      <div>You are in the northern Hemisphere.</div>
    )
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));