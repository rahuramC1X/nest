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
exports.TrackworkController = void 0;
const common_1 = require("@nestjs/common");
const trackwork_service_1 = require("./trackwork.service");
const trackwork_dto_1 = require("./trackwork.dto");
const jwt_auth_guard_1 = require("../auth/jwt-auth.guard");
let TrackworkController = class TrackworkController {
    constructor(trackworkService) {
        this.trackworkService = trackworkService;
    }
    async create(createTrackworkDto) {
        return this.trackworkService.create(createTrackworkDto);
    }
    async findAll() {
        console.log("hello");
        return this.trackworkService.findAll();
    }
    async findOne(id) {
        const trackwork = await this.trackworkService.findOne(id);
        if (!trackwork) {
            throw new common_1.NotFoundException('Trackwork not found');
        }
        return trackwork;
    }
    async update(id, updateTrackworkDto) {
        return this.trackworkService.update(id, updateTrackworkDto);
    }
    async delete(id) {
        await this.trackworkService.delete(id);
    }
};
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [trackwork_dto_1.TrackworkDto]),
    __metadata("design:returntype", Promise)
], TrackworkController.prototype, "create", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], TrackworkController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], TrackworkController.prototype, "findOne", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, trackwork_dto_1.TrackworkDto]),
    __metadata("design:returntype", Promise)
], TrackworkController.prototype, "update", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], TrackworkController.prototype, "delete", null);
TrackworkController = __decorate([
    (0, common_1.Controller)('trackwork'),
    __metadata("design:paramtypes", [trackwork_service_1.TrackworkService])
], TrackworkController);
exports.TrackworkController = TrackworkController;
//# sourceMappingURL=trackwork.controller.js.map