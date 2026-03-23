import { Component } from '@angular/core';
import { MyPokemonComponent } from './components/my-pokemon/my-pokemon.component';
import { CardProfileComponent } from "../../shared/components/card-profile/card-profile.component";

@Component({
  selector: 'app-profile-view',
  standalone:true,
  imports: [MyPokemonComponent, CardProfileComponent],
  templateUrl: './profile-view.component.html',
  styleUrl: './profile-view.component.css'
})
export class ProfileViewComponent {
      
}
