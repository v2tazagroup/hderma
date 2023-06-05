import { Component, OnInit } from '@angular/core';
import { GiohangService } from 'src/app/shared/giohang.service';
@Component({
  selector: 'app-giohang_mini',
  templateUrl: './giohang_mini.component.html',
  styleUrls: ['./giohang_mini.component.scss']
})
export class Giohang_miniComponent implements OnInit {

  cartItems: any[]=[];
  total: number=0;
  constructor(private cartService: GiohangService) {
    this.cartService.getCartItems();
    this.cartService.cartItems$.subscribe((data)=>
    {
      this.cartItems = data
    }
    )
    this.cartService.calculateTotal(); 
    this.cartService.total$.subscribe((data)=>this.total = data)
  }
  ngOnInit(): void {
      
  }
  removeFromCart(itemId: number): void {
    this.cartService.removeFromCart(itemId);
    // this.cartItems = this.cartService.getCartItems();
    // this.total = this.cartService.calculateTotal();
  }

}
