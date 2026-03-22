import { NgIf } from '@angular/common';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-upload',
  imports: [NgIf],
  standalone:true,
  templateUrl: './upload.component.html',
  styleUrl: './upload.component.css'
})
export class UploadComponent {
  fileName = signal<string | null>(null);

  onFileSelected(event: Event) {

    const input = event.target as HTMLInputElement;

    if (!input.files?.length) return;

    const file = input.files[0];

    if (!file.type.startsWith('image/')) {
      alert("Solo se permiten imágenes");
      return;
    }

    this.fileName.set(file.name);
  }

  removeFile() {
    this.fileName.set(null);
  }
}
