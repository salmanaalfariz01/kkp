import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WomenComponent } from './women/women.component';
import { MenComponent } from './men/men.component';
import { KidsComponent } from './kids/kids.component';
import { HomeComponent } from './home/home.component';
import { BuyComponent } from './buy/buy.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    WomenComponent,
    MenComponent,
    KidsComponent,
    HomeComponent,
    BuyComponent,
    HeaderComponent,
    FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'project';
}
