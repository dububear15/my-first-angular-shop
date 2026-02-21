import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common'; // This gives you pipes like | currency
import { Products } from './products/products'; // Ensure this matches your folder exactly

@Component({
  selector: 'app-root',
  standalone: true, // Make sure this is here for 'imports' to work
  imports: [RouterOutlet, Products, CommonModule], // Error should vanish now
  templateUrl: './app.html',
  styleUrl: './app.css'
})

// src/app/app.ts
export class App {
  title = 'my-first-angular-shop';
  cartItems: any[] = []; // Holds your items

  // This receives the product from the button
  onItemAdded(product: any) {
    this.cartItems.push(product); 
  }

  getTotal(): number {
    return this.cartItems.reduce((acc, item) => acc + item.price, 0);
  }
}