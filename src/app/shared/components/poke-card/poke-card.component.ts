import { Component, computed, inject, input } from '@angular/core';
import { SelectionService } from '../../services/selection.service';

@Component({
  selector: 'app-poke-card',
  imports: [],
  standalone: true,
  templateUrl: './poke-card.component.html',
  styleUrl: './poke-card.component.css'
})
export class PokeCardComponent {
  private selectionService = inject(SelectionService);

  id = input<number>(0);

  name = input<string>('');
  img = input<string>('')

  formattedId = computed(() => {
    const val = this.id();
    return val.toString().padStart(3, '0');
  });

  isSelected = computed(() =>
    this.selectionService.selectedPokemon().includes(Number(this.id()))
  );

  togglePokemon(id: number) {
    this.selectionService.toggleId(id);
  }

}
