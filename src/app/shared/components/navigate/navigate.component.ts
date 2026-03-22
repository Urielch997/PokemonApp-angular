import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-navigate',
  imports: [],
  standalone:true,
  templateUrl: './navigate.component.html',
  styleUrl: './navigate.component.css'
})
export class NavigateComponent {
  @Input() text:string = '';
  @Input() subText:string = '';
}
