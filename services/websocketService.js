module.exports = (io) => {
    io.on("connection", (socket) => {
        console.log("Admin connected for WebSocket notifications");
        socket.on("disconnect", () => {
            console.log("Admin disconnected");
        });
    });
};

exports.notifyAdmin = (orderData) => {
    io.emit("newOrder", orderData);
};