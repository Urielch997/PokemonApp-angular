import { Component } from '@angular/core';
import { UploadComponent } from '../upload/upload.component';

@Component({
  selector: 'app-card-profile',
  imports: [UploadComponent],
  standalone:true,
  templateUrl: './card-profile.component.html',
  styleUrl: './card-profile.component.css'
})
export class CardProfileComponent {

}
