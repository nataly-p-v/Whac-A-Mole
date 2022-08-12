import * as React from 'react';
import './style.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numbers: [5, 13, 6, 2, 21, 40, 15],
    };
    this.sortOut = this.sortOut.bind(this);
  }
  sortOut() {
    let res = [];
    let res2 = [];
    this.state.numbers.map((elem, i) => {
      if (elem % 3 == 0) {
        res.push(elem);
      } else {
        res2.push(elem);
      }
    });
    let result = res.concat(res2);
    console.log(result);
  }
  render() {
    return (
      <div>
        <h1>Hello StackBlitz!!</h1>
        <p>Start editing to see some magic happen :)</p>
        {this.state.numbers.map((elem, i) => {
          return <li key={i}>{elem}</li>;
        })}
        <button onClick={this.sortOut}>Sortuj</button>
      </div>
    );
  }
}
export default App;
// W środowsku https://stackblitz.com/ napisz aplikację, która wyrenderuje listę liczb całowitych: [5, 13, 6, 2, 21, 40,15] oraz przycisk "Sortuj", którego naciśnięcie spowoduje posortowanie listy (i wyrenderowanie jej zgodnie z zadanym porządkiem sortowania).
// Zadany porządek sortowania: na początku wynikowej listy mają się znaleźć liczby podzielne przez 3 (bez reszty) a następnie pozostałe (niepodzielne przez 3).
// Przykładowy porządek spełniający powyższe kryteria sortowania: [6, 21, 15, 5, 13, 2, 40].
// ==========================================================
// Write an application in  https://stackblitz.com/ environment.
// The app should render the list of integer numbers: [5, 13, 6, 2, 21, 40, 15] and the button "Sort".
// When the button is pressed the list should be sorted and rendered accordingly.
// Sorting order: at the beginning of the list all numbers divisible by 3 occur followed by numbers non-divisible by 3.
// Exemplary correct order: [6, 21, 15, 5, 13, 2, 40].
