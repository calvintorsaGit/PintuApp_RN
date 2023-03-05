interface supportedCurrencies {
  data: {
    payload: supportedCurrency[]
  }
}

interface priceChanges {
  data: {
    payload: priceChange[]
  }
}

interface supportedCurrency {
  color: string
  name: string
  logo: string
  currencySymbol: string
}

interface priceChange {
  latestPrice: number
  day: string
  pair: string
}

interface CombineData {
  latestPrice: number
  day: string
  pair: string
  color: string
  name: string
  logo: string
  currencySymbol: string
}

export type {
  supportedCurrencies,
  priceChanges,
  priceChange,
  supportedCurrency,
  CombineData
}
