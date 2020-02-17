import React from 'react';
import './App.scss';

const divStyle = {
  display: 'flex',
  justifyContent: 'center',
  flex: '1',
  alignItems: 'center',
  width: '100%',
  marginTop: '30%',
  flexWrap: 'wrap',
  flexDirection: 'column'
}

const pStyle = {
  fontWeight: 'bolder'
}

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      rbg: ''
    };
    this.handleRandomColorGen = this.handleRandomColorGen.bind(this);
    this.applyColor = this.applyColor.bind(this);
  }

  handleRandomColorGen() {
    const genRed = Math.floor(Math.random() * (256 - 0 + 1)) + 0; 
    const genBlue = Math.floor(Math.random() * (256 - 0 + 1)) + 0; 
    const genGreen = Math.floor(Math.random() * (256 - 0 + 1)) + 0; 
    const opacity = Math.random() * (1 - 0) + 0;
    const roundedOpacity = opacity.toFixed(2)

    const generatedColor = `rgba(${genRed}, ${genBlue}, ${genGreen}, ${roundedOpacity})`

    this.setState({
      rbg: generatedColor
    })
    this.applyColor()
  }
  applyColor() {
    const color = this.state.rbg;
    document.body.style.background = color
  }

  render() {


    return(
    <div style={divStyle}>
      <button 
        className="btn-flip"
        data-back="COLOR" data-front="GENERATE"
        onClick={this.handleRandomColorGen}/>
        {this.state.rbg !== '' ? <p style={pStyle}> 💅{this.state.rbg}</p> : ''}
    </div>)
  }
}
export default App;
