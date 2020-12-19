module.exports = {
  root: true,
  env: {
    node: true,
    browser: true,
  },
  plugins: ['@typescript-eslint'],
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-recommended',
    'plugin:@typescript-eslint/recommended',
    '@vue/typescript/recommended',
    '@vue/prettier',
    '@vue/prettier/@typescript-eslint',
  ],
  parserOptions: {
    ecmaVersion: 2020,
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
  },
  rules: {
    // JS/TS config
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-unused-vars': 'off',
    'no-empty-function': 'off',
    'prefer-const': 'off',
    'object-curly-spacing': ['error', 'always'],
    'arrow-parens': ['error', 'as-needed'],
    'no-explicit-any': 'off',
    'prefer-template': 'error', // https://github.com/airbnb/javascript#es6-template-literals,
    '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_', ignoreRestSiblings: true }],
    '@typescript-eslint/no-explicit-any': ['off'],
    '@typescript-eslint/explicit-module-boundary-types': ['off'],
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',

    // Vue config
    'vue/singleline-html-element-content-newline': 'off',
    'vue/html-closing-bracket-spacing': 'error',
    'vue/require-default-prop': 'off',
    'vue/no-deprecated-v-on-native-modifier': 'off',
    'vue/max-attributes-per-line': ['warn', { singleline: 5 }],
  },
  // overrides: [
  //   {
  //     files: ['**/__tests__/*.{j,t}s?(x)', '**/tests/unit/**/*.spec.{j,t}s?(x)'],
  //     env: {
  //       jest: true,
  //     },
  //   },
  // ],
}
