Puppeeter with jest
====

1. jest
2. [puppeeter](https://github.com/puppeteer/puppeteer) <- see connect & launch options here
3. [jest-puppeteer](https://github.com/smooth-code/jest-puppeteer) <- recipes
4. jest-environment-puppeteer

Different configs for jest and jest-puppeteer:

- jest-puppeteer.config.js - laying in project root or specifying with env JEST_PUPPETEER_CONFIG=jest/jest-puppeteer.config.js. Sample npm script: "cross-env JEST_PUPPETEER_CONFIG=jest/jest-puppeteer.config.js jest --runInBand --detectOpenHandles --config=jest/jest.config.ui.ts"
- jest.config.js
