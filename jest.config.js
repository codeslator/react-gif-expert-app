export default {
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.tsx?$": ["ts-jest", {
      diagnostics: {
        ignoreCodes: [1343],
      },
      astTransformers: {
        before: [
          {
            path: 'node_modules/ts-jest-mock-import-meta',
            options: {
              metaObjectReplacement: {
                env: {
                  VITE_GIPHY_API_URL: 'https://api.giphy.com/v1/gifs/search',
                  VITE_GIPHY_API_KEY: 'your api key here',
                  VITE_GITHUB_REPO_URL: 'https://github.com/codeslator/gif-expert-app'
                },
              },
            },
          },
        ],
      },
    },]
  },
  moduleNameMapper: {
    "\\.(css|less|sass|scss)$": "identity-obj-proxy",
    "^.+\\.svg$": "jest-transformer-svg",
  },
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
};