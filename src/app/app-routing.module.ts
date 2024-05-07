import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailComponent } from './pages/detail/detail.component';
import { HomePageComponent } from './pages/home-page/home-page.component';

  
  const routes: Routes = [
  {path:'detail/:id',component:DetailComponent},
  {path:'home',component: HomePageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
