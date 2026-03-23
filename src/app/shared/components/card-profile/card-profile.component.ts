import { Component, output, signal } from '@angular/core';
import { UploadComponent } from '../upload/upload.component';

@Component({
  selector: 'app-card-profile',
  imports: [UploadComponent],
  standalone: true,
  templateUrl: './card-profile.component.html',
  styleUrl: './card-profile.component.css'
})
export class CardProfileComponent {

  profileImage = signal<string>('assets/user-profile.svg');
  fileChanged = output<string>();



  onImageUploaded(newImage: string) {
    this.profileImage.set(newImage);
  }

}
