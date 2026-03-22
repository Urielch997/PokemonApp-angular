import { Component, signal, computed } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatChipsModule } from '@angular/material/chips';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  standalone:true,
  imports:[MatAutocompleteModule,MatChipsModule,MatInputModule,ReactiveFormsModule],
  selector: 'app-hobby-select',
  templateUrl: './hobby-select.component.html',
})
export class HobbySelectComponent {

  hobbies = [
    'Jugar Fútbol',
    'Jugar Basketball',
    'Jugar Tennis',
    'Jugar Voleibol',
    'Jugar Fifa',
    'Jugar Videojuegos'
  ];

  searchControl = new FormControl('');

  selectedHobbies = signal<string[]>([]);

  filteredOptions = computed(() => {

    const search = this.searchControl.value?.toLowerCase() || '';

    return this.hobbies.filter(h =>
      h.toLowerCase().includes(search) &&
      !this.selectedHobbies().includes(h)
    );

  });

  select(option:string){

    this.selectedHobbies.update(list => [...list, option]);

    this.searchControl.setValue('');

  }

  remove(option:string){

    this.selectedHobbies.update(list =>
      list.filter(h => h !== option)
    );

  }

}