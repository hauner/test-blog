"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = {
    projectRoot: "./src",
    projectName: "blog",
    outDir: './docs',
    routes: {
        '/blog/:slug': {
            type: 'contentFolder',
            slug: {
                folder: "./blog"
            }
        },
    },
    extraRoutes: [
        '/tags',
        '/tags/angular',
        '/tags/rxjs'
    ]
};
