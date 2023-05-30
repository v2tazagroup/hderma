import { Component, OnInit } from '@angular/core';
import { TrangchuService } from './trangchu.service';
import { Location } from '@angular/common';
import { BaivietService } from 'src/app/shared/service/baiviet.service';
import { environment } from 'src/app/environment';
@Component({
  selector: 'app-trangchu',
  templateUrl: './trangchu.component.html',
  styleUrls: ['./trangchu.component.css']
})
export class TrangchuComponent implements OnInit {
  constructor(
    private _TrangchuService:TrangchuService,
    private _BaivietService:BaivietService,
    private location: Location
    ) { }
  Base = environment.BaseUrl;
  Sanphams:any[]=[]
  Baiviets:any[]=[]
  ngOnInit() {
    if(history.state.navigationId!=1){location.reload()}
    this._TrangchuService.getProduct().subscribe((data)=>
    {
        if(data){
          this.Sanphams = data.filter((v:any)=>v.Trangthai==0)
        }

    })
    this._BaivietService.getBaiviets().subscribe((data)=>
    {
      if(data){this.Baiviets = data.filter((v:any)=>v.Trangthai==0)}
    })   
  }
  Soluong(data:any,begin:any,end:any)
  {
    return data.slice(begin, end)
  }
}
