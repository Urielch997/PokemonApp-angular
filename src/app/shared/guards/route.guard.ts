import { inject } from '@angular/core';
import { Router, CanActivateFn } from '@angular/router';
import { ProfileStateService } from '../services/profile.state.service';

export const stepGuard: CanActivateFn = () => {
    const state = inject(ProfileStateService);
    const router = inject(Router);
    
    if (state.isFormValid()) {
        return true; 
    }

    return router.parseUrl('/');
};