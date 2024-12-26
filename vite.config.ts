import { lingui } from '@lingui/vite-plugin';
import { TanStackRouterVite } from '@tanstack/router-plugin/vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';
import { defineConfig } from 'vite';
import bundlesize from 'vite-plugin-bundlesize';

// https://vite.dev/config/
export default defineConfig({
    build: {
        sourcemap: 'hidden',
        target: 'esnext',
    },
    css: {
        preprocessorOptions: {
            scss: {
                api: 'modern-compiler',
            },
        },
    },
    plugins: [
        TanStackRouterVite(),
        react({
            plugins: [['@lingui/swc-plugin', {}]],
        }),
        bundlesize({
            limits: [
                {
                    limit: Infinity,
                    name: '**/*',
                },
            ],
            stats: 'all',
        }),
        lingui(),
    ],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src'),
        },
    },
});
