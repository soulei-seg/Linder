import {Module} from '@nestjs/common';
import {OffersModule} from "./offers.module";
import {ProfilesModule} from "./profiles.module";

@Module({
    imports: [OffersModule, ProfilesModule]
})
export class DatabasesModule {
}
