import { Component, signal } from '@angular/core';
import { NavigateComponent } from '../../shared/components/navigate/navigate.component';
import { CardProfileComponent } from '../../shared/components/card-profile/card-profile.component';
import { PerfilComponent } from '../../shared/components/perfil/perfil.component';

@Component({
  selector: 'app-home',
  imports: [NavigateComponent,CardProfileComponent,PerfilComponent],
  standalone:true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  
}
