import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PreloadAllModules, RouterModule } from '@angular/router';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/shared/material.module';
import { BaivietComponent } from './baiviet.component';
import { EditorModule } from '@tinymce/tinymce-angular';
import { ThemetintucComponent } from './themetintuc/themetintuc.component';
import { BaivietChitietComponent } from './baiviet-chitiet/baiviet-chitiet.component';
import { BaivietDanhmucComponent } from './baiviet-danhmuc/baiviet-danhmuc.component';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    HttpClientModule,
    ReactiveFormsModule,
    EditorModule,
    RouterModule.forChild([
      {
        path: '',
        component: BaivietComponent,
        children: [
          { path: 'baivet/:id', component: BaivietChitietComponent },
          // { path: 'themetintuc/:slug', component: ThemetintucComponent },
          // { path: 'themetintuc/:slug', component: BaivietChitietComponent },
          { path: 'danhmuc/:id', component: BaivietDanhmucComponent },
          // { path: ':id/spmoi', component: BaivietChitietComponent },
        ],
      },
    ]),
  ],
  exports: [RouterModule],
  declarations: [
    BaivietComponent,
    ThemetintucComponent,
    BaivietChitietComponent,
    BaivietDanhmucComponent,
  ],
})
export class BaivietModule {}
