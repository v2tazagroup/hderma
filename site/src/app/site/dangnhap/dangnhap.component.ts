import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NotifierService } from 'angular-notifier';
import { AuthService } from 'src/app/admin/auth/auth.service';

@Component({
  selector: 'app-dangnhap',
  templateUrl: './dangnhap.component.html',
  styleUrls: ['./dangnhap.component.scss']
})
export class DangnhapComponent implements OnInit {
  User:any={}
  constructor(
    private _notifierService:NotifierService,
    private _authService:AuthService,
    private _router: Router,
    private _activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit() {
  }
  Dangnhap(user: any) {
    if (user.SDT == undefined || user.SDT == '') {
      this._notifierService.show({
        message: 'Vui lòng nhập số điện thoại',
        type: 'error',
      });
    } else if (user.password == undefined || user.password == '') {
      this._notifierService.show({
        message: 'Vui lòng nhập Mật Khẩu',
        type: 'error',
      });
    } else {
      this._authService.Dangnhap(user).subscribe(data => {
        console.log(data);
        if (!data[0]) {
          this._notifierService.show({
            message: data[1],
            type: 'error',
          });
        }
        else
        {
          const redirectURL = this._activatedRoute.snapshot.queryParamMap.get('redirectURL') || '/';
          this._router.navigateByUrl(redirectURL);
        }
      });
    }
  }
}
