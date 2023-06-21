import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NotifierService } from 'angular-notifier';
import { BaivietComponent } from '../baiviet.component';
import { BaivietService } from '../baiviet.service';
import { EditorComponent } from '@tinymce/tinymce-angular';
import { environment } from 'src/app/environment';
import { UsersService } from '../../users.service';
@Component({
  selector: 'tazagroup-baiviet-chitiet',
  templateUrl: './baiviet-chitiet.component.html',
  styleUrls: ['./baiviet-chitiet.component.scss'],
})
export class BaivietChitietComponent implements OnInit {
  Detail: any
  APITINYMCE= environment.APITINYMCE;
  constructor(
    private route: ActivatedRoute,
    private _userservice: UsersService,
    private _NotifierService: NotifierService,
    private _BaivietComponent: BaivietComponent,
    private _BaivietService: BaivietService
  ) {}
  ngOnInit(): void {
    this.route.params.subscribe((paramsId) => {
      const id = paramsId['id'];
      console.log(id);
      if (id) {
        this._BaivietComponent.drawer.open();
        this._BaivietService.getBaivietDetail(id).subscribe();
        this._BaivietService.baiviet$.subscribe((res) => {
          if (res) {
            console.log(res);
            this.Detail = res;
          }
        });
      }
    });
  }
  configTiny: EditorComponent['init'] = {
    menubar: false,
    toolbar_location: 'bottom',
    toolbar_mode: 'sliding',
    branding: false,
    image_advtab: true,
    autoresize_bottom_margin: 20,
    autoresize_min_height: 50,
    height:"200",
    deprecation_warnings: false,
    plugins: [
      'advlist autolink lists link image charmap print preview anchor save',
      'searchreplace visualblocks code fullscreen',
      'fontfamily fontsize blocks insertdatetime media table paste code help'
    ],
    toolbar: 'undo redo |fontfamily fontsize blocks | bold italic underline | alignleft aligncenter alignright alignjustify | fullscreen preview code | link image media save',
    default_link_target: '_blank',
    block_unsupported_drop: true,
    entity_encoding: 'raw',
        images_upload_handler: (blobInfo: any) => {
          const file = blobInfo.blob();
          const formData = new FormData();
          formData.append('file', file);
          const filePath = `${Date.now()}-${blobInfo.filename()}`;
          const promise = new Promise<string>((resolve, reject) => {
            this._BaivietService.uploadDriverHderma(formData).subscribe((res) => {
              if (res) {
                console.log(res);
              }
            });
          });
          return promise;
        }, 
  };
  configTiny1: EditorComponent['init'] = {
    menubar: false,
    toolbar_location: 'bottom',
    toolbar_mode: 'sliding',
    branding: false,
    image_advtab: true,
    autoresize_bottom_margin: 20,
    autoresize_min_height: 50,
    deprecation_warnings: false,
    plugins: [
      'advlist autolink lists link image charmap print preview anchor save',
      'searchreplace visualblocks code fullscreen',
      'fontfamily fontsize blocks insertdatetime media table paste code help'
    ],
    toolbar: 'undo redo |fontfamily fontsize blocks | bold italic underline | alignleft aligncenter alignright alignjustify | fullscreen preview code | link image media save',
    default_link_target: '_blank',
    block_unsupported_drop: true,
    entity_encoding: 'raw',
     images_upload_handler: (blobInfo: any) => {
      const file = blobInfo.blob();
      const formData = new FormData();
      formData.append('file', file);
      const filePath = `${Date.now()}-${blobInfo.filename()}`;
      const promise = new Promise<string>((resolve, reject) => {
        this._BaivietService.uploadDriverHderma(formData).subscribe((res) => {
          if (res) {
              console.log(res);
           // resolve(`res`);
          }
        });
      });
      return promise;
    }, 
  };
  CloseDrawer()
  {
    this._BaivietComponent.drawer.close();
  }
  Update(data:any)
  {
    this._BaivietService.updateBaiviet(data).subscribe((res) => {
      if (res) {
        this._NotifierService.notify("success","Cập nhật thành công")
      }
    });
  }
}










