"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DesignPatternModule = void 0;
const typeorm_1 = require("@nestjs/typeorm");
const designpattern_entity_1 = require("./designpattern.entity");
const common_1 = require("@nestjs/common");
const user_module_1 = require("../users/user.module");
const designpattern_service_1 = require("./designpattern.service");
const designpattern_controller_1 = require("./designpattern.controller");
let DesignPatternModule = class DesignPatternModule {
};
DesignPatternModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([designpattern_entity_1.DesignPatterns]),
            user_module_1.UserModule
        ],
        providers: [designpattern_service_1.DesignPatternService],
        controllers: [designpattern_controller_1.DesignPatternController],
        exports: [designpattern_service_1.DesignPatternService, typeorm_1.TypeOrmModule.forFeature([designpattern_entity_1.DesignPatterns])]
    })
], DesignPatternModule);
exports.DesignPatternModule = DesignPatternModule;
//# sourceMappingURL=designpattern.module.js.map