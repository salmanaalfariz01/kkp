import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule
import {MatListModule} from '@angular/material/list';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatTabsModule} from '@angular/material/tabs';



@Component({
  selector: 'app-women',
  standalone: true,
  imports: [MatListModule, MatSidenavModule,CommonModule,MatTabsModule],
  templateUrl: './women.component.html',
  styleUrl: './women.component.css'
})
export class WomenComponent {
  shirts = [
    { name: 'Shirt 1', price: 'Rp 29.99', image: 'assets/women/1.jpeg' },
    { name: 'Shirt 2', price: 'Rp 24.99', image: 'assets/women/1.jpeg' },
    { name: 'Shirt 3', price: 'Rp 19.99', image: 'assets/women/1.jpeg' },
    { name: 'Shirt 4', price: 'Rp 34.99', image: 'assets/women/1.jpeg' },
    { name: 'Shirt 5', price: 'Rp 39.99', image: 'assets/women/1.jpeg' },
    { name: 'Shirt 6', price: 'Rp 49.99', image: 'assets/women/1.jpeg' },
    { name: 'Shirt 7', price: 'Rp 29.99', image: 'assets/women/1.jpeg' },
    { name: 'Shirt 8', price: 'Rp 24.99', image: 'assets/women/1.jpeg' },
    { name: 'Shirt 9', price: 'Rp 19.99', image: 'assets/women/1.jpeg' },
    { name: 'Shirt 10', price: 'Rp 34.99', image: 'assets/women/1.jpeg' },
    { name: 'Shirt 11', price: 'Rp 39.99', image: 'assets/women/1.jpeg' },
    { name: 'Shirt 12', price: 'Rp 49.99', image: 'assets/women/1.jpeg' },
    { name: 'Shirt 13', price: 'Rp 29.99', image: 'assets/women/1.jpeg' },
    { name: 'Shirt 14', price: 'Rp 24.99', image: 'assets/women/1.jpeg' },
    { name: 'Shirt 15', price: 'Rp 19.99', image: 'assets/women/1.jpeg' },
    { name: 'Shirt 16', price: 'Rp 19.99', image: 'assets/women/1.jpeg' },
    { name: 'Shirt 17', price: 'Rp 19.99', image: 'assets/women/1.jpeg' },
    { name: 'Shirt 18', price: 'Rp 19.99', image: 'assets/women/1.jpeg' },
  ];
}
