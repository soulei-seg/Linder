import {ApiProperty} from "@nestjs/swagger";
import {IsNotEmpty, IsNumber, IsString} from 'class-validator';

export class CompanyDto {
    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    name: string

    @IsNumber()
    @IsNotEmpty()
    @ApiProperty()
    siren: number

    @ApiProperty()
    description: string

    @ApiProperty()
    logo: string

    @ApiProperty()
    date: string
}
