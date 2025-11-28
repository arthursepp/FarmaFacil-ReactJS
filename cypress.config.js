import { defineConfig } from "cypress";
import fs from "fs";

export default defineConfig({
    e2e: {
        baseUrl: 'http://localhost:5173',
        setupNodeEvents(on, config) {
            require('@cypress/code-coverage/task')(on, config)
            on('after:spec', (spec, results) => {
                if (results && results.video) {
                    // Do we have failures for any attempt?
                    const failures = results.tests.some((test) => {
                        return test.attempts.some((attempt) => attempt.state === 'failed')
                    })
                    if (!failures) {
                        // delete the video if the spec passed and no tests failed
                        fs.unlinkSync(results.video)
                    }
                }
            })
            return config
        },
    },
    component: {
        devServer: {
            framework: "react",
            bundler: "vite",
            viteConfig: {
                resolve: {
                    alias: {
                        '@fortawesome/react-fontawesome': 'c:/Users/Pichau/Desktop/_/FarmaFacil-ReactJS/cypress/mocks/react-fontawesome.jsx',
                    },
                },
            },
        },
    },
    video: true,
    viewportWidth: 1280,
    viewportHeight: 720,
});
