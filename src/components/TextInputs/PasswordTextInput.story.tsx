import { PasswordTextInput } from '@loadsmart/blocks'
import { storiesOf } from '@storybook/react-native'
import React from 'react'
import { CenterPaddedDecorator } from '../../decorators'

storiesOf('Text Inputs', module)
  .addDecorator(CenterPaddedDecorator)
  .add('Password', () => {
    return <PasswordTextInput>s3cr3tp4ss</PasswordTextInput>
  })
