import React from 'react';
import './App.css';
import Result from './components/Result/Result';
import Button from './components/Button/Button';


const buttonValues = ["AC", "%", "/", "*", "7", "8", "9", "-", "4", "5", "6", "+", "1", "2", "3", ".", "0", "="]

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      resultInput: ''
    }
    this.calculate = this.calculate.bind(this);
    this.inputHandler = this.inputHandler.bind(this);
  }

  // METHODS handling calculation
  calculate() {

    const resultEval = eval(this.state.resultInput)
    this.setState({
      resultInput: resultEval
    })
  }

  inputHandler(value) {

    if (value === "=") {
      this.calculate()

    } else if (value === "AC") {
      this.setState({
        resultInput: ''
      })
    } else if (value === '%') { 
      const percentcalc = eval(this.state.resultInput / 100) // Calculation of percent
      this.setState({
        resultInput: percentcalc
      })

    } else {
    this.setState({
      resultInput: this.state.resultInput + value
    })
  }
  }

  render() {

    return(
    
    <div className="container">
      <Result resultInput={this.state.resultInput} />
      {buttonValues.map((value, index) => {
        return <Button key={index} value={value} onClick={this.inputHandler}/>
      })}
    </div>)


  }
}

export default App;
