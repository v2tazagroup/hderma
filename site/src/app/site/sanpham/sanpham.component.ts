import { Component, OnInit } from '@angular/core';
import { TrangchuService } from '../trangchu/trangchu.service';
import { TagsService } from 'src/app/shared/tags.service';
import { PageChangedEvent } from 'ngx-bootstrap/pagination';
import { GetImage } from 'src/app/shared/shared.utils';
import { environment } from 'src/app/environment';
import { GiohangService } from 'src/app/shared/giohang.service';
import { NotifierService } from 'angular-notifier';
@Component({
  selector: 'app-sanpham',
  templateUrl: './sanpham.component.html',
  styleUrls: ['./sanpham.component.scss']
})
export class SanphamComponent implements OnInit {
  constructor(
    private _TrangchuService: TrangchuService,
    private _tagService: TagsService,
    private cartService: GiohangService,
    private _NotifierService: NotifierService
  ) { }
  Sanphams: any[] = []
  tags: any[] = []
  TagsTinhtrang: any[] = []
  TagsLoai: any[] = []
  PagiSanphams: any[] = [];
  tagsFilter: any[] = [];
  filterSP: any[] = [];
  itemsPerPage = 12;
  currentPage = 1;
  totalItems = 1;
  Base = environment.BaseUrl;
  TypeView:boolean=false
  itemCart:any={soluong:0};
  ngOnInit() {
    if(history.state.navigationId!=1){location.reload()}
    this._TrangchuService.getProduct().subscribe((data) => {
      if (data) {
        this.Sanphams = data.filter((v:any)=>v.Trangthai==0)
        this.Sanphams.forEach(v => {
          v.Giamgia = ((v.Gia - v.GiaSale)/v.Gia).toFixed(2)
        });
        this.PagiSanphams = this.Sanphams.slice(0, this.itemsPerPage)
        this.totalItems = data.length
      }
    })
    this._tagService.getTags().subscribe((data) => {
      if (data) {
        data.forEach((v: any) => { v.checked = false });
        this.TagsTinhtrang = data.filter((v: any) => v.Loaitag == 0)
        this.TagsLoai = data.filter((v: any) => v.Loaitag == 1)
      }
    })
  }
  GetImage(img: any) {
    return environment.BaseUrl + img;
  }
  checkboxTags(item: any, i: any) {
    this.TagsTinhtrang[i].checked = !this.TagsTinhtrang[i].checked
    const macdinh = this.TagsTinhtrang.find(v=>v.checked==true)
    if(macdinh==undefined)
    {
      this.PagiSanphams=this.Sanphams.slice(0, this.itemsPerPage)
      this.totalItems = this.PagiSanphams.length
    }
    else if(this.TagsTinhtrang[i].checked)
    {
      const tempFilter = this.Sanphams.filter((v:any)=>
      {
        return v.Tags.some((v1:any)=>v1.id==item.id)
      })
    this.PagiSanphams = this.filterSP = [...new Set([...this.filterSP, ...tempFilter])];  
    this.totalItems = this.filterSP.length
    }
    else{
    this.PagiSanphams =  this.filterSP = this.filterSP.filter((v:any)=>{return !v.Tags.some((v1:any)=>v1.id==item.id)})
    this.totalItems = this.filterSP.length
    }
  }
  checkTagsLoai(item: any, i: any) {
    this.TagsLoai[i].checked = !this.TagsLoai[i].checked
    const macdinh = this.TagsLoai.find(v=>v.checked==true)
    if(macdinh==undefined)
    {
      this.PagiSanphams=this.Sanphams.slice(0, this.itemsPerPage)
      this.totalItems = this.PagiSanphams.length
    }
    else if(this.TagsLoai[i].checked)
    {
      const tempFilter = this.Sanphams.filter((v:any)=>
      {
        return v.Tags.some((v1:any)=>v1.id==item.id)
      })
    this.PagiSanphams = this.filterSP = [...new Set([...this.filterSP, ...tempFilter])];  
    this.totalItems = this.filterSP.length
    }
    else{
    this.PagiSanphams =  this.filterSP = this.filterSP.filter((v:any)=>{return !v.Tags.some((v1:any)=>v1.id==item.id)})
    this.totalItems = this.filterSP.length
    }
    // this.TagsLoai[i].checked = !this.TagsLoai[i].checked
    // this._tagService.getTagsFilter(item).subscribe();
    // this._tagService.tagfilter$.subscribe(res => {
    //   if (res) {
    //     res.forEach(v => {
    //       this.filterSP = [...v.Products, ...this.filterSP]
    //       this.filterSP = [...new Map(this.filterSP.map(obj => [obj.id, obj])).values()];
    //     });
    //     this.PagiSanphams = this.filterSP;
    //     this.totalItems = this.filterSP.length
    //   }
    // })
  }
  pageChanged(event: any): void {
    const startItem = (event.page - 1) * event.itemsPerPage;
    const endItem = event.page * event.itemsPerPage;
    this.PagiSanphams = this.Sanphams.slice(startItem, endItem); //Retrieve items for page
  }
  setPage(page: number) {
    this.currentPage = page;
  }
  addtocart(data:any)
  {
    this.itemCart.id = data.id,
    this.itemCart.soluong = 1,
    this.itemCart.Gia = data.Gia,
    this.itemCart.GiaSale = data.GiaSale,
    this.itemCart.Hinhanh = data.Hinhanh.hinhchinh.spath,
    this.itemCart.Tieude = data.Tieude,
    this.itemCart.Slug = data.Slug,
    this.cartService.addToCart(this.itemCart);
    this._NotifierService.notify('success',`Đã Thêm ${data.SKU} vào giỏ hàng`)
  }
  SortDesc()
  {
    this.PagiSanphams = this.PagiSanphams.sort((a, b) => a.Gia - b.Gia);
  }
  SortAsc()
  {
    this.PagiSanphams = this.PagiSanphams.sort((a, b) => b.Gia - a.Gia);
  }
  Random()
  {
    this.PagiSanphams = this.PagiSanphams.sort((a, b) => (a.Gia*Math.floor(Math.random() * 10) + 1) - (b.Gia*Math.floor(Math.random() * 10) + 1));
  }

}

