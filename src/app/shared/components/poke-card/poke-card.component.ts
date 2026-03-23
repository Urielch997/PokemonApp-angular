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
  // Recibe [name]="p.name"
  name = input<string>('');
  img = input<string>('')

  // OPCIONAL: Si quieres que el ID siempre tenga 3 dígitos (001, 005, 025)
  // Puedes usar un computed que dependa del input
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
