import { DevilFruitType } from './devil-fruit-type.enum';

export class DevilFruit {
    name: string;
    description: string;
    type: DevilFruitType;
    ability: string;
    model?: string;
    urlImage: string;
    color?: string;
    relatedFruit?: string;
    power?: string; // it can be level too or puntuaction
    history?: string;
}
