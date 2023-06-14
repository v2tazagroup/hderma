import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NotifierService } from 'angular-notifier';
import { Lightbox } from 'ngx-lightbox';
import { environment } from 'src/app/environment';
import { SanphamService } from 'src/app/shared/sanpham.service';
import { GetImage } from 'src/app/shared/shared.utils';
import { TagsService } from 'src/app/shared/tags.service';
@Component({
  selector: 'app-sanphamchitiet',
  templateUrl: './sanphamchitiet.component.html',
  styleUrls: ['./sanphamchitiet.component.css']
})
export class SanphamchitietComponent implements OnInit { 
  Base = environment.BaseUrl;
  Sanpham:any={
    Hinhanh:{
      ContentImage:{spath:''},
      Image:{spath:''},  
      hinh1:{spath:''},  
      hinh2:{spath:''},  
      hinh3:{spath:''},  
      hinh4:{spath:''},  
    }}
  Giamgia:any
  SPTuongtu:any
  tagsFilter:any 
  Reviews:any[]=[
    {
      
    }
  ] 
  constructor(
    private _SanphamService:SanphamService,
    private _ActivatedRoute:ActivatedRoute,
    private _tagService:TagsService,
    private _notifierService:NotifierService,
    private _router: Router,
    private _lightbox: Lightbox
    ) {}
  ngOnInit() {
    if(history.state.navigationId!=1){location.reload()}
    this._ActivatedRoute.params.subscribe((paramsId) => {
      this._SanphamService.getProductDetail(paramsId['slug']).subscribe((data:any)=>{this.Sanpham = data
        console.log(data);
        this._SanphamService.getProduct().subscribe((data1)=>{
          this.SPTuongtu = data1.filter((v:any)=>{return v.Danhmuc.id == data.Danhmuc.id}).slice(0,4)
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
     return GetImage(img);
    }
  open(data:any,field:any): void {
    const img = [{src: data.Hinhanh[field].spath,caption: data.Hinhanh[field].name,thumb: data.Hinhanh[field].spath}];
      this._lightbox.open(img);
    }
  close(): void {
      this._lightbox.close();
    }  
    slideConfig = {
      "slidesToShow": 4, 
      "slidesToScroll": 2,
      "dots": true,
      "autoplay": true,
      "autoplaySpeed": 2000,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1
          }
        }
      ]
    };
    addSlide() {
    }
    removeSlide() {
    }
    
    slickInit(e:any) {
    }
    
    breakpoint(e:any) {
    }
    afterChange(e:any) {
    }
    
    beforeChange(e:any) {
    }
}
