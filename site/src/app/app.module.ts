import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
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
    TrangchuComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
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
              { path: 'bai-viet/:slug', component: BlogchitietComponent },
              { path: 've-chung-toi', component: VechungtoiComponent },
              { path: 'lien-he', component: LienheComponent },
            ]
            // { path: ':id', component: MainComponent, data: { type: 'chitiet' }},
            // { path: ':id', component: MainComponent, data: { type: 'listsanpham' }},
            // { path: ':id', component: MainComponent, data: { type: 'listblog' }},
            // { path: ':id', component: MainComponent, data: { type: 'blogchitiet' }},
            // { path: ':id', component: MainComponent, data: { type: 'vechungtoi' }},
            // { path: ':id', component: MainComponent, data: { type: 'lienhe' }}, 
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
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
