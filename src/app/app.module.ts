import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatListModule } from '@angular/material/list';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatTabsModule} from '@angular/material/tabs';
import { MatDialogModule } from '@angular/material/dialog';
import {MatIconModule} from '@angular/material/icon';







import { AppRoutingModule } from './app-routing.module'; // Ensure no circular imports here
import { AppComponent } from './app.component';
import { WomenComponent } from './women/women.component';
import { MenComponent } from './men/men.component';
import { KidsComponent } from './kids/kids.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
//import { PurchaseComponent } from './purchase/purchase.component';



@NgModule({
  declarations: [
    AppComponent,
    WomenComponent,
    MenComponent,
    KidsComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
  //  PurchaseComponent

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatListModule,
    CommonModule,
    MatButtonModule,
    AppRoutingModule, // Ensure this is correctly imported
    MatToolbarModule,
    MatSidenavModule,
    MatTabsModule,
    MatDialogModule,
    MatIconModule
],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
