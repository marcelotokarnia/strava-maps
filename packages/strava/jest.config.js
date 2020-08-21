module.exports = {
  collectCoverage: true,
  collectCoverageFrom: ['<rootDir>/src/**/*.ts'],
  coveragePathIgnorePatterns: ['<rootDir>/src/typings/'],
  globals: {
    'ts-jest': {
      tsConfig: 'tsconfig.json',
    },
  },

  moduleFileExtensions: ['ts', 'js', 'json'],
  reporters: ['default', 'jest-junit'],
  testEnvironment: 'node',
  testMatch: ['<rootDir>/src/**/*.spec.ts', '<rootDir>/package.json.spec.ts'],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
}
