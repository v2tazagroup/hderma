import { Component, OnInit } from '@angular/core';
import { environment } from 'src/app/environment';
import { BaivietService } from 'src/app/shared/service/baiviet.service';

@Component({
  selector: 'app-bloglist',
  templateUrl: './bloglist.component.html',
  styleUrls: ['./bloglist.component.scss']
})
export class BloglistComponent implements OnInit {

  constructor(private _BaivietService:BaivietService) { }
  Baiviets:any[]=[]
  Danhmucs:any
  itemsPerPage = 5;
  currentPage = 1;
  totalItems = 1;
  PagiBaiviets: any[] = [];
  Base = environment.BaseUrl;
  ngOnInit() {
    this._BaivietService.getBaiviets().subscribe((data)=>{
      this.Baiviets = data.sort((a:any, b:any) => b.Ngaytao - a.Ngaytao);
      this.Baiviets = this.Baiviets.filter((v:any)=>v.pid!='b5552de3-155c-4708-8e37-f0350cbc3a80');
      this.PagiBaiviets = this.Baiviets .slice(0, this.itemsPerPage)
      this.totalItems = this.Baiviets .length
      console.log(this.Baiviets);
    })
    this._BaivietService.getDanhmucs().subscribe((data)=>{
      this.Danhmucs = data.filter((v:any)=>v.id!='b5552de3-155c-4708-8e37-f0350cbc3a80');
    })
    if(history.state.navigationId!=1){location.reload()}
  }
  ChoosenDanhmuc(item:any)
  {
    const data = this.Baiviets.filter(v=>v.pid==item.id) 
    this.PagiBaiviets = data.slice(0, this.itemsPerPage)
    this.totalItems = data.length
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.PagiBaiviets = this.Baiviets.filter((v)=>
    {
      return v.Title.trim().toLowerCase().includes(filterValue)||v.Mota.trim().toLowerCase().includes(filterValue)
    })
    this.totalItems  = this.PagiBaiviets.length
  }
  Soluong(data:any,begin:any,end:any)
  {
    return data.slice(begin, end)
  }
  pageChanged(event: any): void {
    const startItem = (event.page - 1) * event.itemsPerPage;
    const endItem = event.page * event.itemsPerPage;
    this.PagiBaiviets = this.Baiviets.slice(startItem, endItem); //Retrieve items for page
  }
  setPage(page: number) {
    this.currentPage = page;
  }
}
