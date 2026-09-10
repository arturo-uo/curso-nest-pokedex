import { Injectable } from '@nestjs/common';
import axios, { AxiosInstance } from 'axios';
import { PokeResponse } from './interfaces/poke-response.interface';
import { PokemonService } from 'src/pokemon/pokemon.service';

@Injectable()
export class SeedService 
{
  constructor(private readonly pokemonService: PokemonService) 
  {}

  private readonly axios: AxiosInstance = axios;

  async populatedDB() 
  {
    const { data } = await this.axios.get<PokeResponse>('https://pokeapi.co/api/v2/pokemon?limit=1351');
    // data.results.forEach(async (pokemon) => {
    //   //wait this.axios.get(pokemon.url)
    //   console.log(pokemon.name)
    //   const id = pokemon.url.split('/').at(-2)
    //   console.log(id)

    // })

    const insertPromisesArray:Promise<any>[] = []

    data.results.forEach(({name, url}) => {
      const no = url.split('/').at(-2)
      if (!no) return;
      //const pokemonInsertado = await this.pokemonService.create({no:+no, name})
      insertPromisesArray.push(this.pokemonService.create({no:+no, name}))
    })

    await Promise.all(insertPromisesArray)
    return 'Seed executed'
  }
}
