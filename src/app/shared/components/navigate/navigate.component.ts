import { Location } from '@angular/common';
import { Component, inject, Input } from '@angular/core';

@Component({
  selector: 'app-navigate',
  imports: [],
  standalone: true,
  templateUrl: './navigate.component.html',
  styleUrl: './navigate.component.css'
})
export class NavigateComponent {
  @Input() text: string = '';
  @Input() subText: string = '';
  private location = inject(Location);

  regresar(): void {
    this.location.back();
  }
}
