import { IsString } from "class-validator";

export class DesignPatternDto{
    @IsString()
    designPattern: string;

    @IsString()
    exampleProgram: string;

}
