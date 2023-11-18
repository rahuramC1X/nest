// src/your-module/trackwork.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Trackwork } from './trackwork.entity'; // Update this import based on your entity name
import { TrackworkDto } from './trackwork.dto'; // Create this DTO for creating records

@Injectable()
export class TrackworkService {
  constructor(
    @InjectRepository(Trackwork)
    private readonly trackworkRepository: Repository<Trackwork>,
  ) {}

  async create(TrackworkDto: TrackworkDto): Promise<Trackwork> {
    const trackwork = this.trackworkRepository.create(TrackworkDto);
    return await this.trackworkRepository.save(trackwork);
  }

  async findAll(): Promise<Trackwork[]> {
    return await this.trackworkRepository.find();
  }

  async findOne(id: number): Promise<Trackwork> {
    const trackwork = await this.trackworkRepository.findOneBy({id:id});
    if (!trackwork) {
      throw new NotFoundException(`Trackwork with ID ${id} not found`);
    }
    return trackwork;
  }

  async update(id: number, updateTrackworkDto: TrackworkDto): Promise<Trackwork> {
    const trackwork = await this.findOne(id);
    this.trackworkRepository.merge(trackwork, updateTrackworkDto);
    return await this.trackworkRepository.save(trackwork);
  }

  async delete(id: number): Promise<void> {
    const trackwork = await this.findOne(id);
    await this.trackworkRepository.remove(trackwork);
  }
}
