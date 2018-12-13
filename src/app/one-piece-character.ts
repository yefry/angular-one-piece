import { DemonFruit } from './demon-fruit';

export class OnePieceCharacter {
    name: string;
    nickname?: string;
    crew?: string;
    demonFruit?: DemonFruit;
    urlImage?: string;
    sexGender?: string;
    power?: string; // TODO can be a class... it can be level too or punctuation
    reward?: number;
    pirate?: boolean;
}
