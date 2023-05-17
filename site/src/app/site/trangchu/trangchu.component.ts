import { Component, OnInit } from '@angular/core';
import { TrangchuService } from './trangchu.service';
import { Location } from '@angular/common';
import { BaivietService } from '../service/baiviet.service';
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
  Sanphams:any[]=[]
  Baiviets:any[]=[]
  ngOnInit() {
    if(history.state.navigationId!=1){this.LoadPage()}
    this._TrangchuService.getProduct().subscribe((data)=>
    {
        if(data){this.Sanphams = data}
    })
    this._BaivietService.getBaiviets().subscribe((data)=>
    {
      if(data){this.Baiviets = data}
    })   
  }
  Soluong(data:any,begin:any,end:any)
  {
    return data.slice(begin, end)
  }
  LoadPage()
  {
    setTimeout(() => {
      location.reload();
    }, 0);
  }
}
