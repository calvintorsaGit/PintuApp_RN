import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { SvgUri } from 'react-native-svg'
import Icon from 'react-native-vector-icons/Ionicons'

interface TokenItemListProps {
  latestPrice: number
  color: string
  name: string
  logo: string
  currencySymbol: string
  day: string
}

interface IconProps {
  name: string
  size: number
  color: string
}

const getIconProps = (props: TokenItemListProps): IconProps => {
  return {
    name: parseFloat(props.day) > 0 ? 'caret-up-sharp' : 'caret-down-sharp',
    size: 16,
    color: parseFloat(props.day) > 0 ? 'green' : 'red'
  }
}

const formatToRupiah = (number: number): string => {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR'
  }).format(number).replace('Rp', 'Rp ')
}

const TokenItemList = (props: TokenItemListProps): JSX.Element => {
  return <View style={styles.container}>
      <SvgUri
          width="32"
          height="32"
          color={props.color}
          uri={props.logo}
      />
      <View style={styles.tokenNameContainer}>
          <Text style={{ fontWeight: 'bold' }}>{props.name}</Text>
          <Text>{props.currencySymbol}</Text>
      </View>
      <View style={styles.priceContainer}>
          <Text style={{ fontWeight: 'bold' }}>
              {formatToRupiah(props.latestPrice)}
          </Text>
          <View style={styles.priceChangeContainer}>
              <Icon {...getIconProps(props)}/>
              <Text style={{ color: parseFloat(props.day) > 0 ? 'green' : 'red' }}>
                  {props.day}
              </Text>
          </View>
      </View>
    </View>
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    margin: 20
  },
  tokenNameContainer: {
    marginHorizontal: 12
  },
  priceContainer: {
    alignItems: 'flex-end',
    alignContent: 'flex-end',
    flex: 1
  },
  priceChangeContainer: {
    flexDirection: 'row'
  }
})

export default TokenItemList
