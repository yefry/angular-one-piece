import { DevilFruit } from './devil-fruit';

export class OnePieceCharacter {
    name: string;
    nickname?: string;
    crew?: string;
    demonFruit?: DevilFruit;
    urlImage: string;
    ability: string;
    power?: string; // TODO can be a class... it can be level too or punctuation
    reward?: number;
    pirate?: boolean;
    marine?: boolean;
    sexGender?: string;
}
