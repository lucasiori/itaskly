module.exports = {
  roots: ['<rootDir>/src'],
  collectCoverageFrom: [
    '<rootDir>/src/**/*.{ts,tsx}',
    '!<rootDir>/src/**/index.ts',
    '!**/*.d.ts',
  ],
  coverageDirectory: 'coverage',
  testPathIgnorePatterns: ['<rootDir>/node_modules'],
  testEnvironment: 'jsdom',
  transform: {
    '.+\\.(ts|tsx)$': 'ts-jest',
  },
  moduleNameMapper: {
    '^@domain/(.*)': '<rootDir>/src/domain/$1',
    '^@data/(.*)': '<rootDir>/src/data/$1',
    '^@infra/(.*)': '<rootDir>/src/infra/$1',
    '^@presentation/(.*)': '<rootDir>/src/presentation/$1',
    '^@main/(.*)': '<rootDir>/src/main/$1',
  },
  setupFilesAfterEnv: ['<rootDir>/jest-setup.ts'],
};
