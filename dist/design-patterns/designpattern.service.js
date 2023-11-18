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
exports.DesignPatternService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const designpattern_entity_1 = require("./designpattern.entity");
const tsNode = require("ts-node");
tsNode.register();
let DesignPatternService = class DesignPatternService {
    constructor(designPatternRepository) {
        this.designPatternRepository = designPatternRepository;
    }
    formatCodeAsSingleLine(code) {
        const formattedCode = code.replace(/\n/g, ' ').replace(/\t/g, ' ');
        return formattedCode;
    }
    async create(DesignPatternDto) {
        const { exampleProgram } = DesignPatternDto;
        const formattedCode = this.formatCodeAsSingleLine(exampleProgram);
        DesignPatternDto.exampleProgram = formattedCode;
        const designPattern = this.designPatternRepository.create(DesignPatternDto);
        return await this.designPatternRepository.save(designPattern);
    }
    async findAll() {
        return await this.designPatternRepository.find();
    }
    async findOne(id) {
        const designPattern = await this.designPatternRepository.findOneBy({ id: id });
        if (!designPattern) {
            throw new common_1.NotFoundException(`DesignPattern with Id ${id} not found`);
        }
        return designPattern;
    }
    async update(id, updatDesignPatternDto) {
        const designPattern = await this.findOne(id);
        this.designPatternRepository.merge(designPattern, updatDesignPatternDto);
        return await this.designPatternRepository.save(designPattern);
    }
    async delete(id) {
        const designPattern = await this.findOne(id);
        await this.designPatternRepository.remove(designPattern);
    }
    async execute(id) {
        const { transpileModule, ModuleKind, ScriptTarget } = require('typescript');
        try {
            const designPattern = await this.findOne(id);
            const logOutput = [];
            const originalConsoleLog = console.log;
            console.log = (...args) => {
                logOutput.push(args.map((arg) => String(arg)).join(' '));
                common_1.Logger.log(logOutput);
            };
            const transpiledCode = transpileModule(designPattern.exampleProgram, {
                compilerOptions: {
                    module: ModuleKind.CommonJS,
                    target: ScriptTarget.ESNext,
                },
            }).outputText;
            eval(transpiledCode);
            console.log = originalConsoleLog;
            const apiResponse = {
                logOutput,
            };
            return apiResponse;
        }
        catch (error) {
            console.error(error);
        }
    }
};
DesignPatternService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(designpattern_entity_1.DesignPatterns)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], DesignPatternService);
exports.DesignPatternService = DesignPatternService;
//# sourceMappingURL=designpattern.service.js.map