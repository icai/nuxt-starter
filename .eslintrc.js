module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  env: {
    browser: true,
    node: true,
    es6: true,
    commonjs: true
  },
  extends: [
    '@nuxtjs/eslint-config-typescript',
    'prettier',
    'plugin:prettier/recommended',
    'plugin:nuxt/recommended'
  ],
  plugins: ['vue', 'prettier'],
  overrides: [
    {
      files: ['**/*.{ts,tsx}'],
      parser: '@typescript-eslint/parser',
      plugins: ['@typescript-eslint/eslint-plugin'],
      rules: {
        '@typescript-eslint/no-unused-vars': 'off',
        '@typescript-eslint/no-shadow': 'off',
        'no-self-compare': 'off',
      },
    },
    {
      files: ['**/*.{js,vue}'],
      rules: {
        'vue/no-v-html': 0,
        'vue/require-default-prop': 0,
        'no-console': 0,
        'prettier/prettier': [
          'error',
          {
            printWidth: 180,
            semi: false,
            singleQuote: true,
            bracketSpacing: true,
            trailingComma: 'none',
            tabWidth: 2,
            endOfLine: 'lf'
          }
        ]
      }
    }
  ]
}
