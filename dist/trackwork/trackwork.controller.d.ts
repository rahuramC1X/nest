import { TrackworkService } from './trackwork.service';
import { Trackwork } from './trackwork.entity';
import { TrackworkDto } from './trackwork.dto';
export declare class TrackworkController {
    private readonly trackworkService;
    constructor(trackworkService: TrackworkService);
    create(createTrackworkDto: TrackworkDto): Promise<Trackwork>;
    findAll(): Promise<Trackwork[]>;
    findOne(id: number): Promise<Trackwork>;
    update(id: number, updateTrackworkDto: TrackworkDto): Promise<Trackwork>;
    delete(id: number): Promise<void>;
}
