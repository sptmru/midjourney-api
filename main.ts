import "dotenv/config";
import { Midjourney } from "./src";
/**
 *
 * a simple example of using the imagine api with ws
 * ```
 * npx tsx example/imagine-ws.ts
 * ```
 */
async function main() {
    const client = new Midjourney({
        ServerId: <string>process.env.SERVER_ID,
        ChannelId: <string>process.env.CHANNEL_ID,
        SalaiToken: <string>process.env.SALAI_TOKEN,
        HuggingFaceToken: <string>process.env.HUGGINGFACE_TOKEN,
        Debug: true,
        Ws: true, // required  `Only you can see this`
    });
    await client.Connect(); // required
}

main()
    .then(() => {
        // console.log("finished");
        // process.exit(0);
    })
    .catch((err) => {
        console.log("finished");
        console.error(err);
        process.exit(1);
    });
