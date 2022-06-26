import React from 'react';
import axios from 'axios';

import './App.css';

class App extends React.Component{
    state= {advice: ''};

    componentDidMount(){
        this.fetchAdvice();
    }

    fetchAdvice= () =>{
        axios.get('https://api.adviceslip.com/advice')
                .then((response)=> {
                 //   console.log(response.data.slip.advice);         or can also follow below syntax
                 const { advice }= response.data.slip;                 // generally used syntax
                 this.setState({ advice });
                })
                .catch((error) =>{
                    console.log(error);
                });
    }

    render(){
        const {advice} = this.state;
        return (
            <div className="app">
                <div className='card'>
                    <h1 className='heading'>{advice}</h1>
                    <button className='button' onClick={this.fetchAdvice}>
                        <span>GIVE ME ADVICE</span>
                    </button>
                </div>
            </div>
        );
    }
}

export default App;