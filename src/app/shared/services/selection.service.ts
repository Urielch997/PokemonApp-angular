import { computed, Injectable, signal } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class SelectionService {
    private _selectedPokemon = signal<number[]>([]);


    selectedPokemon = this._selectedPokemon.asReadonly();


    addId(id: number) {
        this._selectedPokemon.update(ids => {
            if (ids.includes(id) || ids.length >= 3) {
                return ids;
            }
            return [...ids, id];
        });
    }


    removeId(id: number) {
        this._selectedPokemon.update(ids => ids.filter(i => i !== id));
    }

    clearTeam() {
        this._selectedPokemon.set([]);
    }

    isSelected(id: number): boolean {
        return this._selectedPokemon().includes(id);
    }

    toggleId(id: number) {
        this._selectedPokemon.update(ids => {
            if (ids.includes(id)) {
                // Si ya está, lo quitamos
                return ids.filter(i => i !== id);
            }
            // Si no está, validamos el límite de 3 antes de añadir
            return ids.length < 3 ? [...ids, id] : ids;
        });
    }

   isFull = computed(() => this._selectedPokemon().length >= 3);
}