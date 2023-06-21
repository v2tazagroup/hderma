import { FlatTreeControl } from '@angular/cdk/tree';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { MatTreeFlattener, MatTreeFlatDataSource } from '@angular/material/tree';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { NotifierService } from 'angular-notifier';
import { AuthService } from '../auth/auth.service';
@Component({
  selector: 'tazagroup-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit,AfterViewInit {
  AdminMenu = [
    {
      Title:'Bài viết',
      Link:'baiviet',

    },
    // {
    //   Title:'Danh mục',
    //   Link:'danhmuc',

    // },
    // {
    //   Title:'Danh mục sản phẩm',
    //   Link:'danh-muc-san-pham',

    // },
    // {
    //   Title:'Sản phẩm',
    //   Link:'san-pham',

    // },
    {
      Title:'Sản phẩm',
      Link:'sanpham',

    },
    {
      Title:'Tags',
      Link:'tags',

    },
    {
      Title:'Đơn hàng',
      Link:'donhang',
    },
    {
      Title:'Khách Hàng',
      Link:'khachhang',
    },
    {
      Title:'Comment',
      Link:'comment',
    },
    // {
    //   Title:'Hình Ảnh',
    //   Link:'hinhanh',
    // },
    {
      Title:'Cấu Hình',
      children: [
        {Title:'Hoa Hồng',Link:'cauhinh/hoahong'},
        {Title:'Chiến Dịch',Link:'cauhinh/chiendich'},
        {Title:'Đổi Quà',Link:'cauhinh/doiqua'},
        {Title:'Cấu Hình Chung',Link:'cauhinh/cauhinhchung'},
        {Title:'Cấu Hình API',Link:'cauhinh/cauhinhapi'}
      ],
      Link:'#',
    },
    {
      Title:'Nhân Viên',
      Link:'nhanvien',
    }
  ]
  private _transformer = (node: any, level: number) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      name: node.Title,
      Link: node.Link,
      level: level,
    };
  };

  treeControl = new FlatTreeControl<any>(
    node => node.level,
    node => node.expandable,
  );

  treeFlattener = new MatTreeFlattener(
    this._transformer,
    node => node.level,
    node => node.expandable,
    node => node.children,
  );

  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

  hasChild = (_: number, node: any) => node.expandable;

  constructor(
   private _authService:AuthService,
    private _router: Router,
    ) {
      this.dataSource.data = this.AdminMenu;     
    }
    ngOnInit():void {
    }
  ngAfterViewInit() {
    // this._router.navigate(['admin/dashboard']);
  }
  Dangxuat()
  {
    this._authService.Dangxuat().subscribe((res) => {
        if (res == true) {
          this._router.navigate(['/admin']);
          location.reload();
         }
        }
    );
  }
}
