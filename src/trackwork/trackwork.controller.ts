// src/your-module/trackwork.controller.ts
import { Controller, Get, Post, Delete, Param, Body, NotFoundException, UseGuards, Patch } from '@nestjs/common';
import { TrackworkService } from './trackwork.service';
import { Trackwork } from './trackwork.entity'; // Update this import based on your entity name
import { TrackworkDto } from './trackwork.dto'; // Create this DTO for creating records
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('trackwork')
export class TrackworkController {
  constructor(private readonly trackworkService: TrackworkService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  async create(@Body() createTrackworkDto: TrackworkDto): Promise<Trackwork> {
    return this.trackworkService.create(createTrackworkDto);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  async findAll(): Promise<Trackwork[]> {
    console.log("hello")
    return this.trackworkService.findAll();
  }
  

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Trackwork> {
    const trackwork = await this.trackworkService.findOne(id);
    if (!trackwork) {
      throw new NotFoundException('Trackwork not found');
    }
    return trackwork;
  }

  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  async update(@Param('id') id: number, @Body() updateTrackworkDto: TrackworkDto): Promise<Trackwork> {
    return this.trackworkService.update(id, updateTrackworkDto);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  async delete(@Param('id') id: number): Promise<void> {
    await this.trackworkService.delete(id);
  }
}
