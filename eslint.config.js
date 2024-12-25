import pluginJs from '@eslint/js';
import importPlugin from 'eslint-plugin-import';
import importNewlines from 'eslint-plugin-import-newlines';
import jest from 'eslint-plugin-jest';
import jsdoc from 'eslint-plugin-jsdoc';
import json from 'eslint-plugin-json';
import noSecret from 'eslint-plugin-no-secrets';
import perfectionist from 'eslint-plugin-perfectionist';
import preferArrowFunction from 'eslint-plugin-prefer-arrow-functions';
import reactPlugin from 'eslint-plugin-react';
import reactHookPlugin from 'eslint-plugin-react-hooks';
import reactRefreshPlugin from 'eslint-plugin-react-refresh';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import sonarjs from 'eslint-plugin-sonarjs';
import tsdoc from 'eslint-plugin-tsdoc';
import globals from 'globals';
import { configs } from 'typescript-eslint';

export default [
    pluginJs.configs.recommended,
    ...configs.strict,
    importPlugin.flatConfigs.recommended,
    importPlugin.flatConfigs.typescript,
    reactPlugin.configs.flat.recommended,
    reactPlugin.configs.flat['jsx-runtime'],
    {
        files: ['**/*.{js,mjs,cjs,jsx,mjsx,ts,tsx,mtsx}'],
        languageOptions: {
            ...reactPlugin.configs.flat.recommended.languageOptions,
            ...reactPlugin.languageOptions,
            ecmaVersion: 'latest',
            globals: {
                ...globals.browser,
                ...globals.node,
            },
            parserOptions: {
                ecmaFeatures: {
                    jsx: true,
                },
            },
            sourceType: 'module',
        },
        plugins: {
            'import-newlines': importNewlines,
            'jsdoc': jsdoc,
            'no-secrets': noSecret,
            'perfectionist': perfectionist,
            'prefer-arrow-functions': preferArrowFunction,
            'react': reactPlugin,
            'react-hooks': reactHookPlugin,
            'react-refresh': reactRefreshPlugin,
            'simple-import-sort': simpleImportSort,
            'sonarjs': sonarjs,
            'tsdoc': tsdoc,
        },
        rules: {
            ...perfectionist.configs['recommended-alphabetical'].rules,
            'arrow-body-style': ['off'],
            'arrow-parens': 'off',
            'class-methods-use-this': 'off',
            'comma-dangle': ['error', 'always-multiline'],
            'eol-last': ['error', 'always'],
            'import-newlines/enforce': ['error', { items: 30, 'max-len': 240 }],
            'import/consistent-type-specifier-style': ['error', 'prefer-top-level'],
            'import/exports-last': 'error',
            'import/extensions': 'off',
            'import/group-exports': 'off',
            'import/namespace': ['error', { allowComputed: true }],
            'import/newline-after-import': 'error',
            'import/no-default-export': 'off',
            'import/no-duplicates': 'error',
            'import/no-extraneous-dependencies': 'off',
            'import/no-named-as-default': 'off',
            'import/no-unresolved': 'off',
            'indent': ['error', 4],
            'jsdoc/check-alignment': 'warn',
            'jsdoc/check-indentation': 'warn',
            'jsdoc/check-syntax': 'warn',
            'jsdoc/no-blank-blocks': 'warn',
            'jsdoc/no-types': 'error',
            'jsdoc/require-asterisk-prefix': 'warn',
            'jsdoc/require-description': 'warn',
            'jsdoc/require-hyphen-before-param-description': 'off',
            'jsdoc/require-jsdoc': 'off',
            'jsdoc/require-param': ['warn', { checkDestructuredRoots: false }],
            'jsdoc/require-returns': 'off',
            'jsdoc/require-throws': 'error',
            'jsdoc/sort-tags': 'warn',
            'key-spacing': ['error'],
            'linebreak-style': ['error', process.platform === 'win32' ? 'windows' : 'unix'],
            'lines-between-class-members': ['error', 'always', { exceptAfterSingleLine: true }],
            'max-len': ['error', { code: 256 }],
            'newline-before-return': 'off',
            'no-alert': 'off',
            'no-console': process.env.NODE_ENV === 'production' ? ['error', { allow: ['warn', 'error'] }] : 'off',
            'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
            'no-multiple-empty-lines': 'off',
            'no-prototype-builtins': 'off',
            'no-secrets/no-secrets': 'error',
            'no-template-curly-in-string': 'error',
            'no-trailing-spaces': ['error', { ignoreComments: true, skipBlankLines: true }],
            'no-underscore-dangle': 'off',
            'padded-blocks': ['error', 'never'],
            'perfectionist/sort-imports': 'off',
            'perfectionist/sort-jsx-props': 'off',
            'perfectionist/sort-union-types': ['error', { ignoreCase: true, type: 'alphabetical' }],
            'prefer-arrow-callback': ['warn', { allowNamedFunctions: true }],
            'prefer-arrow-functions/prefer-arrow-functions': ['warn', { classPropertiesAllowed: true, disallowPrototype: true, returnStyle: 'unchanged' }],
            'quotes': ['error', 'single'],
            'react-refresh/only-export-components': 'warn',
            'react/boolean-prop-naming': ['error', { rule: '^(is|has|should)_[a-z]+(_[a-z]+)*$' }],
            'react/button-has-type': 'error',
            'react/destructuring-assignment': ['error', 'always', { destructureInSignature: 'always' }],
            'react/display-name': 'off',
            'react/function-component-definition': ['warn', { namedComponents: 'arrow-function' }],
            'react/jsx-closing-bracket-location': 'error',
            'react/jsx-curly-brace-presence': 'warn',
            'react/jsx-curly-newline': 'error',
            'react/jsx-first-prop-new-line': ['error', 'multiline'],
            'react/jsx-fragments': 'error',
            'react/jsx-key': ['error', { checkFragmentShorthand: true, checkKeyMustBeforeSpread: true, warnOnDuplicates: true }],
            'react/jsx-max-depth': ['off', { max: 8 }],
            'react/jsx-max-props-per-line': ['error', { 'maximum': 1, 'when': 'always' }],
            'react/jsx-no-leaked-render': ['off', { validStrategies: ['ternary', ''] }],
            'react/jsx-no-script-url': 'error',
            'react/jsx-no-useless-fragment': 'warn',
            'react/jsx-one-expression-per-line': 'off',
            'react/jsx-pascal-case': 'error',
            'react/jsx-props-no-multi-spaces': 'error',
            'react/jsx-sort-props': ['error', { callbacksLast: true, multiline: 'last', reservedFirst: true, shorthandFirst: true }],
            'react/jsx-tag-spacing': ['error'],
            'react/no-children-prop': 'error',
            'react/no-danger': 'error',
            'react/no-danger-with-children': 'error',
            'react/no-typos': 'warn',
            'react/no-unstable-nested-components': ['error', { allowAsProps: true }],
            'react/no-unused-prop-types': 'error',
            'react/prefer-stateless-function': 'error',
            'react/prop-types': 'off',
            'react/react-in-jsx-scope': 'off',
            'react/self-closing-comp': 'warn',
            'require-jsdoc': 'off',
            'semi': 'error',
            'simple-import-sort/exports': 'warn',
            'simple-import-sort/imports': 'warn',
            'space-in-parens': 'off',
            'tsdoc/syntax': 'warn',
            'typescript-eslint/no-non-null-assertion': 'off',
            'typescript-eslint/no-unnecessary-condition': 'off',
            'typescript-eslint/prefer-nullish-coalescing': 'off',
            'typescript-eslint/sort-type-constituents': 'off',
        },
        settings: {
            'import/resolver': {
                node: true,
                typescript: true,
            },
            'react': {
                'version': 'detect',
            },
        },
    },
    {
        files: ['src/stores/*.ts', 'src/types/*.ts'],
        rules: {
            'import/exports-last': ['off'],
            'import/group-exports': ['off'],
        },
    },
    {
        files: ['webpack.config.js', 'webpack.config.*.js', '.cz-config.cjs', 'jest.setup.ts', 'postcss.config.js'],
        rules: {
            '@typescript-eslint/no-require-imports': ['off'],
            '@typescript-eslint/no-var-requires': ['off'],
        },
    },
    {
        files: ['**/*.json'],
        ...json.configs['recommended'],
    },
    {
        files: ['test/**'],
        ...jest.configs['flat/recommended'],
        rules: {
            ...jest.configs['flat/recommended'].rules,
        },
    },
    {
        ignores: ['dist'],
    },
];
