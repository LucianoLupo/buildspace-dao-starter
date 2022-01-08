import sdk from "./1-initialize-sdk.js";

const app = sdk.getAppModule("0x1e12eC56801F5B7fE128a8C0d07b7839db578cA7");

(async () => {
  try {
    const tokenModule = await app.deployTokenModule({
      name: "DevsDAO Governance Token",
      symbol: "DEV",
    });
    console.log(
      "✅ Successfully deployed token module, address:",
      tokenModule.address,
    );
  } catch (error) {
    console.error("failed to deploy token module", error);
  }
})();