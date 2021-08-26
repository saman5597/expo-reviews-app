import React, { Component } from 'react'
import { StatusBar } from 'expo-status-bar';
import * as Font from 'expo-font'
import AppLoading from 'expo-app-loading'
import Home from './components/Home';

export default class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      fontsLoaded: false
    }
  }

  getFonts = async () => {
    Font.loadAsync({
      'nunito_regular': require('./assets/fonts/Nunito-Regular.ttf'),
      'nunito_bold': require('./assets/fonts/Nunito-Bold.ttf')
    })
  }

  componentDidMount() {
    this.getFonts()
    this.setState({ fontsLoaded: true })
  }

  render() {
    if (this.state.fontsLoaded) {
      return (
        <>
          <Home />
          <StatusBar style="auto" backgroundColor="#ededed" />
        </>
      )
    } else {
      return (
        <AppLoading startAsync={this.getFonts} onError={console.warn} onFinish={() => this.setState({ fontsLoaded: true })} />
      )
    }
  }
}