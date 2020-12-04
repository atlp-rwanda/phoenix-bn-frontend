module.exports = {
    "coverageDirectory": "coverage",
    "verbose": true,
    "roots": [
      "./src/test"
    ],
    "transform": {
      "^.+\\.js?$": "babel-jest"
    },
    "setupFiles": [
      "./src/setupTests"
    ]
  }