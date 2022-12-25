module.exports = {
    "stories": [
        "../src/stories/**/*.stories.mdx",
        "../src/stories/**/*.stories.@(js|jsx|ts|tsx)"
    ],
    "addons": [
        "@storybook/addon-links",
        "@storybook/addon-essentials",
        "@storybook/addon-postcss"
    ],
    "babel": async (options) => ({
        // Update your babel configuration here
        ...options,
    }),
    "framework": "@storybook/web-components",
    "webpackFinal": async (config, {configType}) => {
        // Make whatever fine-grained changes you need
        // Return the altered config
        return config;
    },
}