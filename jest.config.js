const esModules = ['@arnold', '@zeiss/zui-theme'].join('|');

module.exports = {
  setupFilesAfterEnv: ['<rootDir>/jest-setup.ts'],
  preset: 'ts-jest/presets/js-with-ts',
  testEnvironment: 'jsdom',
  clearMocks: true,

  extensionsToTreatAsEsm: ['.ts', '.tsx'],

  collectCoverage: true,
  collectCoverageFrom: [
    '**/src/**/*.{ts,tsx}',
    '!**/src/**/index.{ts,tsx}',
    '!**/src/**/(types).ts',
    '!**/dist/**/*',
  ],
  coverageProvider: 'v8',
  coverageReporters: ['html', 'text-summary'],
  coverageThreshold: {
    global: {
      branches: 90,
      functions: 95,
      lines: 95,
      statements: 95,
    },
  },
  reporters: ['default', ['jest-junit', { outputDirectory: 'coverage' }]],

  transformIgnorePatterns: [`/node_modules/(?!${esModules})`, 'jest-setup.js'],
};
