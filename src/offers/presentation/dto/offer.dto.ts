import {ApiProperty} from "@nestjs/swagger";
import {IsArray, IsBoolean, IsNotEmpty, IsNumber, IsString} from "class-validator";

export class OfferDto {
    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    description: string;

    @IsArray()
    @IsNotEmpty()
    @ApiProperty()
    keywords: string[];

    @IsNumber()
    @IsNotEmpty()
    @ApiProperty()
    salary: number;

    @IsArray()
    @IsNotEmpty()
    @ApiProperty()
    type: string[];

    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    status: string;

    @IsBoolean()
    @IsNotEmpty()
    @ApiProperty()
    isOpen: boolean;

    @IsNumber()
    @IsNotEmpty()
    @ApiProperty()
    companyId: number;
}
