"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const auth_service_1 = require("./auth/auth.service");
const user_service_1 = require("./users/user.service");
const jwt_1 = require("@nestjs/jwt");
const auth_module_1 = require("./auth/auth.module");
const user_module_1 = require("./users/user.module");
const trackwork_module_1 = require("./trackwork/trackwork.module");
const designpattern_module_1 = require("./design-patterns/designpattern.module");
const trackwork_service_1 = require("./trackwork/trackwork.service");
const designpattern_service_1 = require("./design-patterns/designpattern.service");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [auth_module_1.AuthModule, user_module_1.UserModule, trackwork_module_1.TrackworkModule, designpattern_module_1.DesignPatternModule],
        providers: [auth_service_1.AuthService, user_service_1.UserService, jwt_1.JwtService, trackwork_service_1.TrackworkService, designpattern_service_1.DesignPatternService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map