import {HttpException, HttpStatus} from "@nestjs/common";
import {OfferStatusIsInvalid} from "./exception-message";

export class offerStatusInvalidException extends HttpException {
    constructor() {
        super(OfferStatusIsInvalid, HttpStatus.BAD_REQUEST);
    }
}