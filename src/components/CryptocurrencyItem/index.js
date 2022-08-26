// Write your JS code here
import './index.css'

const CryptocurrencyItem = props => {
  const {cryptoCurrencyData} = props

  return (
    <li className="container1">
      <div className="container2">
        <img
          className="logo"
          src={cryptoCurrencyData.currencyLogoUrl}
          alt={cryptoCurrencyData.currencyName}
        />
        <p className="name">{cryptoCurrencyData.currencyName}</p>
      </div>
      <div className="valuesContainer">
        <p className="value">{cryptoCurrencyData.usdValue}</p>
        <p className="value">{cryptoCurrencyData.euroValue}</p>
      </div>
    </li>
  )
}

export default CryptocurrencyItem
