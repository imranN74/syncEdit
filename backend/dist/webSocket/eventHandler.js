"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleBroadcastMessage = void 0;
exports.handleRoom = handleRoom;
const ws_1 = require("ws");
// room logics
const rooms = {};
function handleRoom(roomId, ws) {
    if (!rooms[roomId]) {
        rooms[roomId] = new Set();
    }
    rooms[roomId].add(ws);
}
const handleBroadcastMessage = (wss, ws) => __awaiter(void 0, void 0, void 0, function* () {
    //on error
    ws.on("error", (error) => {
        console.log(error);
    });
    //to boradcast message
    ws.on("message", (data) => __awaiter(void 0, void 0, void 0, function* () {
        const messageData = JSON.parse(data.toString());
        const roomId = messageData.urlKey;
        const message = messageData.message;
        rooms[roomId].forEach((client) => {
            if (client.readyState === ws_1.WebSocket.OPEN) {
                client.send(message);
            }
        });
    }));
    //when server closes
    ws.on("close", () => {
        console.log("Client disconnected");
    });
});
exports.handleBroadcastMessage = handleBroadcastMessage;
