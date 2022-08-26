// Write your JS code here
import {Component} from 'react'

import CryptocurrencyItem from '../CryptocurrencyItem'

import './index.css'

class CryptocurrenciesList extends Component {
  CryptoCurrenciesHeader = () => (
    <div className="header">
      <p className="heading">Coin Type</p>
      <div className="valuesContainer">
        <p className="valueHeading">USD</p>
        <p className="valueHeading">EURO</p>
      </div>
    </div>
  )

  CryptoCurrenciesView = () => {
    const {cryptoCurrenciesData} = this.props

    return (
      <div className="list">
        {this.CryptoCurrenciesHeader()}
        <ul className="body">
          {cryptoCurrenciesData.map(eachCryptoCurrencyData => (
            <CryptocurrencyItem
              key={eachCryptoCurrencyData.id}
              cryptoCurrencyData={eachCryptoCurrencyData}
            />
          ))}
        </ul>
      </div>
    )
  }

  render() {
    return (
      <div className="container">
        <h1 className="heading2">Cryptocurrency Tracker</h1>
        <img
          className="image1"
          src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
          alt="Cryptocurrency Tracker"
        />
        {this.CryptoCurrenciesView()}
      </div>
    )
  }
}

export default CryptocurrenciesList
