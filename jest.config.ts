import type { Config } from '@jest/types'

const config: Config.InitialOptions = {
  verbose: true,
  testMatch: ['**/?(*.)+(spec|test).+(ts|tsx|js)'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
}

export default config
