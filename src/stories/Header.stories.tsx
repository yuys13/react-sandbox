import { StoryFn, Meta } from '@storybook/react'

import { Header } from './Header'

export default {
  title: 'Example/Header',
  component: Header,
} as Meta<typeof Header>

const Template: StoryFn<typeof Header> = function template(args) {
  return <Header {...args} />
}

export const LoggedIn = {
  render: Template,

  args: {
    user: {},
  },
}

export const LoggedOut = {
  render: Template,
  args: {},
}
