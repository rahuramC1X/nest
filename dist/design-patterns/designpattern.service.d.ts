import { Repository } from 'typeorm';
import { DesignPatterns } from './designpattern.entity';
import { DesignPatternDto } from './designpattern.dto';
export declare class DesignPatternService {
    private readonly designPatternRepository;
    constructor(designPatternRepository: Repository<DesignPatterns>);
    formatCodeAsSingleLine(code: any): any;
    create(DesignPatternDto: DesignPatternDto): Promise<DesignPatternDto>;
    findAll(): Promise<DesignPatterns[]>;
    findOne(id: number): Promise<DesignPatterns>;
    update(id: number, updatDesignPatternDto: DesignPatternDto): Promise<DesignPatterns>;
    delete(id: number): Promise<void>;
    execute(id: number): Promise<any>;
}
