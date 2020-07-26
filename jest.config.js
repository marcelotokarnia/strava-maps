module.exports = {
  globals: {
    'ts-jest': {
      tsConfig: 'tsconfig.json',
    },
  },
  moduleFileExtensions: ['ts', 'js', 'json', 'tsx'],
  modulePaths: ['src/'],
  reporters: ['default', 'jest-junit'],
  testEnvironment: 'node',
  testMatch: ['<rootDir>/src/**/*.spec.ts'],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
}
