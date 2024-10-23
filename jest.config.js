module.exports = {
    preset: 'ts-jest',
    transform: { '^.+\\.ts?$': 'ts-jest' },
    testEnvironment: 'node',
    testRegex: '/tests/.*\\.(test|spec)?\\.(ts|tsx)$',
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
    moduleDirectories: ['node_modules', 'src'],
    moduleNameMapper: {
        '^~app/(.*)$': '<rootDir>/src/app/$1',
        '^~components/(.*)$': '<rootDir>/src/components/$1',
        '^~hooks/(.*)$': '<rootDir>/src/hooks/$1',
        '^~locales/(.*)$': '<rootDir>/src/locales/$1',
        '^~styles/(.*)$': '<rootDir>/src/styles/$1',
        '^~tests/(.*)$': '<rootDir>/src/tests/$1',
        '^~types/(.*)$': '<rootDir>/src/types/$1',
        '^~utils/(.*)$': '<rootDir>/src/utils/$1',
        '^~/(.*)$': '<rootDir>/src/$1',
    },
};
