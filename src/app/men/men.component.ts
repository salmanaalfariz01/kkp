import { Component } from '@angular/core';
import { NgOptimizedImage, CommonModule } from '@angular/common';
import {MatListModule} from '@angular/material/list';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatTabsModule} from '@angular/material/tabs';

interface Shirt {
  name: string;
  image: string;
  price: string;
  description?: string;
}
@Component({
  selector: 'app-men',
  standalone: true,
  imports: [NgOptimizedImage, CommonModule, MatTabsModule, MatSidenavModule ,MatListModule],
  templateUrl: './men.component.html',
  styleUrl: './men.component.css'
})
export class MenComponent {
  shirts = [
    { name: 'Square Neck Short Sleeve Shirt Blouse', price: 'Rp 200.000', 
      image: 'assets/women/1.png',
      images:[
        'assets/women/1.png',
        'assets/women/1-2.png',
        'assets/women/1-3.png',
        'assets/women/1-4.png',
        'assets/women/1-5.png',
        'assets/women/1-6.png',
        'assets/women/1-7.png',
      ], 
      description: 'Square Neck Short Sleeve Shirt Blouse'
    },
    { name: 'Shirt 2', price: 'Rp 210.000', image: 'assets/women/2.jpeg' },
    { name: 'Shirt 3', price: 'Rp 220.000', image: 'assets/women/3.jpeg' },
    { name: 'Shirt 4', price: 'Rp 230.000', image: 'assets/women/4.jpeg' },
    { name: 'Shirt 5', price: 'Rp 240.000', image: 'assets/women/5.jpeg' },
    { name: 'Shirt 6', price: 'Rp 250.000', image: 'assets/women/6.jpeg' },
    { name: 'Atasan Rajut Korean', price: 'Rp 80.000', image: 'assets/women/7.png', 
      images:[
        'assets/women/7-1.png',
        'assets/women/7-2.png',
        'assets/women/7-3.png',
        'assets/women/7-4.png',
      ], 
      description: 'Atasan Rajut Korean'},
    { name: 'Shirt 8', price: 'Rp 24.99', image: 'assets/women/2.jpeg' },
    { name: 'Shirt 9', price: 'Rp 19.99', image: 'assets/women/2.jpeg' },
    { name: 'Shirt 10', price: 'Rp 34.99', image: 'assets/women/2.jpeg' },
    { name: 'Shirt 11', price: 'Rp 39.99', image: 'assets/women/2.jpeg' },
    { name: 'Shirt 12', price: 'Rp 49.99', image: 'assets/women/2.jpeg' },
    { name: 'Shirt 13', price: 'Rp 29.99', image: 'assets/women/2.jpeg' },
    { name: 'Shirt 14', price: 'Rp 24.99', image: 'assets/women/2.jpeg' },
    { name: 'Shirt 15', price: 'Rp 19.99', image: 'assets/women/2.jpeg' },
    { name: 'Shirt 16', price: 'Rp 19.99', image: 'assets/women/2.jpeg' },
    { name: 'Shirt 17', price: 'Rp 19.99', image: 'assets/women/2.jpeg' },
    { name: 'Shirt 18', price: 'Rp 19.99', image: 'assets/women/2.jpeg' },
  ];

  isDialogOpen = false;
  selectedShirt: any = null;
  selectedImage: string = '';
  selectedIndex: number = 0;

  openDialog(shirt: any) {
    this.selectedShirt = shirt;
    this.selectedImage = shirt.images[0];
    this.selectedIndex = 0;
    this.isDialogOpen = true;
  }

  closeDialog() {
    this.isDialogOpen = false;
  }

  selectImage(index: number) {
    this.selectedIndex = index;
    this.selectedImage = this.selectedShirt.images[index];
  }

  previousImage() {
    if (this.selectedIndex > 0) {
      this.selectedIndex--;
      this.selectedImage = this.selectedShirt.images[this.selectedIndex];
    }
  }

  nextImage() {
    if (this.selectedIndex < this.selectedShirt.images.length - 1) {
      this.selectedIndex++;
      this.selectedImage = this.selectedShirt.images[this.selectedIndex];
    }
  }

  openWhatsApp(shirt: Shirt) {
    const message = encodeURIComponent(`Halo, saya ingin memesan produk ini: ${shirt.name} dengan harga ${shirt.price}.`);
    window.open(`https://wa.me/yourNumber?text=${message}`, '_blank');
  }

  // Modal

  isOpen: boolean = false; // Variabel untuk kontrol tampilan dialog

  openModal(): void {
    this.isOpen = true; // Menampilkan dialog
  }

  closeModal(): void {
    this.isOpen = false; // Menyembunyikan dialog
  }

  // Menutup dialog ketika mengklik di luar dialog
  onOverlayClick(event: MouseEvent): void {
    const target = event.target as HTMLElement;
    if (target.classList.contains('overlay')) {
      this.closeDialog();
    }
  }

}
