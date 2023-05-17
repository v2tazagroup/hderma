import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '@tazagroup/shared';
import { EditorModule } from '@tinymce/tinymce-angular';
import { SwiperModule } from 'swiper/angular';
import { SanphamComponent } from './sanpham.component';
import { DetailsanphamComponent } from './detailsanpham/detailsanpham.component';
import { DetaildanhmucComponent } from './detaildanhmuc/detaildanhmuc.component';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    MaterialModule,
    ReactiveFormsModule,
    SwiperModule,
    EditorModule,
    RouterModule.forChild([
      {
        path: '',
        component: SanphamComponent,
        children: [
          { path: 'danhmuc/:slug', component: DetaildanhmucComponent },
          { path: 'sanpham/:slug', component: DetailsanphamComponent },
        ],
      },
    ]),
  ],
  exports: [RouterModule],
  declarations: [
    SanphamComponent,
    DetailsanphamComponent,
    DetaildanhmucComponent,
  ],
})
export class SanphamModule {}
