Hooks.once('init', async function () {
    console.log("Initializing...");
});

Hooks.once('ready', async function () {
    console.log("Ready!");
});

Hooks.on("ChatMessage", (message) => {
    console.log("A message!!!!");
    console.log(message.user);
    console.log(message.content);
})
