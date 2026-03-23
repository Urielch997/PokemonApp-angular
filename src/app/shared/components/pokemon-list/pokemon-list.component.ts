import { Component, computed, inject, signal } from '@angular/core';
import { PokeCardComponent } from '../poke-card/poke-card.component';
import { PokemonService } from '../../services/pokemon.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { ResultsEntity } from '../../../core/domain/pokemon-preview/pokemon.entity';
import { CommonModule } from '@angular/common';
import { SelectionService } from '../../services/selection.service';
import { Router } from '@angular/router';
import { ProfileStateService } from '../../services/profile.state.service';

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
  private profileService = inject(ProfileStateService)
  private route = inject(Router);

  pokemonList = toSignal(this.pokemonService.getPokemonList(151, 0), { initialValue: [] as ResultsEntity[] });

  searchQuery = signal('');

  filteredPokemon = computed(() => {
    const list = this.pokemonList();
    const query = this.searchQuery().toLowerCase();
    return list.filter(p => p.name.toLowerCase().includes(query) || p.id.toString().includes(query));
  });

  enabledButton = computed(() =>
    this.selectionService.isFull()
  )


  save() {
    this.profileService.step.set("3");
    this.route.navigate(["/profile-view"])
  }



}
