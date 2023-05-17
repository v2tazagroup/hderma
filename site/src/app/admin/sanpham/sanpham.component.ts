import { FlatTreeControl } from '@angular/cdk/tree';
import { Component, OnInit, TemplateRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTreeFlattener, MatTreeFlatDataSource } from '@angular/material/tree';
import { NotifierService } from 'angular-notifier';
import { DanhmucProductService } from '../danhmuc-product/danhmuc-product.service';
import { SanphamService } from './sanpham.service';
@Component({
  selector: 'tazagroup-sanpham',
  templateUrl: './sanpham.component.html',
  styleUrls: ['./sanpham.component.scss'],
})
export class SanphamComponent implements OnInit {
  themes: any;
  danhmuc: any;
  theme: any;
  selectedFiles?: FileList;
  percentage = 0;
  selectTheme: any;
  DanhmucList!: any;
  temp!: any;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  private _transformer = (node: any, level: number) => {
    return {
      expandable: !!node.children,
      level: level,
      ...node,
    };
  };

  treeControl = new FlatTreeControl<any>(
    (node) => node.level,
    (node) => node.expandable,
  );
  treeFlattener = new MatTreeFlattener(
    this._transformer,
    (node) => node.level,
    (node) => node.expandable,
    (node) => node.children,
  );
  hasChild = (_: number, node: any) => node.expandable;
  hasNoContent = (_: number, _nodeData: any) => _nodeData.name === '';
  ShowDM:boolean=true;
  dataSource1 = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);
  constructor(
    private dialog: MatDialog,
    private fb: FormBuilder,
    private _sanphamService: SanphamService,
    private _notifierService: NotifierService
    ) {

  }
  ngOnInit(): void {
    this.resetForm();
    this._sanphamService.getDanhmucs().subscribe();
    this._sanphamService.getProduct().subscribe();
    this._sanphamService.danhmucs$.subscribe((res) => {
      if (res) {
        this.danhmuc = res;
        this.danhmuc.sort((a: any, b: any) => {
          return a.Ordering - b.Ordering;
        });
        this.dataSource1.data = res
        this.treeControl.expandAll();
      }
    });


  }
  OpenThemDanhmuc(item: any, templateRef: TemplateRef<any>) {
    this.temp = item;
    this.dialog.open(templateRef);
  }
  clickupdate() {
    this.danhmuc.forEach((x: any) => {
      this._sanphamService.postDanhmuc(x).subscribe((res) => console.log(res));
    });
    // let a:any[] = this.baiviet.filter((x:any) => x.pid == '9ce23cc8-3e11-4bb1-bee9-2c9931a5e48e')
    // a.forEach((x:any)=>{
    //   this._baivietService.deleteBaiviet(x.id).subscribe()

    // })
  }
  onSave() {
    this.DanhmucList.pid = this.temp.id;
    this._sanphamService.postDanhmuc(this.DanhmucList).subscribe((res) => {
      if (res) {
        this.resetForm();
        this.dialog.closeAll();
      }
    });
    this._notifierService.show({
      message: 'Tạo danh mục thành công',
      type: 'success',
    });
  }
  updateTrangthai(item:any){
    if(item.Trangthai == 0){
        item.Trangthai = 1
    }else{
        item.Trangthai = 0
    }
    this._sanphamService.updateDanhmuc(item).subscribe()
}
  deleteDanhmuc(id: string) {
    this._sanphamService.deleteDanhmuc(id).subscribe();
    this._notifierService.show({
      message: 'Xoá danh mục thành công',
      type: 'success',
    });
  }
  resetForm() {
    this.DanhmucList = {
      Title: '',
      pid: '',
      Mota: '',
      Slug: '',
      Image: '',
      Ordering: 0,
    };
  }
  DeleteSanpham(id: string) {
    this._sanphamService.deleteSanpham(id).subscribe();
    this._notifierService.show({
      message: 'Xoá sản phẩm thành công',
      type: 'success',
    });
  }
}
