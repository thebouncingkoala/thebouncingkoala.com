const path = require('path')

module.exports = {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: [path.resolve(__dirname, 'src/setupTests.js')],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      path.resolve(__dirname, '__mocks__/fileMock.js'),
    '\\.(css|pcss|sss)$': path.resolve(__dirname, '__mocks__/styleMock.js')
  }
}
