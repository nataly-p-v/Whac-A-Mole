import React, {Component} from 'react';
import './App.css';
import Hole from "./hole";

class App extends Component {
    constructor() {
        super();
        this.state = {
            score: 0,
            holes: [1,2,3,4,5,6],
            current: 0,
            time: null
        };
        this.changeCount = this.changeCount.bind(this)
        this.startGame = this.startGame.bind(this)
        this.test = this.test.bind(this)
    }

    changeCount(e) {
        this.setState({
            score: this.state.score + 1
        });
    }

    startGame(e) {
        e.preventDefault();
        console.log('start')
    }
    randomInteger(min, max){
            let rand = min - 0.5 + Math.random() * (max - min + 1)
            rand = Math.round(rand);
            return rand;

    }
    componentDidMount(){
       this.test()
    }
    test(){
        let self = this;
        setInterval(function() {
            let current = self.randomInteger(1, 6);
            self.setState({
                current: current
            });
        },1000);
    }

    render() {
        return (
            < div className="App">
                <h1>Whack-a-mole! <span className="score">{this.state.score}</span></h1>
                <button onClick={this.startGame}>Start!</button>
                <div className="game">
                {this.state.holes.map((elem, i) => {
                    return <Hole key={i} customClass={"hole"+i} changeCount={this.changeCount} customId={i} currentId={this.state.current}/>

                })}
                </div>
            </div>
        );
    }
}

export default App;