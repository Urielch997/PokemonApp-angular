import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Pokemon } from '../../core/domain/pokemon-preview/pokemon.model';
import { ResultsEntity } from '../../core/domain/pokemon-preview/pokemon.entity';

@Injectable({
    providedIn: 'root',
})
export class PokemonService {
    private http = inject(HttpClient);
    private readonly API_URL = `https://pokeapi.co/api/v2/`;

    getPokemonList(size: number, offset: number): Observable<ResultsEntity[]> {
       return this.http.get<Pokemon>(this.API_URL + `pokemon?limit=${size}&offset=${offset}`).pipe(
            map(response => {
                const map: ResultsEntity[] = response.results.map((pokemon, index) => {
                    // Extraer ID de la URL (ej: .../pokemon/1/)
                    const urlParts = pokemon.url.split('/').filter(Boolean);
                    const id = urlParts[urlParts.length - 1];

                    return {
                        id: Number(id),
                        name: pokemon.name,
                        url: pokemon.url,
                        // URL de imagen oficial de alta calidad
                        image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${id}.png`
                    };
                })

                return map;
            }

            )
        )
    }
}