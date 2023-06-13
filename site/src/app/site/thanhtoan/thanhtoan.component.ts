import { Component, OnInit } from '@angular/core';
import { NotifierService } from 'angular-notifier';
import { UsersService } from 'src/app/admin/users.service';
import { GiohangService } from 'src/app/shared/giohang.service';
import { DiaChiInit } from './diachi';
import { MD5 } from 'crypto-js';
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
  Khachhang:any={Diachi:{id:0}};
  phoneRegex = /^(0?)(3[2-9]|5[6|8|9]|7[0|6-9]|8[0-6|8|9]|9[0-4|6-9])[0-9]{7}$/;
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
        this.Khachhang.idKH = data.id;
        this.Khachhang.Hoten = data.Hoten;
        this.Khachhang.email = data.email;
        this.Khachhang.SDT = data.SDT;
        this.Khachhang.Diachi = data.Diachi[0]||{id:0};
        console.log(data);
        console.log(this.Khachhang);  
      }})
    this.Tinh = this.filterTinh = this.DiaChiInit
    console.log(this.CUser);
    
  }
  
  // Dathang() {
  //   this.CUser
  //   const index =  this.CUser.Diachi.findIndex((v:any)=> v.id === this.DiachiGH.id)
  //   this.CUser.Diachi.forEach((v:any) => {
  //     v.active = false
  //   });
  //   console.log(this.CUser);
  //   this.CUser.Diachi[index].active = true
  //   console.log(this.CUser);
    
  // }

  DatHang(Khachhang:any) {
    if (Khachhang.Hoten==null ||Khachhang.Hoten =='') {
      this._NotifierService.notify('error', `Vui lòng nhập Họ và tên`);
    }
    else if (Khachhang.SDT==null ||Khachhang.SDT =='') {
      this._NotifierService.notify('error', `Vui lòng nhập SDT`);
    }
    else if(!this.phoneRegex.test(Khachhang.SDT))
    {
      this._NotifierService.notify('error', `Số Điện Thoại Không Hợp Lệ`);
    }
    else if (this.DiachiGH==null ||this.DiachiGH =='') {
      this._NotifierService.notify('error', `Vui lòng nhập địa chỉ`);  
    }
    // const index =  this.CUser.Diachi.findIndex((v:any)=> v.id === this.DiachiGH.id)
    // this.CUser.Diachi.forEach((v:any) => {
    //   v.active = false
    // });
    // console.log(this.CUser);
    // this.CUser.Diachi[index].active = true
    else
    {
      Khachhang.Diachi = this.DiachiGH      
    if (this.cartItems.length > 0) {
      const today = new Date().getTime().toString()
      const md5Hash = MD5(today).toString();
      const MaDonHang = md5Hash.slice(0, 8);
      Khachhang.MaDonHang = `DH${MaDonHang}`;
      this._checkoutService
        .postdonhang(Khachhang)
        .subscribe((res) => {
          if (res) {
            this.Thanksdata = res;
            let idDH: any;
            this._checkoutService.donhang$.subscribe((donhang) => {
              idDH = donhang.id;
              this.ListUser.forEach((v) => {
                let Link;
                let Message='';
                if(v.Role=="admin")
                {
                  Message = `(ADMIN) Đơn Mới : ${donhang.Hoten} - ${donhang.MaDonHang}`
                  Link = `/admin/donhang/${donhang.id}`
                }
                else if(v.Role=="parent"){
                  Message = `(REF) Đơn Mới : ${donhang.Hoten} - ${donhang.MaDonHang}`
                  Link = `/profile/referral/${donhang.idKH}/donhang/${donhang.id}`
                }
                else {
                  Message = `Đơn Mới : ${donhang.Hoten} - ${donhang.MaDonHang}`
                  Link = `/profile/donhang/${donhang.id}`
                }
                const newNoti = {idUser:v.id,Type:"donhang.create",Message:Message,Link:Link}            
                this._accountNotificationsService.createNotify(newNoti).subscribe((data)=>
                  {
                  const dulieu = {idUser:data.idUser,Title:Message,Link:data.Link}
                  this._accountNotificationsService.PushNotify(dulieu).subscribe()
                  });
              });
            });
            this.carts.forEach((x) => {
              this.DonhangChitiet.idDH = idDH;
              this.DonhangChitiet.idSP = x.id;
              this.DonhangChitiet.Soluong = x.cartNum;
              this.DonhangChitiet.Dongia = x.GiaSale;
              this.DonhangChitiet.idGioithieu = x.idGioithieu;
              this._checkoutService
                .postdonhangchitiet(this.DonhangChitiet)
                .subscribe((res) => {
                  this.Thanksdata.chitiet=res;
                  this.cartService.removeCart(x).subscribe();
                  if (this.carts.length == 0) {

                    // const dialogRef = this._dialog.open(templateRef);
                    // this.interval = setInterval(() => {
                    //   this.countDown--;
                    //   if (this.countDown === 0) {
                    //     clearInterval(this.interval);
                    //     dialogRef.close();
                    //     this._router.navigate(['profile/donhang']);
                    //   }
                    // }, 1000);

                    this._NotifierService.notify('success', `Đặt hàng thành công`);
                    if(this.token!=null)
                    {
                    this._router.navigate(['profile/donhang']);
                     }
                    else
                    {        
                      const extras: NavigationExtras = {
                        state: {
                          data: this.Thanksdata
                        }
                      };
                    this._router.navigate(['camon'],extras);
                    }
                  }
                });

            });
          }
        });
    } else {
      this._NotifierService.notify('error', `Bạn chưa có đơn hàng`);
    }
    }

    console.log(Khachhang);
    
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
        if(this.CUser)
        {
        this.CUser.Diachi.push(data)
        this._usersService.updateOneUser(this.CUser).subscribe((data)=>
        {
          this._NotifierService.notify("success","Thêm Thành Công")
        })
        }
        else {this.CUser.Diachi.push(data)}
      }
    else 
    {
      this._NotifierService.notify("error","Vui lòng thêm thông tin")
    }
  }
}
