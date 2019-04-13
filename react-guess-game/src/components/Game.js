
import React from 'react';

import Feedback from './Feedback';
import GuessInput from './GuessInput';
import GuessHistory from './GuessHistory';

export default class Game extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            CurrentAnswer: '',
            CorrectAnswer: Math.floor(Math.random() * Math.floor(100))
        }
    }

    updateCurrentAnswer(guess) {
        this.setState({
            CurrentAnswer: guess
        })
    }
    
    render(){
        return(

            <div><h2>The correct answer is {this.state.CorrectAnswer}</h2>
            <GuessInput onSubmit={guess => this.updateCurrentAnswer(guess)}/>
            <h2>The current answwer is {this.state.CurrentAnswer}</h2>
            </div>
           
        )
       
    }
}

