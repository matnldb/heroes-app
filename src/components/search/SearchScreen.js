import React, { useMemo } from 'react'
import { heroes } from '../../data/heroes'
import { HeroCard } from '../heroes/HeroCard'
import { useForm } from '../../hooks/useForm';
import { useSearchParams } from 'react-router-dom';
import { getHeroByName } from '../../selectors/getHeroByName';

export const SearchScreen = () => {

    const [values, handleInputChange] = useForm({searchText:''});
    const {searchText} = values;
    let [searchParams, setSearchParams] = useSearchParams();
    
    const heroesFiltrados =useMemo(() => getHeroByName(searchParams.get('q')), [searchParams])

  const handleSubmit = e=>{
            e.preventDefault();
            let [resultado] = getHeroByName(searchText)
            setSearchParams(`q=${resultado.superhero}`);
          }
  return (
    <div>
        <h1>SearchScreen</h1>
        <hr/>
        <div className='row'>
            <div className='col-5'>
                <h4>Search Form</h4>
                <hr/>   
                <form>
                    <input 
                        type='text' placeholder='Find your hero' className='form-control' autoComplete='off'
                        name = 'searchText' value={searchText} 
                        onChange={handleInputChange}/>

                    <button 
                        type='submit' className='btn w-100 btn-outline-primary'
                        onClick={handleSubmit}>Search</button>    
                </form>
            </div>
            <div className='col-7'>
                <h4>Results</h4>
                <hr/>   
                 {
                        heroesFiltrados.map(h=>(
                            <HeroCard key={h.id} {...h}/>
                        ))
                 }
            </div>
                
        </div>
    </div>
  )
}
