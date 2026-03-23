import { Injectable, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { finalize, map, Observable } from 'rxjs';
import { PokemonDetail } from '../../core/domain/pokemon-detail/pokemon-detail.model';
import { PokemonDetailEntity } from '../../core/domain/pokemon-detail/pokemon-detail.entity';

@Injectable({
    providedIn: 'root',
})
export class PokemonStatsService {
    private http = inject(HttpClient);
    private readonly API_URL = `https://pokeapi.co/api/v2/`;
    public isLoading = signal<boolean>(false);

    getPokemonStats(id: number): Observable<PokemonDetailEntity> {
        this.isLoading.set(false);
        return this.http.get<PokemonDetail>(this.API_URL + `pokemon/${id}`).pipe(
            map(response => {
                return {
                    hp: response.stats.find(item => item.stat.name === 'hp')?.base_stat || 0,
                    attack: response.stats.find(item => item.stat.name === 'attack')?.base_stat || 0,
                    defense: response.stats.find(item => item.stat.name === 'defense')?.base_stat || 0,
                    specialAttack: response.stats.find(item => item.stat.name === 'special-attack')?.base_stat || 0,
                    specialDefense: response.stats.find(item => item.stat.name === 'special-defense')?.base_stat || 0,
                    speed: response.stats.find(item => item.stat.name === 'speed')?.base_stat || 0,
                    url: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${response.id}.png`,
                    name: response.name || '',
                    type: response.types.flatMap(item => {
                        return item.type.name;
                    }).join('/'),
                    firstType: response.types[0].type.name
                }
            }
            ),
            finalize(() => this.isLoading.set(false))
        )
    }
}