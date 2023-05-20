import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CauhinhComponent } from './cauhinh.component';
import { ChiendichComponent } from './chiendich/chiendich.component';
import { HoahongComponent } from './hoahong/hoahong.component';
import { NhiemvuComponent } from './nhiemvu/nhiemvu.component';
import { MaterialModule } from 'src/app/shared/material.module';
import { NotifierModule, NotifierOptions } from 'angular-notifier';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DoiquaComponent } from './doiqua/doiqua.component';
import { ChiendichChitietComponent } from './chiendich/chiendich-chitiet/chiendich-chitiet.component';
const customNotifierOptions: NotifierOptions = {
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
};
@NgModule({
  declarations: [
    CauhinhComponent,
    HoahongComponent,
    ChiendichComponent,
    NhiemvuComponent,
    DoiquaComponent,
    ChiendichChitietComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {
        path: '',
        component: CauhinhComponent,
        children: [
          {
            path: 'hoahong',
            component: HoahongComponent,
          },
          {
            path: 'chiendich',
            component: ChiendichComponent,
            children:[
              {
                path: ':id',
                component: ChiendichChitietComponent,
              }
            ]
          },
          {
            path: 'nhiemvu',
            component: NhiemvuComponent,
          },
          {
            path: 'doiqua',
            component: DoiquaComponent,
          },
        ],
      },
    ]),
  ],
  exports: [RouterModule],
})
export class CauhinhModule {}
