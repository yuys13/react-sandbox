import { StoryFn, Meta } from '@storybook/react'

import { Page } from './Page'
import * as HeaderStories from './Header.stories'

export default {
  title: 'Example/Page',
  component: Page,
} as Meta<typeof Page>

const Template: StoryFn<typeof Page> = function template(args) {
  return <Page {...args} />
}

export const LoggedIn = {
  render: Template,

  args: {
    // More on composing args: https://storybook.js.org/docs/react/writing-stories/args#args-composition
    ...HeaderStories.LoggedIn.args,
  },
}

export const LoggedOut = {
  render: Template,

  args: {
    ...HeaderStories.LoggedOut.args,
  },
}
