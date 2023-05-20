import { Component, OnInit } from '@angular/core';
import { BaivietService } from 'src/app/shared/service/baiviet.service';

@Component({
  selector: 'app-bloglist',
  templateUrl: './bloglist.component.html',
  styleUrls: ['./bloglist.component.scss']
})
export class BloglistComponent implements OnInit {

  constructor(private _BaivietService:BaivietService) { }
  Baiviets:any
  Danhmucs:any
  ngOnInit() {
    this._BaivietService.getBaiviets().subscribe((data)=>{
      this.Baiviets = data.sort((a:any, b:any) => b.Ngaytao - a.Ngaytao);
      ;
      console.log(data);
    })
    this._BaivietService.getDanhmucs().subscribe((data)=>{this.Danhmucs = data})
    if(history.state.navigationId!=1){location.reload()}
  }
  Soluong(data:any,begin:any,end:any)
  {
    return data.slice(begin, end)
  }
}
