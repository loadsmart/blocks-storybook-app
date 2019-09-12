import { PinCodeTextInput } from '@loadsmart/blocks'
import { State, Store } from '@sambego/storybook-state'
import { storiesOf } from '@storybook/react-native'
import React from 'react'
import { CenterDecorator } from '../../decorators'

const numberOfDigits = 6

const store = new Store({
  digits: [...Array(numberOfDigits)].map(_ => ''),
})

storiesOf('Text Inputs', module)
  .addDecorator(CenterDecorator)
  .add('Pin Code', () => {
    return (
      <State store={store}>
        <PinCodeTextInput onChangeInput={text => store.set({ digits: text.split('') })} />
      </State>
    )
  })
