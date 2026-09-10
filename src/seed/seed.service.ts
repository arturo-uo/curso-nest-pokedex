import { Injectable } from '@nestjs/common';
import axios, { AxiosInstance } from 'axios';
import { PokeResponse } from './interfaces/poke-response.interface';

@Injectable()
export class SeedService 
{
  private readonly axios: AxiosInstance = axios;

  async populatedDB() 
  {
    const { data } = await this.axios.get<PokeResponse>('https://pokeapi.co/api/v2/pokemon?limit=10');
    // data.results.forEach(async (pokemon) => {
    //   //wait this.axios.get(pokemon.url)
    //   console.log(pokemon.name)
    //   const id = pokemon.url.split('/').at(-2)
    //   console.log(id)

    // })

    data.results.forEach(({name, url}) => {
      const no = url.split('/').at(-2)
      console.log({name, no})
    })
    return data.results
  }
}
