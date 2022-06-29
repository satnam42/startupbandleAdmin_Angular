import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParentProfileComponent } from './parent-profile/parent-profile.component';
export const routes: Routes = [
    // { path: '', redirectTo: 'home', pathMatch: 'full' },
    
    {
        path: 'parent-profile', component: ParentProfileComponent,
        data: { title: 'parent-profile', breadcrumb: 'Account' }
    },
    

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ParentRoutingModule { }



