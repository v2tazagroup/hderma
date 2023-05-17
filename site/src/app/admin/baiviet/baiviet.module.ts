import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PreloadAllModules, RouterModule } from '@angular/router';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '@tazagroup/shared';
import { BaivietComponent } from './baiviet.component';
import { EditorModule } from '@tinymce/tinymce-angular';
import { SwiperModule } from 'swiper/angular';
import { ThemetintucComponent } from './themetintuc/themetintuc.component';
import { SharedpipeModule } from '@tazagroup/shared/utils';
import { BaivietChitietComponent } from './baiviet-chitiet/baiviet-chitiet.component';
import { BaivietDanhmucComponent } from './baiviet-danhmuc/baiviet-danhmuc.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    HttpClientModule,
    ReactiveFormsModule,
    SwiperModule,
    SharedpipeModule,
    EditorModule,
    RouterModule.forChild([
      {
        path: '',
        component: BaivietComponent,
        children: [
          // { path: 'themetintuc/:slug', component: ThemetintucComponent },
          { path: 'themetintuc/:slug', component: BaivietChitietComponent },
          { path: 'danhmuc/:slug', component: BaivietDanhmucComponent },
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
