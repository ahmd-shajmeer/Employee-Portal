import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AdminService } from '../services/admin.service';
import { ToastrService } from 'ngx-toastr';

export const authGuard: CanActivateFn = () => {
  const authStatus = inject(AdminService)
  const toater = inject(ToastrService)
  const router = inject(Router)
  if(authStatus.isLoggedIn()){
    return true;
  }else{
    toater.warning("Operation Deneid,Please Login")
    router.navigateByUrl("")
    return false;
  }
};
