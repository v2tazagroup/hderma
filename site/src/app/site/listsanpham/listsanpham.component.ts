import { Component, OnInit } from '@angular/core';
import { TrangchuService } from '../trangchu/trangchu.service';

@Component({
  selector: 'app-listsanpham',
  templateUrl: './listsanpham.component.html',
  styleUrls: ['./listsanpham.component.css']
})
export class ListsanphamComponent implements OnInit {

  constructor(private _TrangchuService:TrangchuService) { }
  Sanphams:any[]=[]
  ngOnInit() {
    if(history.state.navigationId!=1){this.LoadPage()}
    this._TrangchuService.getProduct().subscribe((data)=>
    {
        if(data){this.Sanphams = data}
    })    
  }
  LoadPage()
  {
    setTimeout(() => {
      location.reload();
    }, 0);
  }

}
