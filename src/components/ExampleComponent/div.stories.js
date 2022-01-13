import React from 'react'
import { ExampleComponent } from '.'
import Center from '../Center'

export default {
  component: ExampleComponent,
  title: 'Main/div',
  args: {
    children: 'Hello World'
  },
  decorators: [
    (Story) => (
      <Center>
        <Story />
      </Center>
    )
  ]
}

const Template = (args) => <ExampleComponent {...args} />

export const Info = Template.bind({})
Info.args = {
  textColor: 'info'
}

export const Light = Template.bind({})
Light.args = {
  textColor: 'light'
}
