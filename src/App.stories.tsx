import { ComponentStory, ComponentMeta } from '@storybook/react'

import App from './App'

export default {
  title: 'CreateReactApp/App',
  component: App,
} as ComponentMeta<typeof App>

export const SampleApp: ComponentStory<typeof App> = function sample() {
  return <App />
}
