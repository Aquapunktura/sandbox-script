export default {
    build: {
        outDir: './docs'
    },
    base: './',
    server: {
        port: 8080
    },
    // Optional: Silence Sass deprecation warnings. See note below.
    css: {
        preprocessorOptions: {
            scss: {
                silenceDeprecations: [
                    'import',
                    'mixed-decls',
                    'color-functions',
                    'global-builtin',
                ],
            },
        },
    },
}
