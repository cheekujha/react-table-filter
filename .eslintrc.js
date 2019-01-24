module.exports = {
    "env": {
        "browser": true,
        "es6": true,
        "node": true
    },
    "extends": [
      "eslint:recommended",
      "plugin:react/recommended",
      "google"
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
        "indent": [
            "error",
            2
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "semi": [
            "warn",
            "always"
        ],
        "max-len": [
          "warn",
          {
            "code": 80,
            "ignoreUrls": true
          }
        ],
        "babel/semi": 1,
        "no-invalid-this": 0,
        "babel/no-invalid-this": 1
    },
    "settings": {
      "react": {
        "version": "15.3"
      }
    }
};
