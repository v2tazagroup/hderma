import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/app/environment';
import { SanphamService } from 'src/app/shared/sanpham.service';
import { TagsService } from 'src/app/shared/tags.service';

@Component({
  selector: 'app-sanphamchitiet',
  templateUrl: './sanphamchitiet.component.html',
  styleUrls: ['./sanphamchitiet.component.css']
})
export class SanphamchitietComponent implements OnInit {
  constructor(
    private _SanphamService:SanphamService,
    private _ActivatedRoute:ActivatedRoute,
    private _tagService:TagsService,
    ) {}
    Base = environment.BaseUrl;
  Sanpham:any={
    Hinhanh:{
      ContentImage:{spath:''},
      Image:{spath:''},  
    }}
  Giamgia:any
  SPTuongtu:any
  tagsFilter:any 
  Reviews:any[]=[
    {
      
    }
  ]
  ngOnInit() {
    if(history.state.navigationId!=1){location.reload()}
    this._ActivatedRoute.params.subscribe((paramsId) => {
      this._SanphamService.getProductDetail(paramsId['slug']).subscribe((data:any)=>{this.Sanpham = data
        console.log(data);
        this._SanphamService.getProduct().subscribe((data1)=>{
          this.SPTuongtu = data1.filter((v:any)=>{return v.Danhmuc.id == data.Danhmuc.id})
          console.log(this.SPTuongtu);
          
        })
      this.Giamgia = ((data.Gia - data.GiaSale)/data.Gia).toFixed(2)
      });
    })
    }
    // this._SanphamService.getBaiviets().subscribe((data)=>{this.Bailienquan = data.slice(0,3)
    //   console.log(data);
    //   });
  GetImage(img:any)
    {
      return environment.BaseUrl+img;
    }
  
}
