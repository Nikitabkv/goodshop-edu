/// <reference types="vitest/config" />
import defineConfig from "./vite.config"
import {defineConfig as vitestConfig, mergeConfig} from "vitest/config"

export default mergeConfig(
  defineConfig,
  vitestConfig({
    test: {
      environment: 'jsdom',
      setupFiles: ['./vitest.setup.ts'],
    },
  })
)
