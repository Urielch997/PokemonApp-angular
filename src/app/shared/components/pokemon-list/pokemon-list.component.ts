import { Component } from '@angular/core';
import { PokeCardComponent } from '../poke-card/poke-card.component';

@Component({
  selector: 'app-pokemon-list',
  imports: [PokeCardComponent],
  templateUrl: './pokemon-list.component.html',
  styleUrl: './pokemon-list.component.css'
})
export class PokemonListComponent {

}
