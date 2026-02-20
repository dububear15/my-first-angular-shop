import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.html',
  styleUrl: './products.css'
})
export class Products {
  cartCount: number = 0; 
  totalPrice: number = 0;
  selectedCategory: string = 'All';
  isDropdownOpen: boolean = false; // Controls the filter menu

  products = [
    { name: 'Velvet Rose Lipstick', price: 450, available: true, img: 'image/lipstick.jpg', category: 'Lips' },
    { name: 'Silk Glow Powder', price: 620, available: false, img: 'image/powder.jpg', category: 'Face' },
    { name: 'Blush Petal Trio', price: 890, available: true, img: 'image/trio.jpg', category: 'Face' },
    { name: 'Dreamy Eye Palette', price: 1200, available: true, img: 'image/palette.jpg', category: 'Eyes' },
    { name: 'Glow Setting Spray', price: 550, available: true, img: 'image/spray.jpg', category: 'Face' },
    { name: 'Hydrating Lip Oil', price: 380, available: true, img: 'image/lipoil.jpg', category: 'Lips' }
  ];

  selectCategory(category: string) {
    this.selectedCategory = category;
    this.isDropdownOpen = false;
  }

  addToCart(product: any) {
    if (product.available) {
      this.cartCount++; 
      this.totalPrice += product.price;
      alert('✨ ' + product.name + ' has been added to your bag!');
    } else {
      alert('Sorry, this item is currently out of stock.');
    }
  }
}