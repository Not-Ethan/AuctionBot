module.exports = {
    name: "ping",
    args: [""],
    execute(client, message, args) {
        message.channel.send("pong!")
    }
}