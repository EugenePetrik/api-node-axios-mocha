module.exports = {
  root: true,
  env: {
    browser: false,
    commonjs: true,
    es6: true,
    node: true,
  },
  parser: 'babel-eslint',
  plugins: [
    'babel',
    'prettier',
    'mocha',
  ],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    allowImportExportEverywhere: false,
  },
  extends: [
    'eslint:recommended',
    'prettier',
    'plugin:mocha/recommended',
  ],
  rules: {
    'no-unused-vars': [
      'error',
      {
        caughtErrorsIgnorePattern: '^ignore',
      },
    ],
    'no-console': 'off',
    'no-mixed-spaces-and-tabs': 'warn',
    'linebreak-style': [
      'off',
      'unix',
    ],
    'babel/new-cap': 0,
    'babel/camelcase': 1,
    'babel/no-invalid-this': 1,
    'babel/object-curly-spacing': 0,
    'babel/semi': 1,
    'babel/valid-typeof': 1,
    'mocha/no-skipped-tests': 'error',
    'mocha/no-exclusive-tests': 'error',
    'mocha/no-setup-in-describe': 0,
    semi: [
      'error',
      'always',
    ],
    quotes: [
      'error',
      'single',
      {
        allowTemplateLiterals: true,
      },
    ],
    'max-len': [
      'error',
      {
        code: 120,
      },
    ],
    'object-curly-spacing': [
      'off',
      'always',
      {
        objectsInObjects: false,
        arraysInObjects: false,
      },
    ],
  },
};
