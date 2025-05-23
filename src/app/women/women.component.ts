import {Component} from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule
import {MatListModule} from '@angular/material/list';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatTabsModule} from '@angular/material/tabs';
//import { MatDialog } from '@angular/material/dialog';
//import { DialogComponent } from '../dialog/dialog.component';
import { MatIcon } from '@angular/material/icon';
import { DecimalPipe } from '@angular/common';
import { Router } from '@angular/router';
import { CartService } from '../buy/cart.service'; // Adjust the path as needed




interface Shirt {
  name: string;
  image: string;
  price: number;
  description: string;
}


@Component({
  selector: 'app-women',
  standalone: true,
  imports: [MatListModule, MatSidenavModule,CommonModule,MatTabsModule,MatIcon],
  templateUrl: './women.component.html',
  styleUrl: './women.component.css',
})
export class WomenComponent {
  shirts = [
    { name: 'Square Sleeve Shirt Blouse', price: 'Rp 80.000', 
      image: 'assets/women/1.png',
      images:[
        'assets/women/1.png',
        'assets/women/1-2.png',
        'assets/women/1-4.png',
        'assets/women/1-5.png',
        'assets/women/1-6.png',
        'assets/women/1-7.png',
      ],
      sizes: [
        { label: 'S', price: 70000, stocks: 5, color: ['Black', 'White'] },
        { label: 'M', price: 80000, stocks: 6, color: ['Black', 'White'] },
        { label: 'L', price: 85000, stocks: 7, color: ['Black', 'White'] },
        { label: 'XL', price: 90000, stocks: 8, color: ['Black', 'White']},
      ], 
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
      sizes: [
        { label: 'S', price: 70000, stocks: 2, color: ['Black', 'Cream', 'Red', 'Purple'] },
        { label: 'M', price: 80000, stocks: 3, color: ['Black', 'White', 'Red', 'Purple'] },
        { label: 'L', price: 85000, stocks: 6, color: ['Black', 'White', 'Red', 'Purple'] },
        { label: 'XL', price: 90000, stocks: 5, color: ['Black', 'White', 'Red', 'Purple']},
      ],
    },
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
  selectedShirt: any | null = null; // This holds the selected shirt data
  selectedImage: string = '';
  selectedIndex: number = 0;
  selectedSize: string | null = null;
  selectedBuy: any | null = null; // This holds the selected buy data
  selectedSizes: { label: string; price: number; qty: number; color: string }[] = [];
  qty = 1; // Jumlah default
  totalPrice = 0; // Harga total (qty * harga per unit)
  selectedColor: string = ''; // Warna yang dipilih
  selectedColors: string[] = []; // Daftar warna yang dipilih
  totalSizePrice: number = 0;
  displayedPrice: number = 0;

  openDialog(shirt: any) {
    this.selectedShirt = shirt;
    this.selectedImage = shirt.images[0];
    this.selectedIndex = 0;
    this.selectedSize = null;
    this.displayedPrice = shirt.price;
    this.isDialogOpen = true;
  }


  buy() {
    if (!this.selectedShirt || !this.selectedBuy || !this.selectedColor) {
      alert('Please select a shirt, color and size before buying.');
      return;
    }

    // Add the selected shirt and size to the cart
    this.cartService.addToCart(this.selectedShirt, this.selectedBuy, this.selectedColor, this.totalSizePrice);

    // Navigate to the /buy page
    this.router.navigate(['/buy']);
  }

  closeDialog() {
    this.isDialogOpen = false; // Close the dialog
  }
  
  selectImage(index: number) {
    this.selectedIndex = index;
    this.selectedImage = this.selectedShirt.images[index];
  }

  constructor(private cartService: CartService, private router: Router) {}


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

  selectColor(color: string): void {
    this.selectedColor = color;
    this.updateDisplayedPrice();
  }

  selectSize(size: { label: string; price: number; stocks: number; color: string[] }): void {
    if (!this.selectedColor) {
      alert('Silakan pilih warna terlebih dahulu!');
      return;
    }
    // Pastikan ada stok untuk ukuran ini
    if (size.stocks > 0) {
      const existingSize = this.selectedSizes.find(s => s.label === size.label && s.color === this.selectedColor);
  
      if (existingSize) {
        // Jika ukuran dan warna sudah dipilih, tambahkan jumlahnya
        existingSize.qty++;
      } else {
        // Jika ini ukuran baru dengan warna baru, tambahkan dengan qty 1
        this.selectedSizes.push({ 
          label: size.label, 
          price: size.price, 
          qty: 1, 
          color: this.selectedColor 
        });
      }
  
      // Kurangi stok
      size.stocks--;
      this.totalSizePrice += size.price; // Menambahkan harga ukuran yang dipilih
      this.updateDisplayedPrice();
    } else {
      alert('Stok habis untuk ukuran ini!');
    }
  }
  
  
  removeSize(size: { label: string; price: number; qty: number; color: string }): void {
    const existingSize = this.selectedSizes.find(s => s.label === size.label && s.color === size.color);
    if (existingSize) {
      if (existingSize.qty > 1) {
        existingSize.qty--;
        this.totalSizePrice -= size.price;
      } else {
        const index = this.selectedSizes.indexOf(existingSize);
        if (index !== -1) {
          this.selectedSizes.splice(index, 1);
          this.totalSizePrice -= size.price;
        }
      }
  
      // Tambahkan stok kembali
      const shirtSize = this.selectedShirt.sizes.find((z: { label: string; }) => z.label === size.label);
      if (shirtSize) {
        shirtSize.stocks++;
      }
  
      this.updateDisplayedPrice();
    }
  }
  
  
  

// Update the total price based on size and color selections
updateDisplayedPrice(): void {
  this.displayedPrice = this.totalSizePrice + (this.selectedColors.length * 50); // Assume an additional price for each color
}

  // Hitung ulang harga total
  updateTotalPrice() {
        const pricePerUnit = this.displayedPrice; // Ambil angka dari harga
        this.totalPrice = this.qty * pricePerUnit; // Total = Qty * Harga Satuan
  }

  openWhatsApp(shirt: Shirt) {
    const message = encodeURIComponent(`Halo, saya ingin memesan produk ini: ${shirt.name} dengan harga ${shirt.price}.`);
    window.open(`https://wa.me/yourNumber?text=${message}`, '_blank');
  }
 
}
