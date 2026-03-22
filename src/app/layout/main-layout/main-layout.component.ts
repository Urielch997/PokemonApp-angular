import { Component } from '@angular/core';
import { HeaderComponentComponent } from '../../shared/components/header-component/header-component.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-main-layout',
  standalone:true,
  imports: [HeaderComponentComponent,RouterOutlet],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.css'
})
export class MainLayoutComponent {

}
