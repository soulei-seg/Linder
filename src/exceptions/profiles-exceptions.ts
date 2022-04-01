import {HttpException, HttpStatus} from "@nestjs/common";
import {ProfileEmailAlreadyExists} from "./exception-message";

export class ProfileEmailAlreadyExistsException extends HttpException {
    constructor() {
        super(ProfileEmailAlreadyExists, HttpStatus.BAD_REQUEST);
    }
}