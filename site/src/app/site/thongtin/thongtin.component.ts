import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/admin/users.service';
import { DiaChiInit } from '../thanhtoan/diachi';
import { NotifierService } from 'angular-notifier';
@Component({
  selector: 'app-thongtin',
  templateUrl: './thongtin.component.html',
  styleUrls: ['./thongtin.component.scss']
})
export class ThongtinComponent implements OnInit {
  CUser:any;
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
  Data: any = { user: '', oldpass: '', newpass: '' };
  constructor(
    private _usersService:UsersService,
    private _notifierService:NotifierService,
    ) { }

  ngOnInit() {
    this._usersService.getProfile().subscribe((data)=>{
      if(data)
      {
        this.CUser = data;
        console.log(data);
      }
    })
    this.Tinh = this.filterTinh = this.DiaChiInit
  }
  
  displayFn(data: any): string {
    return data && data.name ? data.name : '';
  }
  onTinhChange(state: any) {
    this.Quan =this.filterQuan = this.Tinh.find((v)=>v.name== state.target.value).districts
    console.log(this.Quan);
  }
  onQuanChange(state: any) {
    this.filterPhuong = this.Quan.find((v)=>v.name== state.target.value).wards
    console.log(this.filterPhuong);
  }
  ThemDiachi()
  {
    if(this.ChosenTinh!=undefined&&this.Diachi!=undefined)
    {
    const data = {id:this.CUser.Diachi.length+1,Tinh:this.ChosenTinh,Quan:this.ChosenQuan,Phuong:this.ChosenPhuong,Diachi:this.Diachi}
    this.CUser.Diachi.push(data)
    this._usersService.updateOneUser(this.CUser).subscribe((data)=>
    {
      this._notifierService.notify("success","Thêm Thành Công")
    })
    }
    else 
    {
      this._notifierService.notify("error","Vui lòng thêm thông tin")
    }
  }
  ChangePass(data: any): void {
    if (data.newpass != data.newpass2) {
      console.log(data);
      this._notifierService.show({
        message: 'Xác nhận mật khẩu mới không trùng khớp',
        type: 'error',
      });
    } else {
      const dulieu = {
        user: this.CUser,
        oldpass: data.oldpass,
        newpass: data.newpass,
      };
      this._usersService.changepass(dulieu).subscribe((data) => {
        if (data[0]) {
          this.Data = { user: '', oldpass: '', newpass: '' };
          this._notifierService.show({
            message: data[1],
            type: 'success',
          });
        } else {
          this._notifierService.show({
            message: data[1],
            type: 'error',
          });
        }
      });
    }
  }
  UpdateProfile(data:any) {
    if (data.SDT==''||data.SDT==undefined) {
      this._notifierService.notify('error', `Vui lòng nhập SDT`);
    }
    else if (data.email==''||data.email==undefined) {
      this._notifierService.notify('error', `Vui lòng nhập Email`);
    }
    else if (data.Hoten==''||data.Hoten==undefined) {
      this._notifierService.notify('error', `Vui lòng nhập ho và tên`);
    }
    else this._usersService.updateOneUser(data).subscribe((data) => {
      this._notifierService.notify('success', `Cập Nhật Thành Công`);
        }
      );
  }
}
