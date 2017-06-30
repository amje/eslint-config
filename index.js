'use strict';

const OFF = 0;
const WARNING = 1;
const ERROR = 2;

module.exports = {
    extends: ['eslint:recommended'],
    parserOptions: {
        ecmaVersion: 2017,
        ecmaFeatures: {
            experimentalObjectRestSpread: true
        },
        sourceType: 'module'
    },
    env: {
        es6: true,
        'shared-node-browser': true
    },
    rules: {
        // Possible errors
        'no-console': WARNING,

        // Best practices
        'curly': [ERROR, 'multi-line'],
        'default-case': ERROR,
        'dot-location': [ERROR, 'property'],
        'dot-notation': ERROR,
        'eqeqeq': [ERROR, 'smart'],
        'guard-for-in': ERROR,
        'no-alert': ERROR,
        'no-caller': ERROR,
        'no-empty-function': WARNING,
        'no-eval': ERROR,
        'no-extend-native': ERROR,
        'no-floating-decimal': ERROR,
        'no-implicit-globals': ERROR,
        'no-implied-eval': ERROR,
        'no-invalid-this': WARNING,
        'no-loop-func': WARNING,
        'no-magic-numbers': WARNING,
        'no-multi-spaces': ERROR,
        'no-multi-str': ERROR,
        'no-new': ERROR,
        'no-new-func': ERROR,
        'no-new-wrappers': ERROR,
        'no-octal-escape': ERROR,
        'no-useless-call': WARNING,
        'no-useless-concat': WARNING,
        'no-with': ERROR,
        'wrap-iife': [ERROR, 'inside'],
        'yoda': ERROR,

        // Variables
        'no-catch-shadow': WARNING,
        'no-shadow': WARNING,
        'no-shadow-restricted-names': WARNING,
        'no-undef-init': ERROR,
        'no-undefined': ERROR,
        'no-use-before-define': [ERROR, { functions: false, classes: true }],

        // Stylistic issues
        'array-bracket-spacing': ERROR,
        'block-spacing': ERROR,
        'brace-style': ERROR,
        'camelcase': ERROR,
        'comma-spacing': ERROR,
        'comma-style': ERROR,
        'computed-property-spacing': ERROR,
        'consistent-this': [ERROR, 'self'],
        'eol-last': ERROR,
        'func-call-spacing': ERROR,
        'indent': [ERROR, 4, { SwitchCase: 1 }],
        'jsx-quotes': ERROR,
        'key-spacing': ERROR,
        'keyword-spacing': ERROR,
        'linebreak-style': ERROR,
        'max-len': [WARNING, 120],
        'max-params': [WARNING, 5],
        'new-cap': WARNING,
        'new-parens': ERROR,
        'newline-per-chained-call': WARNING,
        'no-array-constructor': ERROR,
        'no-nested-ternary': ERROR,
        'no-new-object': ERROR,
        'no-trailing-spaces': ERROR,
        'no-unneeded-ternary': ERROR,
        'no-whitespace-before-property': ERROR,
        'nonblock-statement-body-position': ERROR,
        'object-curly-spacing': [ERROR, 'always'],
        'object-property-newline': [ERROR, { allowMultiplePropertiesPerLine: true }],
        'one-var': [ERROR, 'never'],
        'operator-linebreak': ERROR,
        'quotes': [ERROR, 'single', { avoidEscape: true, allowTemplateLiterals: true }],
        'semi': ERROR,
        'semi-spacing': ERROR,
        'semi-style': ERROR,
        'space-before-blocks': ERROR,
        'space-before-function-paren': [ERROR, {anonymous: 'always', named: 'never', asyncArrow: 'always'}],
        'space-in-parens': ERROR,

        // ECMAScript 6
        'arrow-spacing': ERROR,
        'generator-star-spacing': ERROR,
        'no-duplicate-imports': ERROR,
        'yield-star-spacing': ERROR
    }
};
