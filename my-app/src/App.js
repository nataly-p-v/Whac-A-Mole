import React, {Component} from 'react';
import './App.css';
import Holes from "./components/holes/holes.js";
import GenerateGameButton from "./components/generateGame/generateGame.js";
import Counter from "./components/counter/counter.js";

class App extends Component {
    constructor() {
        super();
        this.state = {
            score: 0,
            numberOfHoles:0,
            holes: [],
            current: 0,
            isNotActive: true,
            interval: null
        };

        this.changeCount = this.changeCount.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.generateHoles = this.generateHoles.bind(this)
        this.stopInterval = this.stopInterval.bind(this)
    }
        generateHoles (event) {
         event.preventDefault();
          for (let i = 1; i <= this.state.numberOfHoles; i++){
              this.state.holes.push(i);
          }
          this.setState({isNotActive: false});
          this.startInterval();
        }
        handleChange(event) {
            event.preventDefault();
            this.setState({numberOfHoles: event.target.value});
        }

    changeCount(e) {
        this.setState({
            score: this.state.score + 1
        });
    }
    randomInteger(min, max){
            let rand = min - 0.5 + Math.random() * (max - min + 1)
            rand = Math.round(rand);
            return rand;

    }

    startInterval(){
        let self = this;

        let myInterval = setInterval(function() {
            let current = self.randomInteger(1, 6);
            self.setState({
                current: current
            });
        },1000);
        this.setState({
            interval: myInterval
        });
    }
    stopInterval(event) {
        clearInterval(this.state.interval);
    }

    render() {
        return (
            <div className="App">
            <GenerateGameButton className={this.state.isNotActive ? 'StartGameButton' : 'StartGameButton hidden'} handleChange={this.handleChange} generateHoles={this.generateHoles}/>
            <Counter className={this.state.isNotActive ? 'hidden' : 'visible'} stopInterval={this.stopInterval} score={this.state.score}/>
            <Holes currentId={this.state.current} number={this.state.holes} changeCount={this.changeCount}/>
            </div>
        );
    }
}

export default App;