import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';
import {MatSidenavModule} from '@angular/material/sidenav';
import { NgOptimizedImage, CommonModule } from '@angular/common';




@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatToolbarModule, MatButtonModule, MatSidenavModule,MatListModule, CommonModule, NgOptimizedImage],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  
  constructor(private router: Router) {} // Inject Router service

  navigateToWomen() {
    this.router.navigate(['/women']); // Navigate to the /women route
  }
  navigateToMen() {
    this.router.navigate(['/men']); // Navigate to the /man route
  }
  navigateToKids() {
    this.router.navigate(['/kids']); // Navigate to the /kids route
  }
  navigateToHome() {
    this.router.navigate(['/home']); // Navigate to the /kids route
  }

  isHome(): boolean {
    return this.router.url === '/home'; // Mengecek apakah URL saat ini adalah /home
  }

  isWomen(): boolean {
    return this.router.url === '/women'; // Mengecek apakah URL saat ini adalah /women
  }
  isMen(): boolean {
    return this.router.url === '/men'; // Mengecek apakah URL saat ini adalah /man
  }
  
  isKids(): boolean {
    return this.router.url === '/kids'; // Mengecek apakah URL saat ini adalah /kids
  }
}
