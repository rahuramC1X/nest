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
exports.TrackworkService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const trackwork_entity_1 = require("./trackwork.entity");
let TrackworkService = class TrackworkService {
    constructor(trackworkRepository) {
        this.trackworkRepository = trackworkRepository;
    }
    async create(TrackworkDto) {
        const trackwork = this.trackworkRepository.create(TrackworkDto);
        return await this.trackworkRepository.save(trackwork);
    }
    async findAll() {
        return await this.trackworkRepository.find();
    }
    async findOne(id) {
        const trackwork = await this.trackworkRepository.findOneBy({ id: id });
        if (!trackwork) {
            throw new common_1.NotFoundException(`Trackwork with ID ${id} not found`);
        }
        return trackwork;
    }
    async update(id, updateTrackworkDto) {
        const trackwork = await this.findOne(id);
        this.trackworkRepository.merge(trackwork, updateTrackworkDto);
        return await this.trackworkRepository.save(trackwork);
    }
    async delete(id) {
        const trackwork = await this.findOne(id);
        await this.trackworkRepository.remove(trackwork);
    }
};
TrackworkService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(trackwork_entity_1.Trackwork)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], TrackworkService);
exports.TrackworkService = TrackworkService;
//# sourceMappingURL=trackwork.service.js.map