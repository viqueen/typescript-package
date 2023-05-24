import type { Config } from 'jest';

export default async (): Promise<Config> => {
    return {
        collectCoverage: true,
        coverageDirectory: 'coverage',
        preset: 'ts-jest',
        testEnvironment: 'node',
        roots: ['<rootDir>/src'],
        globalSetup: '<rootDir>/test/global-setup.ts',
        globalTeardown: '<rootDir>/test/global-teardown.ts',
        testMatch: ['**/?(*.)+(spec|test).+(ts)'],
        verbose: true
    };
};
