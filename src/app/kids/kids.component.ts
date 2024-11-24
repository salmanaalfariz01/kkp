import { Component } from '@angular/core';

@Component({
  selector: 'app-kids',
  standalone: true,
  imports: [],
  templateUrl: './kids.component.html',
  styleUrl: './kids.component.css'
})
export class KidsComponent {

  // Inisialisasi data
selectedColors: string[] = []; // Daftar warna yang dipilih
qty: number = 0; // Jumlah barang
displayedPrice: string = "80000"; // Harga per unit
totalPrice: number = 0; // Harga total
colors: string[] = ["Hitam", "Putih", "Merah", "Biru", "Hijau"]; // Pilihan warna

// Fungsi untuk menambahkan warna
addColor(color: string): void {
  if (!this.selectedColors.includes(color)) {
    // Tambahkan warna baru jika belum ada di daftar
    this.selectedColors.push(color);
    this.qty = this.selectedColors.length; // Perbarui qty sesuai jumlah warna
    this.updateTotalPrice(); // Update harga total
  } else {
    alert(`${color} sudah dipilih!`);
  }
}

// Fungsi untuk menghapus warna
removeColor(color: string): void {
  const index = this.selectedColors.indexOf(color);
  if (index > -1) {
    this.selectedColors.splice(index, 1); // Hapus warna dari daftar
    this.qty = this.selectedColors.length; // Perbarui qty sesuai jumlah warna
    this.updateTotalPrice(); // Update harga total
  }
}

// Hitung ulang harga total
updateTotalPrice(): void {
  const pricePerUnit = parseInt(this.displayedPrice.replace(/[^\d]/g, '')); // Ambil angka dari harga
  this.totalPrice = this.qty * pricePerUnit; // Total = Qty * Harga Satuan
}


}
