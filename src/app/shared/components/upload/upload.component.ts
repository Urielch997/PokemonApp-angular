import { NgIf } from '@angular/common';
import { Component, output, signal } from '@angular/core';

@Component({
  selector: 'app-upload',
  imports: [NgIf],
  standalone: true,
  templateUrl: './upload.component.html',
  styleUrl: './upload.component.css'
})
export class UploadComponent {
  fileName = signal<string | null>(null);
  fileChanged = output<string>();

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (!input.files?.length) return;

    const file = input.files[0];

    if (!file.type.startsWith('image/')) {
      alert("Solo se permiten imágenes");
      return;
    }

    this.fileName.set(file.name);

    const reader = new FileReader();
    reader.onload = (e: any) => {
      this.fileChanged.emit(e.target.result);
    };
    reader.readAsDataURL(file);
  }

  removeFile() {
    this.fileName.set(null);
    this.fileChanged.emit('assets/user-profile.svg');
  }


}
