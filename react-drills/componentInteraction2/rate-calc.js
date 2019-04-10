import React from 'react';

import NumberInput from './number-input';
import Output from './output';

export default class RateCalculator extends React.Component {
    constructor(props) {
        super(props);
      
      this.state={
        rate: 3,
        hours:2
      }
    }
  
  changeRate() {
    this.setState({
      rate: null
    })
  }
  
  changeHours() {
    this.setState({
      hours: null
    })
  }

    render() {
        return (
            <form>
                <NumberInput id="day-rate" label="Day rate" min={0} max={5000} />
                <NumberInput id="hours" label="Hours" min={1} max={12} />
                <Output id="hourly-rate" label="Hourly rate" value={(this.state.rate * this.state.hours).toFixed(2)}
/>
            </form>
        );
    }
}

