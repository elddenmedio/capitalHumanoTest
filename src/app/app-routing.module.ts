import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageNotFoundComponent } from './_components/generals';

const routes: Routes = [
  { path: 'public', loadChildren: () => import('./_components/public/public.module').then(m => m.PublicModule) },

  { path: '', redirectTo: '/public', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
