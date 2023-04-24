import { StoryFn, Meta } from '@storybook/react'

import { Button } from './Button'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Button',
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta<typeof Button>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof Button> = function template(args) {
  return <Button {...args} />
}

export const Primary = {
  render: Template,

  args: {
    primary: true,
    label: 'Button',
  },
}

export const Secondary = {
  render: Template,

  args: {
    label: 'Button',
  },
}

export const Large = {
  render: Template,

  args: {
    size: 'large',
    label: 'Button',
  },
}

export const Small = {
  render: Template,

  args: {
    size: 'small',
    label: 'Button',
  },
}
