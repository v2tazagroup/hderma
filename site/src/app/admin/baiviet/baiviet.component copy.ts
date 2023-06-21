// import { Component, OnInit, TemplateRef, ViewChild, ViewEncapsulation } from '@angular/core';
// import { SwiperComponent } from 'swiper/angular';
// import { environment } from 'src/app/environment';
// import { DanhmucService } from '../danhmuc/danhmuc.service';
// import { MatTreeFlatDataSource, MatTreeFlattener } from '@angular/material/tree';
// import { FlatTreeControl } from '@angular/cdk/tree';
// import { MatPaginator } from '@angular/material/paginator';
// import { MatSort } from '@angular/material/sort';
// import { MatDialog } from '@angular/material/dialog';
// import { formatDate } from '@angular/common';
// import { Route, Router } from '@angular/router';
// import { BaivietThemeTintucsukien } from './dataTheme';
// import { baiviet } from './baivietjson';
// import { BaivietService } from './baiviet.service';
// @Component({
//   selector: 'tazagroup-baiviet',
//   templateUrl: './baiviet.component.html',
//   styleUrls: ['./baiviet.component.scss'],
// })
// export class BaivietComponent implements OnInit {
//   @ViewChild(SwiperComponent) swiper!: SwiperComponent;
//   i = false
//   baivietTintuc: any[] = baiviet
//   APITINYMCE!: string
//   temp!: string
//   index!: number
//   isilde = 1
//   theme1!: any
//   theme2!: any
//   theme3!: any
//   Slug!: string
//   danhmuc: any[]=[]
//   iTheme!: any
//   idDanhmuc!: string
//   dataFilter!: any[]
//   id!: any
//   baiviet: any = []
//   dataTemp!: any //temp chứa danh mục khi click chọn tạo bài viết, temp chứa bái viết khi click chọn chỉnh sửa bàii viết
//   @ViewChild(MatSort) sort!: MatSort;
//   @ViewChild(MatPaginator) paginator!: MatPaginator;

//   private _transformer = (node: any, level: number) => {
//     return {
//       expandable: !!node.children && node.children.length > 0,
//       level: level,
//       ...node,
//     };
//   };

//   treeControl = new FlatTreeControl<any>(
//     (node) => node.level,
//     (node) => node.expandable
//   );

//   treeFlattener = new MatTreeFlattener(
//     this._transformer,
//     (node) => node.level,
//     (node) => node.expandable,
//     (node) => node.children
//   );
//   hasChild = (_: number, node: any) => node.expandable;
//   hasNoContent = (_: number, _nodeData: any) => _nodeData.name === '';
//   dataSource1 = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);
//   constructor(private _baivietService: BaivietService, private _danhmucService: DanhmucService,
//     private dialog: MatDialog,
//     private _router: Router,
//   ) {
//     this.APITINYMCE = environment.APITINYMCE;

//   }

//   onSave() {
//     let themeTemp: any

//     if (this.iTheme == 4) {
//       themeTemp = BaivietThemeTintucsukien
//     }
//     themeTemp.pid = this.dataTemp.id
//     themeTemp.Slug = this.Slug
//     themeTemp.Ordering = this.baiviet.length + 1
//     const currentDate = new Date();
//     const cValue = formatDate(currentDate, 'dd-MM-yyyy', 'en-US');
//     themeTemp.Title = themeTemp.Title + ' ' + cValue

//     this._baivietService.postBaiviet(themeTemp).subscribe(res => {
//       if (res) {
//         let data: any = res
//         if (data.Theme == 1) {
//           this._router.navigate([`/admin/baiviet/theme1/${data.Slug}`]);
//         }
//         if (data.Theme == 2) {
//           this._router.navigate([`/admin/baiviet/theme2/${data.Slug}`]);
//         }
//         if (data.Theme == 3) {
//           this._router.navigate([`/admin/baiviet/theme3/${data.Slug}`]);
//         }
//         if (data.Theme == 4) {
//           this._router.navigate([`/admin/baiviet/themetintuc/${data.Slug}`]);
//         }
//         if (data.Theme == 5) {
//           this._router.navigate([`/admin/baiviet/totnghiep-phunxam/${data.Slug}`]);
//         }
//         alert('Tạo bài viết thành công')
//       }
//     })
//   }
//   getValue(value: string, i: number) {
//     this.temp = value
//     this.index = i

//   }
//   updateBaiviet(item: any) {
//     if (item.Trangthai == 0) {
//       item.Trangthai = 1
//     } else {
//       item.Trangthai = 0
//     }
//     this._baivietService.updateBaiviet(item).subscribe()

