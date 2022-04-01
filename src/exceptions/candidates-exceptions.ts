import {HttpException, HttpStatus} from "@nestjs/common";
import {candidateEMAILAlreadyExists} from "./exception-message";

export class CandidateEmailAlreadyExistsException extends HttpException {
    constructor() {
        super(candidateEMAILAlreadyExists, HttpStatus.BAD_REQUEST);
    }
}