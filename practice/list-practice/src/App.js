import React from 'react';
import './App.css';
import ValidationComponenet from './componenets/ValidationComponent/ValidationComponent';
import CharComponent from './componenets/CharComponent/CharComponent';

class App extends React.Component {

  // PROPS and STATES
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      lengthInput: 0,
      warningMessage: '',
      charSet: '',
      splitChars: []
    }
    this.inputHandler = this.inputHandler.bind(this);
    this.validateBlank = this.validateBlank.bind(this);
    this.splitter = this.splitter.bind(this);
    this.deleteHandler = this.deleteHandler.bind(this);
    }
  // MY METHODS
  inputHandler(event) {
    const text = event.target.value
    this.setState({
      input: text,
      })
    const lengthText = this.state.input.length
    this.setState({
      lengthInput: lengthText + 1
    }, function() {
      this.validateBlank()
      this.splitter()
    });

    const pushedChar = event.target.value
    this.setState({
      charSet: pushedChar
    })  }
 
  validateBlank() {
    if (this.state.input === '') {
      this.setState({
        lengthInput: 0
      })
    }
    if (this.state.lengthInput > 5) {
      this.setState({
        warningMessage: "Text long enough"
      }) } else {
        this.setState({
          warningMessage: "Text too short"
        })
      }
    }

    // to create method and 1 more state with sliced chars in this.state
  splitter() {
    const charSetCleared = this.state.charSet
    const slicedChars = charSetCleared.split('') 
    this.setState({
      splitChars: slicedChars
    })
  }


  // Method to delete CHAR COMPONENET
  // TODO need to pass ID to have unique char delete
  deleteHandler(index) {
    
    const splitChars = [...this.state.splitChars]
    splitChars.splice(index, 1);
    this.setState({
      splitChars: splitChars
    })

  }


  // RENDERING COMPONENTS
  render() {
    

    console.log(this.state.warningMessage)
    console.log(this.state.lengthInput)

    return(<div>
      <input onChange={this.inputHandler} placeholder="Input any value"></input>
      <ValidationComponenet 
          counter={this.state.lengthInput} 
          warningMessage={this.state.warningMessage}/>
      { this.state.splitChars.map((char, index) => <CharComponent 
          key={index} 
          slicedChars={char}
          click={() => {this.deleteHandler(index)}} />)} 
      </div>)
  }
} 

export default App;
