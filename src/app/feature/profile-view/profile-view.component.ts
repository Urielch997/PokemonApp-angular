import { Component, inject, signal } from '@angular/core';
import { MyPokemonComponent } from './components/my-pokemon/my-pokemon.component';
import { CardProfileComponent } from "../../shared/components/card-profile/card-profile.component";
import { PokemonStatsService } from '../../shared/services/pokemon.stats.service';
import { LoadingComponent } from '../../shared/components/loading/loading.component';

@Component({
  selector: 'app-profile-view',
  standalone: true,
  imports: [MyPokemonComponent, CardProfileComponent,LoadingComponent],
  templateUrl: './profile-view.component.html',
  styleUrl: './profile-view.component.css'
})
export class ProfileViewComponent {
  // public pokemonStasService = inject(PokemonStatsService);
   load = signal<Boolean>(true)


   ngOnInit(): void {
    this.loadingTimeOut();
  }

  loadingTimeOut(){
    setTimeout(()=>{
      this.load.set(false)
    },3000)
  }
}
