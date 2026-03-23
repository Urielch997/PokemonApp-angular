import { inject } from '@angular/core';
import { Router, CanActivateFn } from '@angular/router';
import { ProfileStateService } from '../services/profile.state.service';

export const stepGuard: CanActivateFn = () => {
    const state = inject(ProfileStateService);
    const router = inject(Router);

    // Verificamos si el formulario del paso 1 es válido (usando tu computed)
    if (state.isFormValid()) {
        return true; // Puede pasar al siguiente paso
    }

    return router.parseUrl('/');
};