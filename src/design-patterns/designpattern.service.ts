import { Injectable, Logger, NotFoundException } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { DesignPatterns } from './designpattern.entity'
import { DesignPatternDto } from './designpattern.dto'
import * as tsNode from 'ts-node';
tsNode.register()

@Injectable()
export class DesignPatternService {
    constructor(
        @InjectRepository(DesignPatterns)
        private readonly designPatternRepository: Repository<DesignPatterns>,
        
    ) { }
    formatCodeAsSingleLine(code) {
        // Replace newlines and tabs with spaces to make it a single line
        const formattedCode = code.replace(/\n/g, ' ').replace(/\t/g, ' ');
        return formattedCode;
    }


    async create(DesignPatternDto: DesignPatternDto): Promise<DesignPatternDto> {
        const { exampleProgram } = DesignPatternDto
        const formattedCode = this.formatCodeAsSingleLine(exampleProgram)
        DesignPatternDto.exampleProgram = formattedCode
        const designPattern = this.designPatternRepository.create(DesignPatternDto);
        return await this.designPatternRepository.save(designPattern)
    }

    async findAll(): Promise<DesignPatterns[]> {
        return await this.designPatternRepository.find()
    }

    async findOne(id: number): Promise<DesignPatterns> {
        const designPattern = await this.designPatternRepository.findOneBy({ id: id })
        if (!designPattern) {
            throw new NotFoundException(`DesignPattern with Id ${id} not found`)
        }
        return designPattern
    }

    async update(id: number, updatDesignPatternDto: DesignPatternDto) {
        const designPattern = await this.findOne(id)
        this.designPatternRepository.merge(designPattern, updatDesignPatternDto);
        return await this.designPatternRepository.save(designPattern)
    }

    async delete(id: number): Promise<void> {
        const designPattern = await this.findOne(id);
        await this.designPatternRepository.remove(designPattern)
    }

    async execute(id: number): Promise<any> {
        const { transpileModule, ModuleKind, ScriptTarget } = require('typescript');
        try {
            const designPattern = await this.findOne(id);
            const logOutput = []; // Initialize the log output array
            // Override console.log
            const originalConsoleLog = console.log;
            console.log = (...args) => {
                logOutput.push(args.map((arg) => String(arg)).join(' '));
                Logger.log(logOutput)
            };
            // Transpile the TypeScript code to JavaScript
            const transpiledCode = transpileModule(designPattern.exampleProgram, {
                compilerOptions: {
                    module: ModuleKind.CommonJS,
                    target: ScriptTarget.ESNext,
                },
            }).outputText;

            // Execute the transpiled code
            eval(transpiledCode);

            // Restore the original console.log
            console.log = originalConsoleLog;

            // Return the captured log output as part of the API response
            const apiResponse = {
                logOutput,
                // Other data from your execution, if needed
            };

            return apiResponse; // This will print the API response to the console
        } catch (error) {
            console.error(error);
        }
        // This will print the API response to the console

    }
}