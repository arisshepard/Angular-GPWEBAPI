import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { FirmantesComponent } from './components/firmantes/firmantes.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'firmantes', component: FirmantesComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
