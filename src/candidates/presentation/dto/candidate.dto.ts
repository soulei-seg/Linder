import { ApiProperty } from "@nestjs/swagger"
import {IsArray, IsNotEmpty, IsString, IsNumber} from "class-validator";

export class CandidateDto {

    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    photo_url: string

    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    first_name: string

    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    last_name: string

    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    description: string

    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    email: string

    @IsArray()
    @IsNotEmpty()
    @ApiProperty()
    key_words: string[]

    @IsNumber()
    @IsNotEmpty()
    @ApiProperty()
    salary: number

    @IsArray()
    @IsNotEmpty()
    @ApiProperty()
    type: string[]
}
