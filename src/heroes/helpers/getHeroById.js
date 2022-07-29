import { heroes } from "../data/heros"


export const getHeroesById = (id) => {

    return heroes.find( hero => hero.id === id);
}
