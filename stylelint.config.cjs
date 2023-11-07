const unknown_rules = ['function', 'if', 'each', 'else', 'include', 'mixin', 'return', 'for', 'use', 'forward', 'debug', 'warn', 'extend', 'tailwind', 'apply', 'tailwind'];

module.exports = {
    extends: [
        'stylelint-config-hudochenkov/full',
        'stylelint-config-standard-scss',
    ],
    plugins: [
        'stylelint-scss',
        'stylelint-order',
    ],
    rules: {
        'indentation': 4,
        'color-hex-case': 'upper',
        'color-hex-length': 'long',
        'no-descending-specificity': null,
        'font-family-no-missing-generic-family-keyword': null,
        'selector-pseudo-element-no-unknown': [true, { ignorePseudoElements: ['v-deep'] }],
        'declaration-no-important': true,
        'selector-max-type': 3,
        'selector-max-id': 1,
        'selector-no-qualifying-type': [true, { ignore: ['attribute', 'class', 'id'] }],
        'unit-no-unknown': [true, { ignoreUnits: ['rpx'] }],
        'at-rule-no-unknown': [true, { ignoreAtRules: unknown_rules }],
        'scss/at-rule-no-unknown': [true, { ignoreAtRules: unknown_rules }],
    },
    syntax: 'scss',
    overrides: [
        {
            files: ['**/*.html'],
            customSyntax: 'postcss-html',
        },
    ],
};
