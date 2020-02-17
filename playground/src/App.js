import React from 'react';
import './App.css';
import axios from 'axios';

class App extends React.Component {

  state = {
    rates: [],
    cryptoFilter: ["Bitcoin", "Ether"]
    }
  onSubmitExchange = this.onSubmitExchange.bind(this);

  onSubmitExchange() {
    axios({
      "method":"GET",
      "url":"https://coingecko.p.rapidapi.com/exchange_rates",
      "headers":{
      "content-type":"application/octet-stream",
      "x-rapidapi-host":"coingecko.p.rapidapi.com",
      "x-rapidapi-key":"f4756b8409msh762478a357cd070p10685fjsnce9080fa5478"
      }
      })
      .then((response)=>{
        //console.log(response)
        //response is an object with a data property that contains the rates
        this.setState({rates: response.data.rates})
      })

  }
  
    render() {

      const cryptos = this.state.rates;

      Object.entries(cryptos).map(rate => {
        console.log(rate[1].name) //​​​​​{ USD: 6766.97 }, ​​​​​{ USD: 278.22 }...
      })



      const cryptoTable = Object.entries(cryptos).map((crypto, index) => {
        return (<tr>
                  <td key={index}>{crypto[1].name}</td>
                  <td>{crypto[1].unit}</td>
                  <td>{crypto[1].value}</td>
                  <td className="tag">{crypto[1].type}</td>
               </tr>)})


      return (
        <div>
          <div className="cryptoTable">
              { cryptoTable }
            <button onClick={this.onSubmitExchange}>FIRE</button>
            <button onClick={this.onFilterHandler}>Filter</button>
          </div>

        </div>
      )

    }
}

export default App;
