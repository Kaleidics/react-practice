import React from 'react';

import NumberInput from './number-input';
import Output from './output';

export default class RateCalculator extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            rate: 0,
            hours: 0
        }
    }

    changeRate(rate) {
        this.setState({
            rate: rate
        })
    }

    changeHours(hours) {
        this.setState({
            hours: hours
        })
    }

    render() {
        return (
            <form>
                <NumberInput id="day-rate" label="Day rate" min={0} max={5000} value={this.state.rate} onChange={(value) => this.changeRate(value)} />
                <NumberInput id="hours" label="Hours" min={1} max={12} value={this.state.hours} onChange={(value) => this.changeHours(value)} />
                <Output id="hourly-rate" label="Hourly rate" value={(this.state.rate * this.state.hours).toFixed(2)}
                />
            </form>
        );
    }
}

