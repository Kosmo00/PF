import React from 'react'

import Menu from './Menu'
import Center from '../Center'

export default {
  title: 'Navbar/Menu',
  component: Menu,
  decorators: [
    (Story) => (
      <Center>
        <Story />
      </Center>
    )
  ]
}

const Template = (args) => <Menu {...args} />

export const Dark = Template.bind({})
Dark.args = {
}

export const Light = Template.bind({})
Light.args = {
  dark: false
}
