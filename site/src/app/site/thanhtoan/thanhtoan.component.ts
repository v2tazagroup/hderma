import { Component, OnInit } from '@angular/core';
import { NotifierService } from 'angular-notifier';
import { UsersService } from 'src/app/admin/users.service';
import { GiohangService } from 'src/app/shared/giohang.service';
import { DiaChiInit } from './diachi';
@Component({
  selector: 'app-thanhtoan',
  templateUrl: './thanhtoan.component.html',
  styleUrls: ['./thanhtoan.component.scss']
})
export class ThanhtoanComponent implements OnInit {
  cartItems: any[]=[];
  total: number=0;
  CUser:any={Diachi:[]};
  DiaChiInit=DiaChiInit;
  ChosenTinh:any={}
  ChosenQuan:any={}
  ChosenPhuong:any={}
  ChosenDiachi:any
  filterTinh:any[]=[]
  Tinh:any[]=[]
  filterQuan:any[]=[]
  Quan:any[]=[]
  filterPhuong:any[]=[]
  Phuong:any[]=[]
  Diachi:any
  DiachiGH:any
  Data: any = { user: '', oldpass: '', newpass: '' };
  constructor(
    private cartService: GiohangService,
    private _NotifierService: NotifierService,
    private _usersService:UsersService,
    ) {
    this.cartService.getCartItems();
    this.cartService.cartItems$.subscribe((data)=>
    {
      this.cartItems = data
    }
    )
    this.cartService.calculateTotal(); 
    this.cartService.total$.subscribe((data)=>this.total = data)
  }
  ngOnInit() {
    this._usersService.getProfile().subscribe((data)=>{
      if(data){
        this.CUser = data;
        console.log(data);
      }})
    this.Tinh = this.filterTinh = this.DiaChiInit
  }
  
  Dathang() {
    this.CUser.Diachi.find()
    this.DiachiGH.active = true
    console.log(this.DiachiGH);
    
  }
  displayFn(data: any): string {
    return data && data.name ? data.name : '';
  }
  onTinhChange(state: any):void {
    console.log(state.target.value);
    this.Quan =this.filterQuan = this.Tinh.find((v)=>v.name== state.target.value).districts
    console.log(this.filterQuan);
  }
  onQuanChange(state: any) {
    this.filterPhuong = this.Quan.find((v)=>v.name== state.target.value).wards
    console.log(this.filterPhuong);
  }
  ThemDiachi()
  {
    if(this.ChosenTinh!=undefined&&this.ChosenDiachi!=undefined)
    {
    const data = {id:this.CUser.Diachi.length+1,Tinh:this.ChosenTinh,Quan:this.ChosenQuan,Phuong:this.ChosenPhuong,Diachi:this.ChosenDiachi,active:false}
    this.CUser.Diachi.push(data)
    this._usersService.updateOneUser(this.CUser).subscribe((data)=>
    {
      this._NotifierService.notify("success","Thêm Thành Công")
    })
    }
    else 
    {
      this._NotifierService.notify("error","Vui lòng thêm thông tin")
    }
  }
}
