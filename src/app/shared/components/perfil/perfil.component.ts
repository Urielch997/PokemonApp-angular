import { Component, ChangeDetectionStrategy } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { HobbySelectComponent } from '../hobby-select/hobby-select.component';

@Component({
  selector: 'app-perfil',
  imports: [MatFormFieldModule, MatInputModule, MatIconModule, MatDatepickerModule, MatButtonModule, MatSelectModule, MatAutocompleteModule,HobbySelectComponent],
  standalone: true,
  providers: [provideNativeDateAdapter()],
  templateUrl: './perfil.component.html',
  styleUrl: './perfil.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PerfilComponent {
    
}
