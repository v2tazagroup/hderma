import { Component, OnInit } from '@angular/core';
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
  ngOnInit() {
    this._BaivietService.getBaiviets().subscribe((data)=>{
      console.log(data);
      this.Baiviets = data.sort((a:any, b:any) => b.Ngaytao - a.Ngaytao);
      this.PagiBaiviets = data.slice(0, this.itemsPerPage)
      this.totalItems = data.length
    })
    this._BaivietService.getDanhmucs().subscribe((data)=>{this.Danhmucs = data})
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
