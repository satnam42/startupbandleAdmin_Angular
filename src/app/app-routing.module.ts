import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParentComponent } from './pages/parent/parent.component';
import { LandingComponent } from './pages/landing/landing.component';
import { Chat2Component } from './pages/chat/chat2/chat2.component';
import { CalenderComponent } from './pages/calender/calender.component';
// import { ChatComponent } from './pages/chat/chat.component';
// main routes
const routes: Routes = [
  { path: '', redirectTo: 'landing', pathMatch: 'full' },
  { path: 'landing', component:LandingComponent },
  { path: 'term-condition', loadChildren: '../app/pages/term-condition/term-condition.module#TermConditionModule' },
  { path: 'login', loadChildren: '../app/pages/login/login.module#LoginModule' },
  { path: 'forgot-password', loadChildren: '../app/pages/forgot-password/forgot-password.module#ForgotPasswordModule' },
  { path: 'sign-up', loadChildren: '../app/pages/sign-up/sign-up.module#SignUpModule' },
  { path: 'search', loadChildren: '../app/pages/search/search.module#SearchModule' },

  // { path: 'chat', component:ChatComponent },
  {
    path: '', component: ParentComponent, children: [
      {
        path: 'parent',
        loadChildren: () => import('.//pages/parent/parent.module').then(m => m.ParentModule),
        // data: { title: 'Dashboard', breadcrumb: 'DASHBOARD' }
      },
    ]
  },
                                                                                                
  {
    path: 'chat', 
    loadChildren: () => import('.//pages/chat/chat.module').then(m => m.ChatModule), 
    data: { title: 'Chat', breadcrumb: 'CHAT'}
  },

  // {
  //   path: 'calender', 
  //   loadChildren: () => import('.//pages/calender/calender.module').then(m => m.CalenderModule), 
  //   data: { title: 'Calender', breadcrumb: 'Calender'}
  // },

  { path: 'chat2', component: Chat2Component },

  { path: 'calender', component: CalenderComponent },


  { path: '**', redirectTo: 'landing' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true, enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }