'use strict';

const OFF = 0;
const WARNING = 1;
const ERROR = 2;

module.exports = {
    plugins: ['react'],
    extends: ['./client.js', 'plugin:react/recommended'],
    rules: {
        'react/no-danger': WARNING,
        'react/no-did-mount-set-state': WARNING,
        'react/no-did-update-set-state': WARNING,
        'react/no-string-refs': WARNING,
        'react/no-unescaped-entities': ERROR,
        'react/no-unknown-property': ERROR,
        'react/no-unused-prop-types': WARNING,
        'react/prefer-es6-class': ERROR,
        'react/prop-types': WARNING,
        'react/self-closing-comp': ERROR,
        'react/sort-comp': ERROR,
        'react/jsx-closing-bracket-location': ERROR,
        'react/jsx-curly-spacing': ERROR,
        'react/jsx-equals-spacing': ERROR,
        'react/jsx-first-prop-new-line': [ERROR, 'multiline'],
        'react/jsx-indent-props': ERROR,
        'react/jsx-indent': ERROR,
        'react/jsx-no-bind': [WARNING, { ignoreRefs: true }],
        'react/jsx-no-target-blank': WARNING,
        'react/jsx-pascal-case': ERROR,
        'react/jsx-tag-spacing': [ERROR, { beforeSelfClosing: 'never' }],
        'react/jsx-wrap-multilines': ERROR
    }
};
