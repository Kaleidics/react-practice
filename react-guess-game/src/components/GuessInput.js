import React from 'react';

export default class GuessInput extends React.Component{
        constructor(props) {
            super(props);
            
        }
        onSubmit(event){
            event.preventDefault();
           
            const guess = this.numInput.value.trim();
            alert(guess);
            if (guess && this.props.onSubmit) {
                this.props.onSubmit(guess);
            }
            this.numInput.value = '';
        }

        render(){
            return (
                <form onSubmit={e => this.onSubmit(e)} >
                    <input type='number' ref={input => (this.numInput = input)}></input>
                    <button type='submit'>Guess</button>
                </form>
            )
        }
       
        
      
}