import { Component, OnInit } from '@angular/core';
import { NotifierService } from 'angular-notifier';
import { GiohangService } from 'src/app/shared/giohang.service';
import { DiaChiInit } from './diachi';
import { MD5 } from 'crypto-js';
import { DonhangService } from 'src/app/shared/donhang.service';
import { NavigationExtras, Router } from '@angular/router';
import { CauhinhchungService } from 'src/app/shared/cauhinhchung.service';
import { EmailService } from 'src/app/shared/email.service';
import { UsersService } from 'src/app/admin/users.service';
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
  Thanksdata:any
  Khachhang:any={Diachi:{id:0}};
  DonhangChitiet:any={};
  CFemail:any={};
  phoneRegex = /^(0?)(3[2-9]|5[6|8|9]|7[0|6-9]|8[0-6|8|9]|9[0-4|6-9])[0-9]{7}$/;
  constructor(
    private cartService: GiohangService,
    private _NotifierService: NotifierService,
    private _usersService:UsersService,
    private _DonhangService:DonhangService,
    private _CauhinhchungService:CauhinhchungService,
    private _router: Router,
    private _EmailService: EmailService,
    ) {
    this.cartService.getCartItems();
    this.cartService.cartItems$.subscribe((data)=>
    {
      this.cartItems = data
      // if(data.length==0)
      // {
      // this._router.navigate(['/san-pham']);
      // }
    }
    )
    this.cartService.calculateTotal(); 
    this.cartService.total$.subscribe((data)=>this.total = data)
  }
  ngOnInit() {
    this._CauhinhchungService.getAll().subscribe(data=>
      {
        this.CFemail = data.find(v=>v.Slug=='cau-hinh-email')
        this.CFemail = JSON.parse(this.CFemail.Content)      
      })
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
      this._DonhangService.postDonhang(Khachhang)
        .subscribe((res:any) => {
          if (res) {
            console.log(res);      
            this.Thanksdata = res;
            //Code Push Noti
            // this._checkoutService.donhang$.subscribe((donhang) => {
            //   idDH = res.id;
            //   this.ListUser.forEach((v) => {
            //     let Link;
            //     let Message='';
            //     if(v.Role=="admin")
            //     {
            //       Message = `(ADMIN) Đơn Mới : ${donhang.Hoten} - ${donhang.MaDonHang}`
            //       Link = `/admin/donhang/${donhang.id}`
            //     }
            //     else if(v.Role=="parent"){
            //       Message = `(REF) Đơn Mới : ${donhang.Hoten} - ${donhang.MaDonHang}`
            //       Link = `/profile/referral/${donhang.idKH}/donhang/${donhang.id}`
            //     }
            //     else {
            //       Message = `Đơn Mới : ${donhang.Hoten} - ${donhang.MaDonHang}`
            //       Link = `/profile/donhang/${donhang.id}`
            //     }
            //     const newNoti = {idUser:v.id,Type:"donhang.create",Message:Message,Link:Link}            
            //     this._accountNotificationsService.createNotify(newNoti).subscribe((data)=>
            //       {
            //       const dulieu = {idUser:data.idUser,Title:Message,Link:data.Link}
            //       this._accountNotificationsService.PushNotify(dulieu).subscribe()
            //       });
            //   });
            // });
            // {
            //   "soluong": 7,
            //   "id": "7df7038f-2613-4201-9cd6-fdc1b6e17e82",
            //   "Gia": 450000,
            //   "GiaSale": 450000,
            //   "Hinhanh": "assets/1_1686044175922.jpg",
            //   "Tieude": "Kem chống nắng dưỡng sáng da D.400 H.Derma Broad Spectrum Sunscreen Skin",
            //   "Slug": "kem-chong-nang-duong-sang-da-D.400-H.Derma-Broad-Spectrum-Sunscreen-Skin"
            // }
            this.cartItems.forEach((x) => {
              this.DonhangChitiet.idDH = res.id;
              this.DonhangChitiet.idSP = x.id;
              this.DonhangChitiet.Soluong = x.soluong;
              this.DonhangChitiet.Dongia = x.GiaSale;
              this.DonhangChitiet.idGioithieu = x.idGioithieu;
              this._DonhangService.postdonhangchitiet(this.DonhangChitiet).subscribe((res1) => {
                  this.cartService.removeFromCart(x.id);
                  if (this.cartItems.length == 0) {
                    this._NotifierService.notify('success', `Đặt hàng thành công`);
                    this._DonhangService.getOneDonhang(this.Thanksdata.id).subscribe((data2:any)=>  
                    {
                       delete data2.Donhangchitiets
                        const dulieu = {cfemail:this.CFemail,data:data2}
                          this._EmailService.SenderEmail(dulieu).subscribe((data)=>{                            
                            this._NotifierService.notify("success","Đã Gửi Email Xác Nhận")
                          })  
                    if(this.CUser.id!=null)
                      {
                      this._router.navigate(['/don-hang/'+this.Thanksdata.id]);
                      }
                    else
                    {        
                      const extras: NavigationExtras = {
                        state: {
                          data: this.Thanksdata
                        }
                      };
                    this._router.navigate(['/cam-on'],extras);
                    }
                
                  })
                }
              })
            });
          }
        });
    } else {
      this._NotifierService.notify('error', `Bạn chưa có đơn hàng`);
    }
    }    
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
