/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { QueryClient, QueryClientProvider } from 'react-query'

import MainScreen from './src/Container/MainScreen/MainScreen.component'

const queryClient = new QueryClient()

function App (): JSX.Element {
  return (<NavigationContainer>
      <QueryClientProvider client={queryClient}>
      <MainScreen/>
      </QueryClientProvider>
  </NavigationContainer>)
}

export default App
