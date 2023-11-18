import { DesignPatternService } from "./designpattern.service";
import { DesignPatternDto } from "./designpattern.dto";
import { DesignPatterns } from "./designpattern.entity";
export declare class DesignPatternController {
    private readonly designPatternService;
    constructor(designPatternService: DesignPatternService);
    create(createDesignPatternDto: DesignPatternDto): Promise<DesignPatternDto>;
    findAll(): Promise<DesignPatterns[]>;
    findOne(id: number): Promise<DesignPatterns>;
    update(id: number, updateDesignPatternDto: DesignPatternDto): Promise<DesignPatterns>;
    delete(id: number): Promise<void>;
    execute(id: number): Promise<any>;
}
