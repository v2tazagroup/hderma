import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PreloadAllModules, RouterModule } from '@angular/router';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditorModule } from '@tinymce/tinymce-angular';
import { MainComponent } from './main.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MaterialModule } from 'src/app/shared/material.module';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    HttpClientModule,
    EditorModule,
    RouterModule.forChild([
      {
        path: '',
        component:MainComponent,
        children: [
          {
            path: 'dashboard',
            component: DashboardComponent
          },
          {
            path: 'baiviet',
            loadChildren: () =>
              import('../baiviet/baiviet.module').then((m) => m.BaivietModule),
            // canActivate: [CauhoiGuard],
          },
          {
            path: 'danhmuc',
            loadChildren: () =>
              import('../danhmuc/danhmuc.module').then((m) => m.DanhmucModule),
          },
          {
            path: 'san-pham',
            loadChildren: () =>
              import('../product/product.module').then((m) => m.ProductModule),
          },
          {
            path: 'sanpham',
            loadChildren: () =>
              import('../sanpham/sanpham.module').then((m) => m.SanphamModule),
          },
          {
            path: 'danh-muc-san-pham',
            loadChildren: () =>
              import('../danhmuc-product/danhmuc-product.module').then(
                (m) => m.DanhmucProductModule
              ),
          },
          {
            path: 'tags',
            loadChildren: () =>
              import('../tags/tags.module').then((m) => m.TagsModule),
          },
          {
            path: 'donhang',
            loadChildren: () =>
              import('../donhang/donhang.module').then((m) => m.DonhangModule),
          },
          {
            path: 'comment',
            loadChildren: () =>
              import('../comment/comment.module').then((m) => m.CommentModule),
          },
          {
            path: 'cauhinh',
            loadChildren: () =>
              import('../cauhinh/cauhinh.module').then((m) => m.CauhinhModule),
          },
        ],
      },
    ]),
  ],
  providers: [],
  exports: [RouterModule],
  declarations: [
    MainComponent,
    DashboardComponent
  ],
})
export class MainModule {}
