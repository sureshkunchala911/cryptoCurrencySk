// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'

import CryptocurrenciesList from '../CryptocurrenciesList'

import './index.css'

class CryptocurrencyTracker extends Component {
  state = {
    cryptoCurrenciesData: [],
    isLoading: true,
  }

  componentDidMount() {
    this.getCryptoCurrencies()
  }

  getCryptoCurrencies = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const fetchedData = await response.json()
    const data = fetchedData.map(eachCryptoCurrency => ({
      id: eachCryptoCurrency.id,
      currencyLogoUrl: eachCryptoCurrency.currency_logo,
      currencyName: eachCryptoCurrency.currency_name,
      usdValue: eachCryptoCurrency.usd_value,
      euroValue: eachCryptoCurrency.euro_value,
    }))
    this.setState({cryptoCurrenciesData: data, isLoading: false})
  }

  CryptocurrenciesList = () => {
    const {cryptoCurrenciesData} = this.state

    return <CryptocurrenciesList cryptoCurrenciesData={cryptoCurrenciesData} />
  }

  Loading = () => (
    <div testid="loader">
      <Loader type="Rings" color="#ffffff" height={80} width={80} />
    </div>
  )

  render() {
    const {isLoading} = this.state

    return (
      <div className="container">
        {isLoading ? this.Loading() : this.CryptocurrenciesList()}
      </div>
    )
  }
}

export default CryptocurrencyTracker
