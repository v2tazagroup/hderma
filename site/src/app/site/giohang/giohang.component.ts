import { Component, OnInit } from '@angular/core';
import { NotifierService } from 'angular-notifier';
import { GiohangService } from 'src/app/shared/giohang.service';

@Component({
  selector: 'app-giohang',
  templateUrl: './giohang.component.html',
  styleUrls: ['./giohang.component.scss']
})
export class GiohangComponent implements OnInit {

  cartItems: any[] = [];
  total: number = 0;
  constructor(
    private cartService: GiohangService,
    private _NotifierService: NotifierService,
    ) {
    this.cartService.getCartItems();
    this.cartService.cartItems$.subscribe((data) => {
      this.cartItems = data
      console.log(data);
    }
    )
    this.cartService.calculateTotal();
    this.cartService.total$.subscribe((data) => this.total = data)
  }
  
  ngOnInit(): void {}
  UpadateQuantity(item:any,soluong:any): void {
    if(soluong<1)
    {
      this._NotifierService.notify('error','Số lượng không được nhỏ hơn 0')
    }
    else {this.cartService.updateQuantity(item.id,soluong)}
  }
  incrementQuantity(item:any): void {
    this.cartService.ChangeSoluong(item.id,1)
  }

  decrementQuantity(item:any): void {
    if (item.soluong > 1) {
      this.cartService.ChangeSoluong(item.id,-1)
    }
  }
  onKeyDown(event: KeyboardEvent): void {   
    const keyCode = event.keyCode;
    if (keyCode === 109) {
      this._NotifierService.notify('error','Không Nhập Số Âm')
    }
  }
  removeFromCart(itemId: number): void {
    this.cartService.removeFromCart(itemId);
    // this.cartItems = this.cartService.getCartItems();
    // this.total = this.cartService.calculateTotal();
  }

}
