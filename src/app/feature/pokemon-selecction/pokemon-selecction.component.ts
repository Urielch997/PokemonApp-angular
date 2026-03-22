import { Component } from '@angular/core';
import { PokemonListComponent } from '../../shared/components/pokemon-list/pokemon-list.component';
import { NavigateComponent } from '../../shared/components/navigate/navigate.component';
import { CardProfileComponent } from '../../shared/components/card-profile/card-profile.component';

@Component({
  selector: 'app-pokemon-selecction',
  standalone:true,
  imports: [PokemonListComponent,NavigateComponent,CardProfileComponent],
  templateUrl: './pokemon-selecction.component.html',
  styleUrl: './pokemon-selecction.component.css'
})
export class PokemonSelecctionComponent {

}
