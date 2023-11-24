// @ts-check
import { defineConfig, devices } from '@playwright/test'
import {testConfig as testConfig} from "./config/config.js"


/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// require('dotenv').config();

/**
 * @see https://playwright.dev/docs/test-configuration
 */

const config =  defineConfig({
  // testDir: './tests',
  testMatch: 'tests/**/*.spec.js',
  globalSetup: './globalSetup',
  globalTeardown: './globalTeardown',
  timeout: 360_000,
  /* Run tests in files in parallel */
  fullyParallel: false,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: [['html', {open: 'never'}]],
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    headless: false,
    // storageState: STORAGE_STATE_USER_PATH,
    httpCredentials: {
      username: "guest",
      password: "welcote2qauto"
    },
    /* Base URL to use in actions like `await page.goto('/')`. */
    baseURL: 'https://qauto.forstudy.space/',
    viewport: {
      width: 1200,
      height: 840
    },
    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'on-first-retry',
    launchOptions:{
      slowMo: 1000
    }
  },


  /* Configure projects for major browsers */
  projects: [
    {
      name: 'api tests',
      use: { ...devices['Desktop Chrome'] },
      testMatch: 'tests/api/**/*.spec.js'
    },
    // {
    //   name: 'api',
    //   testMatch: 'test/api/**/*.spec.js'
      
    // },

    
    /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },

    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    // },
  ],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://127.0.0.1:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});
export default config