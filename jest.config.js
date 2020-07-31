module.exports = {
  globals: {
    'ts-jest': {
      tsConfig: 'tsconfig.json',
    },
  },
  moduleFileExtensions: ['ts', 'js', 'json', 'tsx'],
  moduleNameMapper: {
    '@src$': '<rootDir>/src',
    '@src/(.*)': '<rootDir>/src/$1',
  },
  reporters: ['default', 'jest-junit'],
  testEnvironment: 'node',
  testMatch: ['<rootDir>/src/**/*.spec.ts'],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
}
