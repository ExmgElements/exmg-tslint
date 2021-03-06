module.exports = {
  "parserOptions": {
    "sourceType": "module",
    "allowImportExportEverywhere": false
  },
  "extends": [
    "tslint-config-airbnb"
  ],
  "rules": {
    "class-methods-use-this": false,
    "import/extensions": false,
    "import/no-extraneous-dependencies": false,
    "import/prefer-default-export": false,
    "import/first": false,
    "trailing-comma": [
      true,
      {
        "multiline": {
          "objects": "always",
          "arrays": "always",
          "functions": "ignore",
          "typeLiterals": "ignore"
        }
      }
    ],
    "ter-indent": [
      "error",
      "tab",
      {
        "SwitchCase": 1
      }
    ],
    "max-line-length": [
      true,
      {
        "limit": 140,
        "ignore-pattern": "`.*`"
      }
    ],
    "ter-no-tabs": false,
    "quotemark": [
      true,
      "single"
    ],
    "object-curly-spacing": [
      true,
      "never"
    ],
    "no-shadowed-variable": true,
    "object-curly-newline": false,
    "align": false,
    "ter-arrow-parens": false,
    "type-literal-delimiter": [
      true
    ],
    "variable-name": [
      true,
      "check-format",
      "allow-pascal-case"
    ]
  },
  "globals": {
    "Polymer": true,
    "Exmg": true,
    "CustomElements": false
  }
};
