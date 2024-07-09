const unknown_rules = ['function', 'if', 'each', 'else', 'include', 'mixin', 'return', 'for', 'use', 'forward', 'debug', 'warn', 'extend', 'tailwind', 'apply', 'tailwind'];

module.exports = {
    extends: [
        'stylelint-config-hudochenkov/full',
        'stylelint-config-standard-scss',
    ],
    overrides: [
        {
            customSyntax: 'postcss-html',
            files: ['**/*.html'],
        },
    ],
    plugins: [
        'stylelint-scss',
        'stylelint-order',
    ],
    rules: {
        'at-rule-no-unknown': [true, { ignoreAtRules: unknown_rules }],
        'color-hex-length': 'long',
        'declaration-no-important': true,
        'font-family-no-missing-generic-family-keyword': null,
        'no-descending-specificity': null,
        'scss/at-rule-no-unknown': [true, { ignoreAtRules: unknown_rules }],
        'selector-max-id': 1,
        'selector-max-type': 3,
        'selector-no-qualifying-type': [true, { ignore: ['attribute', 'class', 'id'] }],
        'selector-pseudo-element-no-unknown': [true, { ignorePseudoElements: ['v-deep'] }],
        'unit-no-unknown': [true, { ignoreUnits: ['rpx'] }],
    },
    syntax: 'scss',
};
