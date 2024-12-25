import type { JestConfigWithTsJest } from 'ts-jest';

const jestConfig: JestConfigWithTsJest = {
    collectCoverage: false,
    collectCoverageFrom: ['src/**/*.{js,jsx,ts,tsx}'],
    coverageDirectory: 'coverage',
    moduleDirectories: [
        'node_modules',
        'tests',
        __dirname,
    ],
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
    moduleNameMapper: {
        '@fontsource/poppins': '<rootDir>/src/tests/mocks/styles.mock.ts',
        '\\.(css|less|scss|sass)$': '<rootDir>/src/tests/mocks/styles.mock.ts',
        '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/src/tests/mocks/assets.mock.ts',
        '^@/(.*)$': '<rootDir>/src/$1',
    },
    preset: 'ts-jest',
    setupFilesAfterEnv: [
        '<rootDir>/jest.setup.ts',
        'core-js',
    ],
    testEnvironment: 'jest-environment-jsdom',
    transform: {
        '^.+\\.tsx?$': [
            '@swc/jest',
            {
                jsc: {
                    transform: {
                        react: {
                            runtime: 'automatic',
                        },
                    },
                },
            },
        ],
    },
    transformIgnorePatterns: ['<rootDir>/node_modules/'],
};

export default jestConfig;
