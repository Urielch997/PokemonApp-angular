import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerInputEvent, MatDatepickerModule } from '@angular/material/datepicker';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { HobbySelectComponent } from '../hobby-select/hobby-select.component';
import { CommonModule } from '@angular/common';
import { ProfileStateService } from '../../services/profile.state.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-perfil',
  imports: [MatFormFieldModule, MatInputModule, MatIconModule, MatDatepickerModule, MatButtonModule, MatSelectModule, MatAutocompleteModule, HobbySelectComponent, CommonModule],
  standalone: true,
  providers: [provideNativeDateAdapter()],
  templateUrl: './perfil.component.html',
  styleUrl: './perfil.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PerfilComponent {
  state = inject(ProfileStateService);
  router = inject(Router);
  maxDate = new Date();

  onDateChange(event: MatDatepickerInputEvent<Date>) {
    const date = event.value;
    if (date) {
      this.state.cumpleanos.set(date.toISOString());
    }
  }



  continuar() {
    if (this.state.isFormValid()) {
      this.state.numStep("2");
      this.state.saveData();
      this.router.navigate(['/pokemon-selection']);
    }
  }

  onDuiInput(event: Event) {
    let val = (event.target as HTMLInputElement).value.replace(/\D/g, '');
    if (val.length > 8) {
      val = val.slice(0, 8) + '-' + val.slice(8, 9);
    }
    this.state.documento.set(val);
  }
}
