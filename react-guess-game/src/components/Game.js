
import React from 'react';

import Feedback from './Feedback';
import GuessInput from './GuessInput';

export default class Game extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            CurrentAnswer: '',
            CorrectAnswer: Math.floor(Math.random() * Math.floor(100)),
            feedback: 'Make a guess'
        }
    }

    updateCurrentAnswer(guess) {
        this.setState({
            CurrentAnswer: parseInt(guess)
        }, () => {
                if (this.state.CurrentAnswer === this.state.CorrectAnswer) {
                    this.setState({ 
                        feedback: 'You got it right',
                        CorrectAnswer: Math.floor(Math.random() * Math.floor(100))
                     })
                }

                else if (this.state.CurrentAnswer !== this.state.CorrectAnswer) {
                    this.setState({ feedback: 'Wrong try again' })
                }
        });

       
    }
    
    // feedbacker() {
    //     if (this.state.CurrentAnswer === this.state.CorrectAnswer) {
    //         this.setState({feedback: 'You got it right'})
    //     }
    //     else if (this.state.CurrentAnswer !== this.state.CorrectAnswer) {
    //         this.setState({ feedback: 'Wrong try again'})
    //     }
    // }

    render(){
        
        return(

            <div>
            <Feedback feedback={this.state.feedback}/>
            <h2>The correct answer is {this.state.CorrectAnswer}</h2>
            <GuessInput onSubmit={guess => this.updateCurrentAnswer(guess)}/>
            <h2>The current answwer is {this.state.CurrentAnswer}</h2>
            </div>
           
        )
       
    }
}

