module.exports = {
  env: {
    browser: true,
    es2020: true,
	},
	globals: {
		Atomics: 'readonly',
		SharedArrayBuffer: 	'readonly'
	},
  extends: [
    'plugin:react/recommended',
		'airbnb',
		'plugin:prettier/recommended',
		'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 11,
    sourceType: 'module',
  },
  plugins: [
    'react',
		'@typescript-eslint',
		'prettier',
  ],
  rules: {
		'import/extensions': [
			'error',
			'ignorePackages',
			{
				'js': 'never',
				'jsx': 'never',
				'ts': 'never',
				'tsx': 'never'
			}
		],
		'prettier/prettier':'error',
		'@typescript-eslint/explicit-function-return-type': 'off',
		'@typescript-eslint/no-unused-vars': 'off',
		'react/jsx-filename-extension': [
			1,
			{	'extensions': ['.js', '.jsx', '.ts', '.tsx']	}
		]
	},
	'settings': {
		'import/resolver': {
			'node': {
				'extensions': ['.js', '.jsx', '.ts', '.tsx']
			}
		}
	}
};
