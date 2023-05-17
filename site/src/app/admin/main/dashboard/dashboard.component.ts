import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'tazagroup-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  MenuDashboard:any[]=[
    {id:1,Tieude:'Bài Viết',Link:'baiviet',Image:'',Icon:'article'},
    {id:2,Tieude:'Sản Phẩm',Link:'sanpham',Image:'',Icon:''},
    {id:3,Tieude:'Đơn Hàng',Link:'donhang',Image:'',Icon:''},
    {id:4,Tieude:'Comment',Link:'comment',Image:'',Icon:''},
  ]
  constructor(private _router: Router,) {}
  ngOnInit(): void {}
}
