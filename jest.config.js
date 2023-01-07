module.exports = {
    transform: {'^.+\\.ts?$': 'ts-jest'},
    testEnvironment: 'jsdom',
    testRegex: '/tests/jest/.*\\.(test|spec)?\\.ts$',
    moduleFileExtensions: ['ts', 'js']
}
