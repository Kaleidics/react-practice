import React from 'react';

import SurpriseButton from './surprise-button';
import SurpriseImage from './surprise-image';

export default class Surprise extends React.Component {
    constructor(props) {
        super(props);
      
      this.state ={
        showPic: false
      }
    }
  
  showPic() {
    this.setState ({
      showPic: true
    })
  }
  
  hidePic() {
    this.setState ({
      showPic: false
    })
  }

    render() {
        // Show the button to start with
     if(this.state.showPic === false) {
       return <SurpriseButton onClick={() => this.showPic()}/>
     }
      
      else if(this.state.showPic === true) {
        return <SurpriseImage onClick={() => this.hidePic()}/>
      }
     
    }
}
