"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const CreateUser_1 = require("./presentation/CreateUser");
const GetUserByEmail_1 = require("./presentation/GetUserByEmail");
const app = express_1.default();
app.use(express_1.default.json()); // Linha mágica (middleware)
app.post('/user', CreateUser_1.createUserEndpoint);
app.get('/user/:userEmail', GetUserByEmail_1.getUserByEmailEndpoint);
// Trecho do código responsável por inicializar todas as APIs
const server = app.listen(process.env.PORT || 3000, () => {
    if (server) {
        const address = server.address();
        console.log(`Server is running in http://localhost:${address.port}`);
    }
    else {
        console.error(`Failure upon starting server.`);
    }
});
