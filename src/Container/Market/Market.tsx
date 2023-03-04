import React from 'react'
import { FlatList, Text, View } from 'react-native'
import TokenItemList from '../../Component/TokenItemList/TokenItemList.component'
import { useQuery } from 'react-query'
import axios from 'axios'

const fetchSupportedCurrencies = async () => {
  const supportedCurrencies = await axios.get('https://api.pintu.co.id/v2/wallet/supportedCurrencies')
  const priceChanges = await axios.get('https://api.pintu.co.id/v2/trade/price-changes')

  const result = supportedCurrencies?.data.payload.map(item => {
    const tokenPricesChanges = priceChanges.data.payload.find(({ pair }) => pair.split('/')[0] ===
        item.currencySymbol.toLowerCase())
    return { ...item, ...tokenPricesChanges }
  })
  result.shift()
  return result
}

const _renderTokenList = (data: any) => {
  return <FlatList data={data} keyExtractor={(item) => `${item.currencySymbol}`}
                   renderItem={currentItem => <TokenItemList {...currentItem.item}/>}/>
}

const Market = (): JSX.Element => {
  const { data, isLoading, isSuccess } = useQuery('supportedCurrencies', fetchSupportedCurrencies)

  return <View style={{ backgroundColor: 'white' }}>
    {isLoading && (
        <React.Fragment>
          <Text>Loading...</Text>
        </React.Fragment>
    )}
    {isSuccess && _renderTokenList(data)}
  </View>
}

export default Market
