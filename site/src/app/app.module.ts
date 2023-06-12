import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { BlogchitietComponent } from './site/blogchitiet/blogchitiet.component';
import { BloglistComponent } from './site/bloglist/bloglist.component';
import { FooterComponent } from './site/footer/footer.component';
import { HeaderComponent } from './site/header/header.component';
import { LienheComponent } from './site/lienhe/lienhe.component';
import { ListsanphamComponent } from './site/listsanpham/listsanpham.component';
import { SanphamchitietComponent } from './site/sanphamchitiet/sanphamchitiet.component';
import { VechungtoiComponent } from './site/vechungtoi/vechungtoi.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/material.module';
import { AuthService } from './admin/auth/auth.service';
import { MainComponent } from './site/main/main.component';
import { TrangchuComponent } from './site/trangchu/trangchu.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GuestGuard } from './admin/auth/guards/guest.guard';
import { DangnhapComponent } from './site/dangnhap/dangnhap.component';
import { DangkyComponent } from './site/dangky/dangky.component';
import { GiohangComponent } from './site/giohang/giohang.component';
import { ThongtinComponent } from './site/thongtin/thongtin.component';
import { ThanhtoanComponent } from './site/thanhtoan/thanhtoan.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { NotifierModule } from 'angular-notifier';
import { Giohang_miniComponent } from './site/giohang/giohang_mini/giohang_mini.component';
import { UsersInterceptor } from './admin/users.interceptor';
import { AuthModule } from './admin/auth/auth.module';
import { DonhangComponent } from './site/donhang/donhang.component';
import { LightboxComponent, LightboxModule } from 'ngx-acuw';
import { DonhangChitietComponent } from './site/donhang/donhang-chitiet/donhang-chitiet.component';
@NgModule({
  declarations: [
    AppComponent,
    SanphamchitietComponent,
    ListsanphamComponent,
    HeaderComponent,
    FooterComponent,
    BloglistComponent,
    BlogchitietComponent,
    VechungtoiComponent,
    LienheComponent,
    MainComponent,
    TrangchuComponent,
    Giohang_miniComponent,
    GiohangComponent,
    DangnhapComponent,
    DangkyComponent,
    ThongtinComponent,
    ThanhtoanComponent,
    DonhangComponent,
    DonhangChitietComponent
  ],
  // entryComponents: [LightboxComponent],
  imports: [
    LightboxModule,
    NotifierModule,
    NotifierModule.withConfig( {
      position: {
        horizontal: {
          position: 'right',
          distance: 12,
        },
        vertical: {
          position: 'top',
          distance: 12,
          gap: 10,
        },
      },
      theme: 'material',
      behaviour: {
        autoHide: 5000,
        onClick: 'hide',
        onMouseover: 'pauseAutoHide',
        showDismissButton: true,
        stacking: 4,
      },
      animations: {
        enabled: true,
        show: {
          preset: 'slide',
          speed: 300,
          easing: 'ease',
        },
        hide: {
          preset: 'fade',
          speed: 300,
          easing: 'ease',
          offset: 50,
        },
        shift: {
          speed: 300,
          easing: 'ease',
        },
        overlap: 150,
      },
    }),
    BrowserModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
    AuthModule,
    ReactiveFormsModule,
    SlickCarouselModule,
    PaginationModule.forRoot(),
    RouterModule.forRoot([
      {
        path: '', component: AppComponent,
        children: [
          {
            path: '', component: MainComponent,
            children: [
              { path: '', component: TrangchuComponent },
              { path: 'san-pham', component: ListsanphamComponent },
              { path: 'san-pham/:slug', component: SanphamchitietComponent },
              { path: 'bai-viet', component: BloglistComponent },
              { path: 'bai-viet/danh-muc/:slug', component: BloglistComponent },
              { path: 'bai-viet/:slug', component: BlogchitietComponent },
              { path: 've-chung-toi', component: VechungtoiComponent },
              { path: 'lien-he', component: LienheComponent },
              { path: 'dang-nhap',
               canActivate: [GuestGuard],
               canActivateChild: [GuestGuard],
               component: DangnhapComponent },
              { path: 'dang-ky', component: DangkyComponent },
              { path: 'gio-hang', component: GiohangComponent },
              { path: 'thanh-toan', component: ThanhtoanComponent },
              { path: 'thong-tin', component: ThongtinComponent },
              { path: 'don-hang', component: DonhangComponent },
              { path: 'don-hang/:id', component: DonhangChitietComponent },
            ]
          },
          {
            path: 'admin',
            loadChildren: () => import('./admin/main/main.module').then(m => m.MainModule)
          }
        ]
      },
    ], {
      preloadingStrategy: PreloadAllModules,
      scrollPositionRestoration: 'enabled'
    }),
    BrowserAnimationsModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: false,
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  exports: [RouterModule],
  providers: [
    AuthService,
    { provide: HTTP_INTERCEPTORS, useClass: UsersInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
