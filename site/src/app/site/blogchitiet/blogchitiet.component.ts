import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/app/environment';
import { SeotoolService } from 'src/app/shared/seotool.service';
import { BaivietService } from 'src/app/shared/service/baiviet.service';
import { GetImage } from 'src/app/shared/shared.utils';

@Component({
  selector: 'app-blogchitiet',
  templateUrl: './blogchitiet.component.html',
  styleUrls: ['./blogchitiet.component.scss']
})
export class BlogchitietComponent implements OnInit {

  constructor(
    private _BaivietService:BaivietService,
    private _ActivatedRoute:ActivatedRoute,
    private _SeotoolService:SeotoolService,
    ) {}
  Baiviet:any
  Bailienquan:any
  Base = environment.BaseUrl;
  ngOnInit() {
    if(history.state.navigationId!=1){location.reload()}
    this._ActivatedRoute.params.subscribe((paramsId) => {
      this._BaivietService.getBaivietDetail(paramsId['slug']).subscribe((data)=>{
        this.Baiviet = data
        this._SeotoolService.setMetaData(
          data.TitleSeo,
          data.DesSeo,
          data.KeywordSeo,
          data.RobotsSeo,
          data.Slug,
          GetImage(data.Hinhanh.hinhchinh.spath),     
          )
      console.log(data);
      
      });
    })
    this._BaivietService.getBaiviets().subscribe((data)=>{
      this.Bailienquan = data.filter((v:any)=>v.pid!='b5552de3-155c-4708-8e37-f0350cbc3a80');
      this.Bailienquan = this.Bailienquan.slice(0,3)
      console.log(data);
      });
  }
  Checkundefined(data:any)
  {   
    return data?false:true;
  }

}
