import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './admin/main/main.component';
import { BlogchitietComponent } from './site/blogchitiet/blogchitiet.component';
import { BloglistComponent } from './site/bloglist/bloglist.component';
import { FooterComponent } from './site/footer/footer.component';
import { HeaderComponent } from './site/header/header.component';
import { LienheComponent } from './site/lienhe/lienhe.component';
import { ListsanphamComponent } from './site/listsanpham/listsanpham.component';
import { SanphamchitietComponent } from './site/sanphamchitiet/sanphamchitiet.component';
import { VechungtoiComponent } from './site/vechungtoi/vechungtoi.component';
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
    LienheComponent
   ],

  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: '', component: MainComponent, data: { type: 'trangchu' }},
      { path: ':id', component: MainComponent, data: { type: 'chitiet' }},
      { path: ':id', component: MainComponent, data: { type: 'listsanpham' }},
      { path: ':id', component: MainComponent, data: { type: 'listblog' }},
      { path: ':id', component: MainComponent, data: { type: 'blogchitiet' }},
      { path: ':id', component: MainComponent, data: { type: 'vechungtoi' }},
      { path: ':id', component: MainComponent, data: { type: 'lienhe' }},
    ],{
      initialNavigation:'enabledBlocking',
      scrollPositionRestoration: 'enabled'
    })
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
