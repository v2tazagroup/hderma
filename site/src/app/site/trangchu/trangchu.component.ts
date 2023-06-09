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
    private _TrangchuService: TrangchuService,
    private _BaivietService: BaivietService,
    private _TagsService: TagsService,
    private location: Location
  ) { }
  Base = environment.BaseUrl;
  Sanphams: any[] = []
  Baiviets: any[] = []
  SanphamsTags: any[] = []
  ngOnInit() {
    if (history.state.navigationId != 1) { location.reload() }
    // this._TagsService.getTagsProducts().subscribe((data)=>
    // {
    //   console.log(data);
    //   this.SanphamsTags = data
    // })
    this._TrangchuService.getProduct().subscribe((data) => {
      if (data) {
        this.Sanphams = data.filter((v: any) => v.Trangthai == 0)
        console.log(data);
      }

    })
    this._BaivietService.getBaiviets().subscribe((data) => {
      if (data) { this.Baiviets = data.filter((v: any) => v.Trangthai == 0) }
    })
  }
  GetTags(data: any, value: any) {
    let result: any[] = [];
    const a = value.forEach((v: any) => {
      const b = data.find((v1: any) => v1.SKU == v)
      if (b) { result.push(b) }
    }
    );
    return result
  }
  Soluong(data: any, begin: any, end: any) {
    return data.slice(begin, end)
  }
  slideConfig = {
    "slidesToShow": 4,
    "slidesToScroll": 2,
    "dots": true,
    "autoplay": true,
    arrows: true,
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
  slide1Config =
    {
      "slidesToShow": 3,
      "centerMode": false,
      "infinite": true,
      "autoplay": true,
      "dots": false,
      "arrows": true,
      "fade": false,
      "cssEase": "ease-in-out",
      "speed": 600,
      "responsive": [{
        "breakpoint": 1024, 
        "settings": { "slidesToShow": 3 }}, 
        { "breakpoint": 992, "settings": { "slidesToShow": 2 } }, 
        { "breakpoint": 768, "settings": { "slidesToShow": 1 } }]
    }
    ;
  addSlide() {
  }
  removeSlide() {
  }

  slickInit(e: any) {
  }

  breakpoint(e: any) {
  }
  afterChange(e: any) {
  }

  beforeChange(e: any) {
  }
}