//   }
//   openDialog(item: any, templateRef: TemplateRef<any>) {
//     this.dataTemp = item
//     this.dialog.open(templateRef);
//   }


//   filterRecursive(filterText: string, array: any[]) {
//     let filteredData;

//     //make a copy of the data so we don't mutate the original
//     function copy(o: any) {
//       return Object.assign({}, o);
//     }

//     // has string
//     if (filterText) {
//       // need the string to match the property value
//       filterText = filterText.toLowerCase();
//       // copy obj so we don't mutate it and filter
//       filteredData = array.map(copy).filter(function x(y) {
//         if (y['Title']?.toLowerCase().includes(filterText)) {
//           return true;
//         }

//         // if children match
//         if (y.children) {
//           return (y.children = y.children.map(copy).filter(x)).length;
//         }
//       });
//       // no string, return whole array
//     } else {
//       filteredData = array;
//     }

//     return filteredData;
//   }
//   applyFilter(event: Event) {
//     const filterValue = (event.target as HTMLInputElement).value;
//     this.filterTree(filterValue);
//     // show / hide based on state of filter string
//     if (filterValue) {
//       this.treeControl.expandAll();
//     } else {
//       this.treeControl.collapseAll();
//     }
//   }

//   filterTree(filterText: string) {
//     // use filter input text, return filtered TREE_DATA, use the 'name' object value
//     this.dataSource1.data = this.filterRecursive(filterText, this.dataFilter);
//   }

//   onUpdate() {
//     this.dataTemp.pid = this.idDanhmuc
//     this._baivietService.updateBaiviet(this.dataTemp).subscribe(res => {
//       if (res) {
//         alert('Cập nhật thành công')
//       }
//     })

//   }
//   deleteBaiviet() {
//     this._baivietService.deleteBaiviet(this.dataTemp.id).subscribe(res => {
//       alert('Xoá bài thành công')
//     })

//   }
//   nest = (items: any[], id = '', link = 'pid'): any => {
//     if (items) {
//       return items
//         ?.filter((item) => item[link] == id)
//         .map((item) => ({
//           ...item,
//           children: this.nest(items, item.id),
//         }));
//     }
//   };

//   ngOnInit(): void {
//     this._danhmucService.getDanhmucs().subscribe()
//     this._baivietService.getBaiviets().subscribe()
//     this._danhmucService.danhmucs$.subscribe(data => {
//       if (data) {
//         this.danhmuc = data
//         this.danhmuc.forEach((v)=>v.Loai = 0)
//         console.log(data);
        
//         this._baivietService.baiviets$.subscribe(res => {
//           if (res) {
//             this.baiviet = res
//             this.theme1 = this.baiviet.filter((x: any) => x.Theme == 4)
//             this.baiviet.sort((a: any, b: any) => {
//               return a.Ordering - b.Ordering;
//             });
//             this.baiviet.forEach((v:any) =>v.Loai = 1);
//             let arr = [...this.danhmuc, ...this.baiviet]
//             console.log(arr);
//             console.log(this.nest(arr));
//             this.dataFilter = this.dataSource1.data = this.nest(arr)
//             this.treeControl.expandAll();

//           }
//         })

//       }
//     })
//     // this.baivietTintuc = this.baivietTintuc.filter((x: any) => x.idDM == 17)
//     // this.baivietTintuc.forEach((x: any) => {
//     //   delete x.id
//     //   delete x.idDM
//     //   x.pid = "fe918dda-2363-43eb-b0f0-a457358c1132"
//     //   x.Title = x.title
//     //   x.Mota = x.des
//     //   x.Image = x.thumbimage
//     //   x.Slug = x.slug
//     //   x.Trangthai = x.published
//     //   x.Theme = 4
//     //   x.Baiviet = [x.content1]
//     //   x.ListImage = x.image
//     //   delete x.title
//     //   delete x.CreateAt
//     //   delete x.Ordering
//     //   delete x.content1
//     //   delete x.content2
//     //   delete x.published
//     //   delete x.des
//     //   delete x.slug
//     //   delete x.listslide1
//     //   delete x.listslide2
//     //   delete x.parentid
//     //   delete x.slide1
//     //   delete x.slide2
//     //   delete x.image
//     //   delete x.Option
//     //   delete x.content
//     //   delete x.Loaibaiviet
//     //   delete x.thumbimage
//     // })
//   }
// }
