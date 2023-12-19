import { defineConfig } from "cypress";

export default defineConfig({
  chromeWebSecurity: false,
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    // setupNodeEvents(on, config) {
    //   on("before:browser:launch", (browser, launchOptions) => {

    //     if (
    //       browser.family === "chromium" &&
    //       browser.name === "chrome" &&
    //       browser.isHeadless
    //     ) {
    //       launchOptions.args.push("--swiftshader-webgl");  //TODO: try disable --force-device-scale-factor=1
    //     }
        
    //     return launchOptions;
    //   });
    // },
    baseUrl: "http://localhost:3000/"
  },
  video: false
});
