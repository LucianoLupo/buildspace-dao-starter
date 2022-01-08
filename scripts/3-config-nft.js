import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const bundleDrop = sdk.getBundleDropModule(
  "0x79F545c5AB05F22B9846f971a98F23cf2e4c4EEc",
);

(async () => {
  try {
    await bundleDrop.createBatch([
      {
        name: "Dev Badge",
        description: "This NFT will give you access to DevsDAO!",
        image: readFileSync("scripts/assets/DevsDAO.png"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})()