import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PreloadAllModules, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule, SharedModule } from '@tazagroup/shared';
import { EditorModule } from '@tinymce/tinymce-angular';
import { SwiperModule } from 'swiper/angular';
import { NotifierModule } from 'angular-notifier';
import { DanhmucProductComponent } from './danhmuc-product.component';
import { DanhmucProductDetailComponent } from './danhmuc-product-detail/danhmuc-product-detail.component';
@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    SwiperModule,
    FormsModule,
    HttpClientModule,
    EditorModule,
    NotifierModule,

    RouterModule.forChild([
      {
        path: '',
        component: DanhmucProductComponent,
        children: [
          { path: ':slug', component: DanhmucProductDetailComponent },
          { path: '', component: DanhmucProductDetailComponent },
        ],
      },
    ]),
  ],
  providers: [HttpClientModule],
  exports: [RouterModule],
  declarations: [DanhmucProductComponent, DanhmucProductDetailComponent],
})
export class DanhmucProductModule {}
