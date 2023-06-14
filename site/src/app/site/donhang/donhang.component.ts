import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/admin/users.service';
import { TTDonhang } from 'src/app/shared/datatype';
import { DonhangService } from 'src/app/shared/donhang.service';

@Component({
  selector: 'app-donhang',
  templateUrl: './donhang.component.html',
  styleUrls: ['./donhang.component.scss']
})
export class DonhangComponent implements OnInit {
  Donhangs:any[]=[]
  FDonhangs:any[]=[]
  TTDonhang = TTDonhang
  selectedOption: any;
  constructor(
    private _DonhangService:DonhangService,
    private _usersService:UsersService,
    ) {}

  ngOnInit() {
    this._usersService.getProfile().subscribe((data1)=>{
      if(data1)
      {
        this._DonhangService.getDonhangByidKH(data1.id).subscribe((data:any)=>
        {     
          data.forEach((v:any) => {
            v.Tong = v.Donhangchitiets.reduce((total:any, item:any) => total + (item.Dongia * item.Soluong), 0);
          });
          this.Donhangs =  this.FDonhangs= data
          console.log(data);
        })
      }
    })
  }
  Findbyid(item:any,items:any,value:any)
  {
    const result =  items.find((v:any)=>v.id ==item)
    return result?result[value]:''
  }
  onSelectionChange(value: string): void {
    this.FDonhangs = this.Donhangs.filter(v=>v.Trangthai == value)
  }

}
