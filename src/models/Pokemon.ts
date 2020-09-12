import Sprites from './Sprites';
import Types from './Types';

export default interface Pokemon {
    height: number;
    name: string;
    sprites: Sprites;
    types: Types
}
