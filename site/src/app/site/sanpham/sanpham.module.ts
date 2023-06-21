import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SanphamComponent } from './sanpham.component';
import { SanphamChitietComponent } from './sanpham-chitiet/sanpham-chitiet.component';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { SlickCarouselModule } from 'ngx-slick-carousel';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    SlickCarouselModule,
    PaginationModule.forRoot(),
    RouterModule.forChild([
      {
        path: '', component: SanphamComponent,
        children: [
          {
            path: ':id', component: SanphamChitietComponent,
          },
        ]
      },
    ]),
  ],
  declarations: [
    SanphamComponent,
    SanphamChitietComponent
  ]
})
export class SanphamModule { }
