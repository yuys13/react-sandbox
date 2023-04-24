import { StoryFn, Meta } from '@storybook/react'

import App from './App'

export default {
  title: 'CreateReactApp/App',
  component: App,
} as Meta<typeof App>

export const SampleApp: StoryFn<typeof App> = function sample() {
  return <App />
}
