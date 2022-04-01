import {HttpException, HttpStatus} from "@nestjs/common";
import {CompanySirenAlreadyExist} from "./exception-message";

export class CompanySirenAlreadyExistException extends HttpException {
    constructor() {
        super(CompanySirenAlreadyExist, HttpStatus.BAD_REQUEST);
    }
}