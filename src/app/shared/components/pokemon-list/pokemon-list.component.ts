import { Component, computed, inject, signal } from '@angular/core';
import { PokeCardComponent } from '../poke-card/poke-card.component';
import { PokemonService } from '../../services/pokemon.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { ResultsEntity } from '../../../core/domain/pokemon-preview/pokemon.entity';
import { CommonModule } from '@angular/common';
import { SelectionService } from '../../services/selection.service';

@Component({
  selector: 'app-pokemon-list',
  standalone: true,
  imports: [PokeCardComponent, CommonModule],
  templateUrl: './pokemon-list.component.html',
  styleUrl: './pokemon-list.component.css'
})
export class PokemonListComponent {
  private pokemonService = inject(PokemonService);
  private selectionService = inject(SelectionService)

  pokemonList = toSignal(this.pokemonService.getPokemonList(9, 0), { initialValue: [] as ResultsEntity[] });

  searchQuery = signal('');

  filteredPokemon = computed(() => {
    const list = this.pokemonList();
    const query = this.searchQuery().toLowerCase();
    return list.filter(p => p.name.toLowerCase().includes(query) || p.id.toString().includes(query));
  });

  enabledButton = computed(() =>
    this.selectionService.isFull()
  )



}
