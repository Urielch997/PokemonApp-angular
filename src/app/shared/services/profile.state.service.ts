import { Injectable, signal, computed } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ProfileStateService {
  nombre = signal<string>('');
  pasatiempo = signal<string>('Jugar Fútbol'); 
  cumpleanos = signal<string>('');
  documento = signal<string>('');
  fotoUrl = signal<string | null>(null); 
  step = signal<string>('1');

  private duiRegex = /^\d{8}-\d{1}$/;

  stepCurrent = this.step.asReadonly()

 isFormValid = computed(() => {
    const basicoOk = 
      this.nombre().trim().length > 2 && 
      this.cumpleanos() !== '' && 
      this.fotoUrl() !== null;

    if (!this.esMayorDeEdad()) {
      return basicoOk;
    }

    const duiOk = this.duiRegex.test(this.documento().trim());
    return basicoOk && duiOk;
  });

  isDuiValid = computed(() => {
    const value = this.documento().trim();
    return this.duiRegex.test(value);
  });

  esMayorDeEdad = computed(() => {
    if (!this.cumpleanos()) return false;
    const hoy = new Date();
    const cumple = new Date(this.cumpleanos());
    let edad = hoy.getFullYear() - cumple.getFullYear();
    const mes = hoy.getMonth() - cumple.getMonth();
    if (mes < 0 || (mes === 0 && hoy.getDate() < cumple.getDate())) edad--;
    return edad >= 18;
  });

  edad = computed(() => {
    const fechaNacimiento = this.cumpleanos();
    if (!fechaNacimiento) return 0;

    const hoy = new Date();
    const cumple = new Date(fechaNacimiento);
    
    let edad = hoy.getFullYear() - cumple.getFullYear();
    const mes = hoy.getMonth() - cumple.getMonth();
    if (mes < 0 || (mes === 0 && hoy.getDate() < cumple.getDate())) {
      edad--;
    }
    return edad;
  });

  numStep(numStep:string){
    this.step.set(numStep)
  }

  saveData() {
    const data = {
      nombre: this.nombre(),
      pasatiempo: this.pasatiempo(),
      cumpleanos: this.cumpleanos(),
      documento: this.documento(),
      foto: this.fotoUrl(),
      step:this.step()
    };

  }
}