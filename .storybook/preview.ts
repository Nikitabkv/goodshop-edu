import type { Preview } from "@storybook/react"

import "../src/shared/variables.scss"
import "../src/index.scss"

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
