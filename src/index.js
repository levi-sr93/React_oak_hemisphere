import React from 'react';
import ReactDOM from 'react-dom';
class App extends React.Component {
  
  state = {
    latitude: null,
    errorMessage: ''
  }

  //will automatically be called one time when the component first gets rendered in the screen. 
  componentDidMount(){
    //getting user location
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

  componentDidUpdate(){
    console.log('Component did update');
  }

  render() {
      if(this.state.errorMessage && !this.state.latitude) {
        return <div>{this.state.errorMessage}</div>
      }

      if(!this.state.errorMessage && this.state.latitude) {
        return <div>{this.state.latitude}</div>
      }
      else {
        return <div>Loading...</div>
      }
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));