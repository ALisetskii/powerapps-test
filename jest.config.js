const baseConfig = require('./jest-base');

/** @type {import('@jest/types').Config.InitialOptions} */

module.exports = {
  ...baseConfig,
  moduleNameMapper: {
    '^@root(.*)$': '<rootDir>/src$1',
    '^@shared(.*)$': '<rootDir>/src/shared$1',
    '^@entities(.*)$': '<rootDir>/src/entities$1',
    '^@features(.*)$': '<rootDir>/src/features$1',
    '^@widgets(.*)$': '<rootDir>/src/widgets$1',
    '^@pages(.*)$': '<rootDir>/src/pages$1',
    '^@processes(.*)$': '<rootDir>/src/processes$1',
  },
  rootDir: '.',
  testMatch: ['<rootDir>/src/**/*.test.ts'],
  collectCoverageFrom: [
    '<rootDir>/src/**/*.ts',
    '!<rootDir>/src/**/*.d.ts',
    '!<rootDir>/src/**/*.spec.ts',
    '!<rootDir>/src/**/*.test.ts',
    '!<rootDir>/src/**/__*__/*',
    '!<rootDir>/src/util/testing.ts',
  ],
  cacheDirectory: '<rootDir>/.cache/unit',
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
    '^.+\\.jsx?$': 'ts-jest',
  },
};
