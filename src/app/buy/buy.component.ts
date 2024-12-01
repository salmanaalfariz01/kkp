import { Component } from '@angular/core';
import { CartService } from './cart.service'; // Adjust the path as needed

@Component({
  selector: 'app-buy',
  standalone: true,
  imports: [],
  templateUrl: './buy.component.html',
  styleUrl: './buy.component.css'
})
export class BuyComponent {
  cartItems: any[]; // Replace with your cart item type

  constructor(private cartService: CartService) {
    this.cartItems = this.cartService.getCartItems();
  }
}
