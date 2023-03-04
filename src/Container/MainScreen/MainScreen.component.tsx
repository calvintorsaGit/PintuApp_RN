import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Icon from 'react-native-vector-icons/Ionicons'

import Dummy from '../../Component/Dummy/Dummy.component'
import Market from '../Market/Market'

const Tab = createBottomTabNavigator()

const _getTabBarIcon = (route: { name: string }, focused: boolean, color: string, size: number): JSX.Element => {
  let iconName: string = ''

  if (route.name === 'Home') {
    iconName = focused ? 'home' : 'home-outline'
  } else if (route.name === 'Account') {
    iconName = focused ? 'ios-list' : 'ios-list-outline'
  } if (route.name === 'Discover') {
    iconName = focused ? 'newspaper' : 'newspaper-outline'
  } if (route.name === 'Market') {
    iconName = focused ? 'stats-chart' : 'stats-chart-outline'
  } if (route.name === 'Wallet') {
    iconName = focused ? 'wallet' : 'wallet-outline'
  }

  return <Icon name={iconName} size={size} color={color} />
}

const MainScreen = (): JSX.Element => {
  return (<Tab.Navigator screenOptions={({ route }) => (
    {
      tabBarIcon: ({ focused, color, size }) => _getTabBarIcon(route, focused, color, size),
      tabBarActiveTintColor: 'black',
      tabBarInactiveTintColor: 'gray'
    }
  )}>
    <Tab.Screen name="Home" component={Dummy} />
    <Tab.Screen name="Discover" component={Dummy} />
    <Tab.Screen name="Market" component={Market} />
    <Tab.Screen name="Wallet" component={Dummy} />
    <Tab.Screen name="Account" component={Dummy} />
  </Tab.Navigator>)
}

export default MainScreen
