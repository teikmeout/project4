import React from 'react';
import './App.css';
import walphin from '../../public/parking.jpg';

// let's try our login modal
import LoginModal from '../LoginModal/LoginModal.jsx';
// trying signup modal
import SignupModal from '../SignupModal/SignupModal.jsx';

class App extends React.Component {
  // METHOD: constructor is our instance creator and holds the state creation process
  constructor() {
    // when we use classes, sometimes we want the class to inherit properties of it's parent
    // this is when we call thos properties and make them ours too
    super();
    this.state = {
      truth: 'fuck yeah'
    }

  } // end of constructor method

  toggleSignin(e) {
    console.log('inside toggle');
    let modal = document.querySelector('.signin-modal-brackground');
    if (modal.style.display == "" || modal.style.display == 'none') {
      modal.style.display = 'flex';
    } else if (modal.style.display == 'flex') {
      modal.style.display = 'none';
    }
  }
        // <LoginModal
        //   toggleSignin={event => this.toggleSignin(event)}
        // />
        // <SignupModal/>

  // METHOD: render will finally throw stuff out to the hook
  render() {
    return(
      <div className="background-app">

      </div>
    )
  }

}

// DO NOT FORGET TO EXPORT YOUR SHIT
export default App;
