import { Component, OnInit } from '@angular/core';
import { TrangchuService } from '../trangchu/trangchu.service';
import { TagsService } from 'src/app/shared/tags.service';
import { PageChangedEvent } from 'ngx-bootstrap/pagination';
import { GetImage } from 'src/app/shared/shared.utils';
import { environment } from 'src/app/environment';

@Component({
  selector: 'app-listsanpham',
  templateUrl: './listsanpham.component.html',
  styleUrls: ['./listsanpham.component.css']
})
export class ListsanphamComponent implements OnInit {

  constructor(
    private _TrangchuService: TrangchuService,
    private _tagService: TagsService,
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
  ngOnInit() {
    if (history.state.navigationId != 1) { this.LoadPage() }
    this._TrangchuService.getProduct().subscribe((data) => {
      if (data) {
        this.Sanphams = data
        this.PagiSanphams = this.Sanphams.slice(0, 12)
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
    if (history.state.navigationId != 1) { this.LoadPage() }
  }
  GetImage(img: any) {
    return environment.BaseUrl + img;
  }
  checkboxTags(item: any, i: any) {
    this.TagsTinhtrang[i].checked = !this.TagsTinhtrang[i].checked
    this._tagService.getTagsFilter(item).subscribe();
    this._tagService.tagfilter$.subscribe(res => {
      if (res) {
        res.forEach(v => {
          this.filterSP = [...v.Products, ...this.filterSP]
          this.filterSP = [...new Map(this.filterSP.map(obj => [obj.id, obj])).values()];
        });
        this.PagiSanphams = this.filterSP;
        this.totalItems = this.filterSP.length
      }
    })
  }
  checkTagsLoai(item: any, i: any) {
    this.TagsLoai[i].checked = !this.TagsLoai[i].checked
    this._tagService.getTagsFilter(item).subscribe();
    this._tagService.tagfilter$.subscribe(res => {
      if (res) {
        res.forEach(v => {
          this.filterSP = [...v.Products, ...this.filterSP]
          this.filterSP = [...new Map(this.filterSP.map(obj => [obj.id, obj])).values()];
        });
        this.PagiSanphams = this.filterSP;
        this.totalItems = this.filterSP.length
      }
    })
  }
  pageChanged(event: any): void {
    const startItem = (event.page - 1) * event.itemsPerPage;
    const endItem = event.page * event.itemsPerPage;
    this.PagiSanphams = this.Sanphams.slice(startItem, endItem); //Retrieve items for page
  }
  setPage(page: number) {
    this.currentPage = page;
  }
  LoadPage() {
    setTimeout(() => {
      location.reload();
    }, 0);
  }

}
