import React from 'react'
import Center from '../Center'

import MenuItem from './MenuItem'

export default {
  title: 'Navbar/MenuItem',
  component: MenuItem,
  decorators: [(Story) => (
    <Center>
      <Story />
    </Center>
  )]
}

const Template = (args) => <MenuItem {...args} />

export const ItemDark = Template.bind({})
ItemDark.args = {
  link: 'Hello',
  dark: true,
  setShowMenu: null
}
export const ItemLight = Template.bind({})
ItemLight.args = {
  link: 'Hello',
  dark: false,
  setShowMenu: null
}
