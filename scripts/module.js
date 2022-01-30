Hooks.once('init', async function () {
    console.log("Initializing...");
});

Hooks.once('ready', async function () {
    console.log("Ready!");
});

Hooks.on("renderChatMessage", (message, html, data) => {
    if (message.roll.result != null) {
        const result = message.roll.result
        console.log(result)
    }
})
