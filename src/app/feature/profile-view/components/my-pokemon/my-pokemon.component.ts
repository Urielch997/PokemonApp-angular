import { Component, computed, inject } from '@angular/core';
import { PokemonStatsService } from '../../../../shared/services/pokemon.stats.service';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import { PokemonDetailEntity } from '../../../../core/domain/pokemon-detail/pokemon-detail.entity';
import { CommonModule } from '@angular/common';
import { TYPE_COLORS } from '../../../../core/domain/pokemon-detail/types.color';
import { SelectionService } from '../../../../shared/services/selection.service';
import { forkJoin, of, switchMap } from 'rxjs';

@Component({
  selector: 'app-my-pokemon',
  imports: [CommonModule],
  templateUrl: './my-pokemon.component.html',
  styleUrl: './my-pokemon.component.css'
})
export class MyPokemonComponent {
  private selectionService = inject(SelectionService);
  private pokemonStatsService = inject(PokemonStatsService);

  ids = this.selectionService.selectedPokemon;

  pokemonResults = toSignal(
    toObservable(this.ids).pipe(
      switchMap(ids => {
        if (!ids || ids.length === 0) return of([]);

        const peticiones = ids.map(id => this.pokemonStatsService.getPokemonStats(id));


        return forkJoin(peticiones);
      })
    ),
    { initialValue: [] } 
  );


  isLoading = computed(() => this.ids().length > 0 && this.pokemonResults().length === 0);


  cardColor(type:string){
    return TYPE_COLORS[type] || TYPE_COLORS['default'];
  };

}
