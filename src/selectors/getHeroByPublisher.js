import { heroes } from "../data/heroes";

export const getHeroByPublisher = (publisher)=>{
    
    const validPublsh = ['DC Comics','Marvel Comics'];

    if(!validPublsh.includes(publisher))
    {
        throw new Error(`Publisher "${publisher}" no encontrado`)
    }

   return heroes.filter((heroe)=>heroe.publisher===publisher);
}