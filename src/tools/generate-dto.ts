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
    profileDto.photo_url = "google.com/images/mock_image.png";
    profileDto.first_name = "Michael";
    profileDto.last_name = "Jackson";
    profileDto.email = (profileDto.first_name + "." + profileDto.last_name + "@gmail.com").toLowerCase();
    profileDto.key_words = ["barman", "serveur"];
    profileDto.salary = 18.2;
    profileDto.type = ["CDD", "CDI"];
    return profileDto;
}

export function generateMockMatchDto() {
    const matchDto = new MatchDto();
    matchDto.offer = generateMockOfferDto();
    matchDto.profile = generateMockProfileDto();
    matchDto.status = 'open';
    return matchDto;
}


