import { Body, Controller, Post, UseGuards, Get, Patch, Param, Delete } from "@nestjs/common";
import { DesignPatternService } from "./designpattern.service";
import { JwtAuthGuard } from "src/auth/jwt-auth.guard";
import { DesignPatternDto } from "./designpattern.dto";
import { DesignPatterns } from "./designpattern.entity";

@Controller('designpattern')
export class DesignPatternController {
    constructor (
        private readonly designPatternService: DesignPatternService
    ){}

   
    @Post()
    async create(@Body() createDesignPatternDto: DesignPatternDto): Promise<DesignPatternDto>{
        return this.designPatternService.create(createDesignPatternDto)
    }

    
    @Get()
    async findAll(): Promise<DesignPatterns[]> {
        return this.designPatternService.findAll()
    }

    @Get(':id')
    async findOne(@Param('id') id:number): Promise<DesignPatterns> {
        return await this.designPatternService.findOne(id)
    }

  
    @Patch(':id')
    async update (@Param('id') id:number, @Body() updateDesignPatternDto:DesignPatternDto){
        return this.designPatternService.update(id,updateDesignPatternDto)
    }

   
    @Delete(':id')
    async delete(@Param('id') id:number): Promise<void> {
        await this.designPatternService.delete(id)
    }

 
    @Get('/execute/:id')
    async execute(@Param('id') id:number): Promise<any> {
        return await this.designPatternService.execute(id)
    }

}