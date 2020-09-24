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
  constructor(props) {
    super(props);
    this.state = {
      latitude: null,
      longitude: null,
      errorMessage: ''
    }

    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({latitude: position.coords.latitude})
        this.setState({longitude: position.coords.longitude})
      
      },
      (error) => { 
        this.setState({ errorMessage: error.message })
      }
    );
  }

  render(){
    return (
      <div>
        {this.state.latitude}
        <br />
        {this.state.longitude}
        <br />
        {this.state.errorMessage}
      </div>
    )
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));