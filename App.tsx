import React, { Component } from 'react'
import { YellowBox } from 'react-native'
import StorybookUI from './StorybookUI'
import { Theme, ThemeContext } from '@loadsmart/blocks'

const theme: Theme = {
  primaryColor: '#14d64d',
}

class App extends Component {
  render() {
    YellowBox.ignoreWarnings(['Warning: Async Storage has been extracted from react-native core'])
    return (
      <ThemeContext.Provider value={theme}>
        <StorybookUI />
      </ThemeContext.Provider>
    )
  }
}

export default App
