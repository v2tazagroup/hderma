import { Component, OnInit } from '@angular/core';
import { TrangchuService } from './trangchu.service';
import { Location } from '@angular/common';
import { BaivietService } from 'src/app/shared/service/baiviet.service';
import { environment } from 'src/app/environment';
import { TagsService } from 'src/app/shared/tags.service';
@Component({
  selector: 'app-trangchu',
  templateUrl: './trangchu.component.html',
  styleUrls: ['./trangchu.component.css']
})
export class TrangchuComponent implements OnInit {
  constructor(
    private _TrangchuService:TrangchuService,
    private _BaivietService:BaivietService,
    private _TagsService:TagsService,
    private location: Location
    ) { }
  Base = environment.BaseUrl;
  Sanphams:any[]=[]
  Baiviets:any[]=[]
  SanphamsTags:any[]=[]
  ngOnInit() {
    if(history.state.navigationId!=1){location.reload()}
    // this._TagsService.getTagsProducts().subscribe((data)=>
    // {
    //   console.log(data);
    //   this.SanphamsTags = data
    // })
    this._TrangchuService.getProduct().subscribe((data)=>
    {
        if(data){
          this.Sanphams = data.filter((v:any)=>v.Trangthai==0)
          console.log(data);
        }

    })
    this._BaivietService.getBaiviets().subscribe((data)=>
    {
      if(data){this.Baiviets = data.filter((v:any)=>v.Trangthai==0)}
    })   
  }
  GetTags(data:any,value:any)
  {
  let result:any[] = [];
   const a = value.forEach((v:any) => 
   {
      const b = data.find((v1:any)=>v1.SKU==v)
      if(b){result.push(b)}
    }
   );
    return result
  }
  Soluong(data:any,begin:any,end:any)
  {
    return data.slice(begin, end)
  }
  
  slides = [
    {img: "http://placehold.it/350x150/000000"},
    {img: "http://placehold.it/350x150/111111"},
    {img: "http://placehold.it/350x150/333333"},
    {img: "http://placehold.it/350x150/666666"},
    {img: "http://placehold.it/350x150/333333"},
    {img: "http://placehold.it/350x150/666666"},
  ];
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
    this.slides.push({img: "http://placehold.it/350x150/777777"})
  }
  
  removeSlide() {
    this.slides.length = this.slides.length - 1;
  }
  
  slickInit(e:any) {
    console.log('slick initialized');
  }
  
  breakpoint(e:any) {
    console.log('breakpoint');
  }
  
  afterChange(e:any) {
    console.log('afterChange');
  }
  
  beforeChange(e:any) {
    console.log('beforeChange');
  }
}
