"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DesignPatternController = void 0;
const common_1 = require("@nestjs/common");
const designpattern_service_1 = require("./designpattern.service");
const designpattern_dto_1 = require("./designpattern.dto");
let DesignPatternController = class DesignPatternController {
    constructor(designPatternService) {
        this.designPatternService = designPatternService;
    }
    async create(createDesignPatternDto) {
        return this.designPatternService.create(createDesignPatternDto);
    }
    async findAll() {
        return this.designPatternService.findAll();
    }
    async findOne(id) {
        return await this.designPatternService.findOne(id);
    }
    async update(id, updateDesignPatternDto) {
        return this.designPatternService.update(id, updateDesignPatternDto);
    }
    async delete(id) {
        await this.designPatternService.delete(id);
    }
    async execute(id) {
        return await this.designPatternService.execute(id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [designpattern_dto_1.DesignPatternDto]),
    __metadata("design:returntype", Promise)
], DesignPatternController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], DesignPatternController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], DesignPatternController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, designpattern_dto_1.DesignPatternDto]),
    __metadata("design:returntype", Promise)
], DesignPatternController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], DesignPatternController.prototype, "delete", null);
__decorate([
    (0, common_1.Get)('/execute/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], DesignPatternController.prototype, "execute", null);
DesignPatternController = __decorate([
    (0, common_1.Controller)('designpattern'),
    __metadata("design:paramtypes", [designpattern_service_1.DesignPatternService])
], DesignPatternController);
exports.DesignPatternController = DesignPatternController;
//# sourceMappingURL=designpattern.controller.js.map