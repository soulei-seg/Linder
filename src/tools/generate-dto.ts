import {OfferDto} from "../offers/presentation/dto/offer.dto";
import {ProfileDto} from "../profiles/presentation/dto/profile.dto";
import {MatchDto} from "../matchs/presentation/dto/match.dto";

export function generateMockOfferDto() {
    const offerDto = new OfferDto();
    offerDto.description = "Barman au restaurant de Titeuf";
    offerDto.keywords = ["barman", "restauration"];
    offerDto.salary = 19.3;
    offerDto.type = ["CDD"];
    offerDto.status = "open";
    offerDto.isOpen = true;
    return offerDto;
}


export function generateMockProfileDto(firstname: string = "Michael", lastname: string = "Jackson") {
    const profileDto = new ProfileDto();
    profileDto.picture = "google.com/images/mock_image.png";
    profileDto.firstname = "Michael";
    profileDto.lastname = "Jackson";
    profileDto.mail = (profileDto.firstname + "." + profileDto.lastname + "@gmail.com").toLowerCase();
    profileDto.keywords = ["barman", "serveur"];
    profileDto.salary = 18.2;
    profileDto.offerType = ["CDD", "CDI"];
    return profileDto;
}

export function generateMockMatchDto() {
    const matchDto = new MatchDto();
    matchDto.offer = generateMockOfferDto();
    matchDto.profile = generateMockProfileDto();
    matchDto.status = 'open';
    return matchDto;
}


