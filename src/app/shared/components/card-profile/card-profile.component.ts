import { Component, computed, inject, output } from '@angular/core';
import { UploadComponent } from '../upload/upload.component';
import { ProfileStateService } from '../../services/profile.state.service';

@Component({
  selector: 'app-card-profile',
  imports: [UploadComponent],
  standalone: true,
  templateUrl: './card-profile.component.html',
  styleUrl: './card-profile.component.css'
})
export class CardProfileComponent {
  state = inject(ProfileStateService);
  fileChanged = output<string>();

  profileImage = computed(() => this.state.fotoUrl() || 'assets/user-profile.svg');

  onImageUploaded(base64: string) {
    this.state.fotoUrl.set(base64); 
  }

}
