import { Injectable } from '@angular/core';

interface CartItem {
    shirt: any; // Replace with your shirt type
    size: string;  // Size of the shirt
    color: string; // Color of the shirt
    //qty: number; // Quantity of the shirt
    price: number; // Price of the shirt
}

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private items: CartItem[] = [];

  addToCart(shirt: any, size: string, color: string, price: number) {
    this.items.push({ shirt, size, color, price });
  }

  getCartItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
  }
}