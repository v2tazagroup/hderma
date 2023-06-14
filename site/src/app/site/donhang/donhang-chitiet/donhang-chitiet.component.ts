import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/app/environment';
import { DonhangService } from 'src/app/shared/donhang.service';
import { GetImage } from 'src/app/shared/shared.utils';

@Component({
  selector: 'app-donhang-chitiet',
  templateUrl: './donhang-chitiet.component.html',
  styleUrls: ['./donhang-chitiet.component.scss']
})
export class DonhangChitietComponent implements OnInit {

  constructor(
    private _DonhangService:DonhangService,
    private _ActivatedRoute:ActivatedRoute,
    ) {}
  Donhang:any
  Base = environment.BaseUrl;
  total: number=0;
  ngOnInit() {
    if(history.state.navigationId!=1){location.reload()}
    this._ActivatedRoute.params.subscribe((paramsId) => {
      this._DonhangService.getOneDonhang(paramsId['id']).subscribe((data:any)=>{
        this.Donhang = data
        this.total = data.Donhangchitiets.reduce((total:any, item:any) => total + (item.Dongia * item.Soluong), 0);
      console.log(data);    
      });
    })
  }
  GetImage(img:any)
  {
   return GetImage(img);
  }
}
