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
const User_1 = require("./../../entities/User");
class GetUserByEmailUseCase {
    constructor(userGateway) {
        this.userGateway = userGateway;
    }
    execute(input) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield this.userGateway.getUserByEmail(input.userEmail);
            return {
                user: new User_1.User(user.id, user.name, user.password)
            };
        });
    }
    ;
}
exports.GetUserByEmailUseCase = GetUserByEmailUseCase;
;
;
;
