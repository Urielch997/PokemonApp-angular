import { Component, DestroyRef, inject, signal } from '@angular/core';
import { PokemonListComponent } from '../../shared/components/pokemon-list/pokemon-list.component';
import { NavigateComponent } from '../../shared/components/navigate/navigate.component';
import { CardProfileComponent } from '../../shared/components/card-profile/card-profile.component';
import { LoadingComponent } from '../../shared/components/loading/loading.component';
import { timer } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-pokemon-selecction',
  standalone: true,
  imports: [PokemonListComponent, NavigateComponent, CardProfileComponent, LoadingComponent],
  templateUrl: './pokemon-selecction.component.html',
  styleUrl: './pokemon-selecction.component.css'
})
export class PokemonSelecctionComponent {
  isLoading = signal<boolean>(true)
  private destroyRef = inject(DestroyRef);

  ngOnInit() {
    this.loading();
  }


  loading() {
    timer(3000)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(() => {
        this.isLoading.set(false);
      });
  }
}
