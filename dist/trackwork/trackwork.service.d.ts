import { Repository } from 'typeorm';
import { Trackwork } from './trackwork.entity';
import { TrackworkDto } from './trackwork.dto';
export declare class TrackworkService {
    private readonly trackworkRepository;
    constructor(trackworkRepository: Repository<Trackwork>);
    create(TrackworkDto: TrackworkDto): Promise<Trackwork>;
    findAll(): Promise<Trackwork[]>;
    findOne(id: number): Promise<Trackwork>;
    update(id: number, updateTrackworkDto: TrackworkDto): Promise<Trackwork>;
    delete(id: number): Promise<void>;
}
