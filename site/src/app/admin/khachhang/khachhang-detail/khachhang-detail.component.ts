import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NotifierService } from 'angular-notifier';
import { UsersService } from '../../users.service';

@Component({
  selector: 'app-khachhang-detail',
  templateUrl: './khachhang-detail.component.html',
  styleUrls: ['./khachhang-detail.component.css']
})
export class KhachhangDetailComponent implements OnInit {
  user: any
  constructor(
    private route: ActivatedRoute,
    private _userservice: UsersService,
    private _NotifierService: NotifierService
  ) {}
  ngOnInit(): void {
    this.route.params.subscribe((paramsId) => {
      const id = paramsId['id'];
      if (id) {
        this._userservice.getUserByid(id).subscribe();
        this._userservice.user$.subscribe((res) => {
          if (res) {
            console.log(res);
            this.user = res;
          }
        });
      }
    });
  }
}





