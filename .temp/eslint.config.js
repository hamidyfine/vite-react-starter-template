import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReactConfig from "eslint-plugin-react/configs/recommended.js";
import { fixupConfigRules } from "@eslint/compat";

export default [
  {
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
  },
  {
    rules: {
        '@typescript-eslint/prefer-nullish-coalescing': 'off',
        '@typescript-eslint/no-unnecessary-condition': 'off',
        'arrow-body-style': ['off'],
        'arrow-parens': 'off',
        'class-methods-use-this': 'off',
        'comma-dangle': ['error', 'always-multiline'],
        'eol-last': ['error', 'always'],
        'filename-rules/match': ['error', { '.ts': 'kebab-case', '.tsx': 'kebab-case' }],
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
        'jsdoc/require-param': ['warn', { checkDestructuredRoots: false }],
        'jsdoc/require-returns': 'off',
        'jsdoc/require-throws': 'error',
        'jsdoc/sort-tags': 'warn',
        'jsdoc/tag-lines': ['warn', 'never', { startLines: 1 }],
        'jsx-a11y/label-has-associated-control': 'off',
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
        'perfectionist/sort-union-types': ['error', { 'nullable-last': true }],
        'prefer-arrow-callback': ['warn', { allowNamedFunctions: true }],
        'prefer-arrow-functions/prefer-arrow-functions': ['warn', { classPropertiesAllowed: true, disallowPrototype: true, returnStyle: 'unchanged' }],
        'quotes': ['error', 'single'],
        'react-refresh/only-export-components': 'warn',
        'react/boolean-prop-naming': ['off', { rule: '^(is|has|should)_[a-z]+(_[a-z]+)*$' }],
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
        'react/jsx-max-depth': ['error', { max: 7 }],
        'react/jsx-max-props-per-line': ['error', { 'maximum': 1, 'when': 'always' }],
        'react/jsx-no-leaked-render': ['off', { validStrategies: ['ternary', ''] }],
        'react/jsx-no-script-url': 'error',
        'react/jsx-no-useless-fragment': 'warn',
        'react/jsx-one-expression-per-line': 'off',
        'react/jsx-pascal-case': 'error',
        'react/jsx-props-no-multi-spaces': 'error',
        'react/jsx-sort-props': ['error', { callbacksLast: true, shorthandFirst: true, reservedFirst: true, multiline: 'last' }],
        'react/jsx-tag-spacing': ['error'],
        'react/no-children-prop': 'error',
        'react/no-danger-with-children': 'error',
        'react/no-danger': 'error',
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

        'jsdoc/require-jsdoc': ['off', {
            publicOnly: true,
            require: {
                FunctionDeclaration: true,
                FunctionExpression: true,
                ArrowFunctionExpression: true,
                ClassDeclaration: true,
                ClassExpression: true,
                MethodDefinition: true,
            },
            contexts: [
                'VariableDeclaration',
                'TSTypeAliasDeclaration',
                'TSPropertySignature',
            ],
            enableFixer: true,
        }],

        '@typescript-eslint/naming-convention': ['error',
            {
                selector: ['variable', 'parameter'],
                format: ['snake_case', 'camelCase'],
                leadingUnderscore: 'allow',
                trailingUnderscore: 'allow',
            },
            {
                selector: ['variable', 'parameter'],
                types: ['boolean'],
                format: ['snake_case'],
                prefix: ['is_', 'should_', 'has_', 'can_', 'did_', 'will_', 'hide_', 'show_'],
                leadingUnderscore: 'forbid',
                trailingUnderscore: 'forbid',
            },
            {
                selector: ['variable'],
                types: ['function'],
                format: ['camelCase', 'PascalCase'],
                leadingUnderscore: 'allow',
                trailingUnderscore: 'allow',
            },
            {
                selector: ['variable'],
                types: ['function'],
                modifiers: ['exported'],
                format: ['PascalCase', 'camelCase'],
                leadingUnderscore: 'allow',
                trailingUnderscore: 'allow',
            },
            {
                selector: 'function',
                format: ['camelCase'],
                leadingUnderscore: 'allow',
                trailingUnderscore: 'forbid',
            },
            {
                selector: 'interface',
                format: ['PascalCase'],
                prefix: ['I'],
                leadingUnderscore: 'forbid',
                trailingUnderscore: 'forbid',
            },
            {
                selector: 'typeAlias',
                format: ['PascalCase'],
                prefix: ['T'],
                leadingUnderscore: 'forbid',
                trailingUnderscore: 'forbid',
            },
            {
                selector: [
                    'classProperty',
                    'objectLiteralProperty',
                    'typeProperty',
                    'classMethod',
                    'objectLiteralMethod',
                    'typeMethod',
                    'accessor',
                    'enumMember',
                ],
                format: null,
                modifiers: ['requiresQuotes'],
            },
        ],
    },
  },
  {
overrides: [
        {
            files: ['src/stores/*.ts'],
            rules: {
                'import/group-exports': ['off'],
            },
        },
    ],
  },
  { 
    languageOptions: { 
      parserOptions: { 
        ecmaFeatures: { 
          jsx: true 
        } 
      } 
    } 
  },
  {
    languageOptions: { 
      globals: 
      {
        ...globals.browser, ...globals.node
      } 
    }
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  ...fixupConfigRules(pluginReactConfig),
];