import { TypeOrmModule } from "@nestjs/typeorm";
import { DesignPatterns } from "./designpattern.entity";
import { Module } from "@nestjs/common";
import { UserModule } from "src/users/user.module";
import { DesignPatternService } from "./designpattern.service";
import { DesignPatternController } from "./designpattern.controller";

@Module({
    imports: [
        TypeOrmModule.forFeature([DesignPatterns]),
        UserModule
    ],
    providers: [DesignPatternService],
    controllers: [DesignPatternController],
    exports: [DesignPatternService,TypeOrmModule.forFeature([DesignPatterns])]
})

export class DesignPatternModule{}