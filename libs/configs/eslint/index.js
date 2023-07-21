module.exports = {
	extends: ['turbo', 'prettier'],
	rules: {
		'no-debugger': 'warn',
		'no-alert': 'warn',
		'no-await-in-loop': 'off',
		'arrow-body-style': ['error', 'as-needed'],
		'prefer-destructuring': [
			'error',
			{
				object: true,
				array: false
			}
		],
		'no-unused-vars': [
			'warn',
			{
				argsIgnorePattern: '^_'
			}
		]
	},
	plugins: ['prettier']
};
