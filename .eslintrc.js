module.exports = {
  "env": {
      "browser": true,
      "es6": true,
      "node": true
  },
  "extends": [
    "eslint:recommended",
    "google",
    "plugin:react/recommended"
  ],
  "parser": "babel-eslint",
  "parserOptions": {
      "ecmaFeatures": {
          "jsx": true
      },
      "ecmaVersion": 2018,
      "sourceType": "module"
  },
  "plugins": [
    "react",
    "babel"
  ],
  "rules": {
    "no-invalid-this": 0,
    "babel/no-invalid-this": 1,
  },
  "settings": {
    "react": {
      "version": "16.7"
    }
  }
};
