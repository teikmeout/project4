import React from 'react';
import './App.css';
import '../../normalize.css'
import walphin from '../../public/parking.jpg';

// let's try our login modal
import LoginModal from '../LoginModal/LoginModal.jsx';
// trying signup modal
import SignupModal from '../SignupModal/SignupModal.jsx';
// checking landing page
import LandingPage from '../LandingPage/LandingPage.jsx';


class App extends React.Component {
  // METHOD: constructor is our instance creator and holds the state creation process
  constructor() {
    // when we use classes, sometimes we want the class to inherit properties of it's parent
    // this is when we call thos properties and make them ours too
    super();
    this.state = {
      center: {
        lat: 40.7399943,
        lng: -73.9896909
      },
      coordinates: {
        lat: 40.7399943,
        lng: -73.9896909
      }
    }

  } // end of constructor method

  showPosition(position) {
    console.log('inside showposition');
    let display = document.querySelector('.catcher')
    this.setState({
        lat: position.coords.latitude,
        lng: position.coords.longitude
      });
     console.log('this is the setState --> ', this.state);
    display.innerHTML = "Latitude: " + position.coords.latitude +
    "<br>Longitude: " + position.coords.longitude;
  }

  // THIS IS ME BEING HOPEFUL OF THIS SETTING STATE CORRECTLY
  getLocation() {
    console.log('inside get location');
    let display = document.querySelector('.catcher')
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
          this.setState({
            center: {
              lat: position.coords.latitude,
              lng: position.coords.longitude
            }
          })
          console.log(this.state.center.lat, this.state.center.lng);
        });
    } else {
        display.innerHTML = "Geolocation is not supported by this browser.";
    }
  }
  // I want to see if I can get the location on load
  // and then change the state of the pin


  toggleSignin(e) {
    console.log('inside toggle');
    let modal = document.querySelector('.signin-modal-brackground');
    if (modal.style.display == "" || modal.style.display == 'none') {
      modal.style.display = 'flex';
    } else if (modal.style.display == 'flex') {
      modal.style.display = 'none';
    }
  }

  render() {
    return(
      <div className="background-app">
        {this.props.children && React.cloneElement(this.props.children, {
          center: this.state.center,
          coordinates: this.state.coordinates,
          getLocation: () => this.getLocation(),
          toggleSignin: () => this.toggleSignin,
        })}
      </div>
    )
  }

}

// DO NOT FORGET TO EXPORT YOUR SHIT
export default App;
