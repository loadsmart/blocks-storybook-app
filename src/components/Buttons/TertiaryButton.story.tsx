import React from 'react'
import { storiesOf } from '@storybook/react-native'
import { withKnobs, text, select } from '@storybook/addon-knobs'
import { CenterPaddedDecorator } from '../../decorators'
import { TertiaryButton, ButtonDisplayStyle } from '@loadsmart/blocks'
import { Alert } from 'react-native'

storiesOf('Buttons', module)
  .addDecorator(withKnobs)
  .addDecorator(CenterPaddedDecorator)
  .add('Tertiary', () => {
    const title = text('Title', 'Skip for now')

    const displayStyle = select(
      'Style',
      {
        Dark: ButtonDisplayStyle.Dark,
        Light: ButtonDisplayStyle.Light,
      },
      ButtonDisplayStyle.Dark
    )

    const onPress = () => Alert.alert('onPress')

    const props = { title, displayStyle, onPress }
    return <TertiaryButton {...props} />
  })
