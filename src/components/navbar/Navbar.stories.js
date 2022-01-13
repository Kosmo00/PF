import React from 'react'

import { Navbar } from './Navbar'

export default {
  title: 'Navbar/Navbar',
  component: Navbar

}

const Templete = (args) => <Navbar {...args} />

export const Dark = Templete.bind({})

Dark.args = {
  dark: true
}
export const Light = Templete.bind({})

Light.args = {
  dark: false
}
