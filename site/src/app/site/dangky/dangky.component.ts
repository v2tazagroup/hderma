import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NotifierService } from 'angular-notifier';
import { UsersService } from 'src/app/admin/users.service';

@Component({
  selector: 'app-dangky',
  templateUrl: './dangky.component.html',
  styleUrls: ['./dangky.component.scss']
})
export class DangkyComponent implements OnInit {
  User: any = {ref_id:0};
  ListForm: any;
  emailPattern = '^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$';
  phoneRegex = /^(0?)(3[2-9]|5[6|8|9]|7[0|6-9]|8[0-6|8|9]|9[0-4|6-9])[0-9]{7}$/;
  constructor(
    private _notifierService: NotifierService,
    private _usersService: UsersService,
    private _router: Router,
    ) {}
  ngOnInit() {}
  Dangky(user: any) {
    if (!user.Hoten) {
      this._notifierService.show({
        message: 'Vui Lòng Nhập Họ Tên',
        type: 'error',
      });
    } else if (!user.SDT) {
      this._notifierService.show({
        message: 'Vui Lòng Nhập Số Điện Thoại',
        type: 'error',
      });
    }
    else if(!this.phoneRegex.test(user.SDT))
    {
      this._notifierService.notify('error', `Số Điện Thoại Không Hợp Lệ`);
    }
    else if (user.password==null ||user.password =='') {
      this._notifierService.show({
        message: 'Vui Lòng Nhập Mật Khẩu',
        type: 'error',
      });
    }
    else {
      user.Role = 'customer'
      this._usersService.Dangky(user).subscribe((data: any) => {
        console.log(data);
            if(data[0])
            {
              this._notifierService.show({
                message: data[1],
                type: 'success',
              });
              this._router.navigate(['dang-nhap']);
            }
            else {
          this._notifierService.show({
          message: data[1],
          type: 'error',
        });
            }
      });
    }
  }

}
