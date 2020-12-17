module.exports = {
    "coverageDirectory": "coverage",
    "verbose": true,
    "roots": [
      "./src/test"
    ],"transform": {
      '^.+\\.jsx?$': 'babel-jest',
      '\\.(jpg|jpeg|png|css|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
        '<rootDir>src/config/assetsTransformer.js',
    },
    "setupFiles": [
      "./src/setupTests"
    ],"moduleNameMapper": {
      "^.*(jpe?g|png|css).*$": "<rootDir>src/config/assetsTransformer.js"
    },
    "testPathIgnorePatterns": ['\\\\node_modules\\\\'],
    "transformIgnorePatterns": ['<rootDir>/node_modules/']
  }