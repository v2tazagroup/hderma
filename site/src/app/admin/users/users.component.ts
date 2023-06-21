import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatDrawer } from '@angular/material/sidenav';
import { NotifierService } from 'angular-notifier';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  New: any;
  NewPage: any = {};
  Users: any[] = []
  FilterUsers: any[] = []
  Sitemap: any = { loc: '', priority: '' }
  @ViewChild('drawer', { static: true }) drawer!: MatDrawer;
  constructor(
    private dialog: MatDialog,
    private _Notification: NotifierService,
    private _UsersService: UsersService,
  ) {
  }
  ngOnInit(): void {
    this._UsersService.getAdmin().subscribe((data)=>{
      console.log(data);
      this.FilterUsers = this.Users = data
    })
  }
  applyFilter(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    if (value.length > 2) {
      this.FilterUsers = this.Users.filter((v) => {
     return  v.Hoten.toLowerCase().includes(value)||v.SDT.toLowerCase().includes(value)
       }
      )
    }
  }
  openDialog(teamplate: TemplateRef<any>): void {
    const dialogRef = this.dialog.open(teamplate, {

    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
      }
    });
  }
  RandomPass(data:any)
  {
    this._UsersService.Randompass(data).subscribe((data)=>{
      console.log();
      
      this._Notification.show({
        message: 'Mật Khẩu Mới : '+data[1],
        type: 'success',
      });
    });
  }

}


