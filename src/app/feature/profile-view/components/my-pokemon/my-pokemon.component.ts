import { Component, computed, inject } from '@angular/core';
import { PokemonStatsService } from '../../../../shared/services/pokemon.stats.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { PokemonDetailEntity } from '../../../../core/domain/pokemon-detail/pokemon-detail.entity';
import { CommonModule } from '@angular/common';
import { TYPE_COLORS } from '../../../../core/domain/pokemon-detail/types.color';

@Component({
  selector: 'app-my-pokemon',
  imports: [CommonModule],
  templateUrl: './my-pokemon.component.html',
  styleUrl: './my-pokemon.component.css'
})
export class MyPokemonComponent {
  private pokemonStatsService = inject(PokemonStatsService);

  pokemonStats = toSignal(this.pokemonStatsService.getPokemonStats(1), { initialValue: {} as PokemonDetailEntity });
  pokemonStats2 = toSignal(this.pokemonStatsService.getPokemonStats(6), { initialValue: {} as PokemonDetailEntity });
  pokemonStats3 = toSignal(this.pokemonStatsService.getPokemonStats(9), { initialValue: {} as PokemonDetailEntity });

  pokeStats = computed(() => {
    return this.pokemonStats();
  })

  pokeStats2 = computed(() => {
    return this.pokemonStats2();
  })

  pokeStats3 = computed(() => {
    return this.pokemonStats3();
  })

  cardColor = computed(() => {
    const type = this.pokeStats().firstType;
    return TYPE_COLORS[type] || TYPE_COLORS['default'];
  });


   cardColor2 = computed(() => {
    const type = this.pokeStats2().firstType;
    return TYPE_COLORS[type] || TYPE_COLORS['default'];
  });

     cardColor3 = computed(() => {
    const type = this.pokeStats3().firstType;
    return TYPE_COLORS[type] || TYPE_COLORS['default'];
  });
}
