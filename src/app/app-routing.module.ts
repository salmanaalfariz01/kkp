import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WomenComponent } from './women/women.component';
import { MenComponent } from './men/men.component';
import { KidsComponent } from './kids/kids.component';
import { HomeComponent } from './home/home.component';
//import { PurchaseComponent } from './purchase/purchase.component';

export const routes: Routes = [
  { path: 'women', component: WomenComponent },
  { path: 'men', component: MenComponent },
  { path: 'kids', component: KidsComponent },
  { path: 'home', component: HomeComponent },
//  { path: 'women/purchase/:shirtId', component: PurchaseComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
