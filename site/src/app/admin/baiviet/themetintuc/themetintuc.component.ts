import {
  Component,
  OnInit,
  ViewEncapsulation,
  Pipe,
  PipeTransform,
} from '@angular/core';
import { EditorComponent } from '@tinymce/tinymce-angular';
import { BaivietService } from '../baiviet.service';
import { environment } from '@tazagroup/shared/environments';
import { BaivietThemeTintucsukien } from '../dataTheme';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';

declare let tinymce: any;
@Component({
  selector: 'tazagroup-themetintuc',
  templateUrl: './themetintuc.component.html',
  styleUrls: ['./themetintuc.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ThemetintucComponent implements OnInit {
  APITINYMCE!: string;
  id!: string;
  index!: number;
  type!: number;
  ListImage: any = {};
  temp!: any;
  selectedFiles?: FileList;
  items = [1, 2, 3, 4, 5];
  items2 = [
    {
      Image: '1xsZrRoh2QFvp2hHYaWmwjUJ3eC8Ix4oN',
      Des: 'Timona Academy là học viện chuyên đào tạo spa đã có hơn 5 năm kinh nghiệm. Đây chính là nơi đã ươm mầm ước mơ, là bệ phóng cho các bạn trẻ tiến đến vị trí trở thành một chuyên viên spa, thẩm mỹ chuyên nghiệp.',
    },
    {
      Image: '1_8SpgDsqjW2qYHs89m7M12z6Y54NEPhN',

      Des: 'Các học viên có thể an tâm vì cơ sở vật chất hiện đại và đầy đủ để tạo mọi điều kiện chobạn có thể học tập cách tốt nhất.',
    },
    {
      Image: '1x7afT-7d-ptdPzOrY3xYXNuUcK8Kx7Aa',

      Des: 'Giáo viên tại Timona Academy đều có trình độ chuyên môn cao với nhiều năm kinh nghiệm trong lĩnh vực spa, thẩm mỹ.',
    },
    {
      Image: '1CEQruQdP8eL_Wsn0A5dOxgGtvSkOHwkW',

      Des: 'Các khóa đào tạo tại đây đều đi theo tỉ lệ: 10% lý thuyết, 90% thực hành. Học viên được liên tục thực hành trên người thật, khách hàng thật để nâng cao tay nghề bản thân.',
    },
    {
      Image: '1lgW0KpFBkkvHQxZ2H1DdlzCPJ1EDAnmX',
      Des: 'Học viên không chỉ được cấp chứng chỉ hành nghề spa sau khóa học mà còn được tặng thêm 3 khóa học khác bao gồm: tắm trắng, triệt lông và làm ốm...',
    },
    {
      Image: '1uIhAmbgok-tJzDp1Z-acOocd6d7YP1oN',
      Des: 'Ngoài ra, Timona Academy còn có nhiều chính sách hỗ trợ các học viên của mình như: tư vấn mở spa miễn phí, hỗ trợ việc làm ngay sau khi tốt nghiệp.',
    },
  ];
  data: any = {
    Title: 'KHOÁ TRIỆT LÔNG CÔNG NGHỆ CAO',
    Mota: '<div class="rounded-2xl bg-indigo-900 px-10 py-5 relative space-y-5">\n<div class="text-white text-lg text-justify relative">\n<p class="text-lg">Khi chất lượng cuộc sống dần được n&acirc;ng l&ecirc;n, con người ng&agrave;y c&agrave;ng quan t&acirc;m, chăm ch&uacute;t cho bản th&acirc;n nhiều hơn. Sẽ l&agrave; một điểm trừ nếu để vi-&ocirc;-l&ocirc;ng mặc sức ph&aacute;t triển tr&ecirc;n cơ thể hoặc mọc ở một số vị tr&iacute; kh&ocirc;ng cần thiết. Đặc biệt, phụ nữ rậm l&ocirc;ng thường gặp trở ngại lớn về mặt thẩm mỹ v&agrave; t&acirc;m l&yacute; g&acirc;y ảnh hưởng lớn đến giao tiếp, chất lượng cuộc sống. Kh&oacute;a học triệt l&ocirc;ng tại Timona Academy sẽ gi&uacute;p bạn chuy&ecirc;n nghiệp hơn trong quy tr&igrave;nh triệt l&ocirc;ng chuẩn Spa.</p>\n</div>\n</div>',
    Baiviet: [],
    Theme: 4,
    Slug: '',
  };
  baiviet!: string;
  configTiny: EditorComponent['init'] = {
    plugins: 'lists link image table code help wordcount media save',
    toolbar:
      'undo redo | bold italic | alignleft aligncenter alignright | bullist numlist outdent indent | link image media save',
    image_advtab: false,
    image_description: true,
    image_dimensions: false,
    block_unsupported_drop: true,
    images_reuse_filename: true,
    paste_data_images: false,
    height: '300px',
    content_style: ".my_class",
    images_upload_handler: (blobInfo: any) => {
      const file = blobInfo.blob();
      const formData = new FormData();
      formData.append('file', file);
      // const filePath = `${Date.now()}-${blobInfo.filename()}`;
      // const ref = this.storage.ref(filePath);
      // const task = this.storage.upload(filePath, file);
      const promise = new Promise<string>((resolve, reject) => {
        this._baivietService.uploadDriverHderma(formData).subscribe((res) => {
          if (res) {
            resolve(`https://drive.google.com/uc?id=${res.idDrive}`);
          }
        });
      });
      return promise;
    },
    entity_encoding: 'raw',
    file_picker_types: 'image media',
    file_picker_callback: function (cb, value, meta: any) {
      if (meta.filetype == 'media') {
        const input: any = document.createElement('input');
        input.setAttribute('type', 'file');
        input.setAttribute('accept', 'image/*');
        input.setAttribute('accept', 'media/*');

        input.onchange = function () {
          const file = input.files[0];
          const reader = new FileReader();
          this.file = file;
          const formData = new FormData();
          formData.append('file', file);

          const upload = function () {
            fetch(environment.APIURL + '/upload/file', {
              // Your POST endpoint
              method: 'POST',
              // headers: {
              //   // Content-Type may need to be completely **omitted**
              //   // or you may need something
              //   "Content-Type": "application/json"
              // },
              body: formData, // This is your file object
            })
              .then(
                (response: any) => {
                  return response.json();
                } // if the response is a JSON object
              )
              .then(
                (success) => {
                  return cb(
                    `https://drive.google.com/uc?id=${success.idDrive}`
                  );
                } // Handle the success response object
              )
              .catch(
                (error) => console.log(error) // Handle the error response object
              );
          };
          upload();
          reader.onload = function () {
            const id = 'blobid' + new Date().getTime();
            const blobCache = tinymce.activeEditor.editorUpload.blobCache;
            const base64 = (<string>reader.result).split(',')[1];
            const blobInfo = blobCache.create(id, file, base64);
            blobCache.add(blobInfo);
          };
          reader.readAsDataURL(file);
        };
        // cb('movie.mp4', { source2: 'alt.ogg', poster: 'image.jpg' });
        input.click();
      }
    },
    init_instance_callback: function (editor) {},
  };
  constructor(
    private _baivietService: BaivietService,
    private route: ActivatedRoute,
    private sanitizer: DomSanitizer
  ) {
    this.APITINYMCE = environment.APITINYMCE;
  }
  onUpdate() {
    this._baivietService.updateBaiviet(this.data).subscribe((res) => {
      if (res) {
        alert('Cập nhật thành công');
      }
    });
  }
  getValue(value: string, i: number, type: number) {
    this.temp = value;
    this.index = i;
    this.type = type;
  }
  onChange(e: any) {
    if (this.index == 99) {
      if (this.type == 1) {
        this.data.Title = this.temp;
      } else if (this.type == 2) {
        this.data.Mota = this.temp;
      }
    } else if (this.index == 0 && this.type == 0) {
      this.data.Baiviet = this.temp;
    } else {
      if (this.type == 1) {
        this.data.Baiviet[this.index].Title = this.temp;
      } else if (this.type == 2) {
        this.data.Baiviet[this.index].Des = this.temp;
      }
    }
    this._baivietService.updateBaiviet(this.data).subscribe((res) => {
      if (res) {
      }
    });
  }
  changeLinkImage() {
    console.log(this.data.Baiviet);
    if (this.data.Baiviet.length > 0) {
      let result = this.data.Baiviet[0].replace(
        /v1.timona.edu.vn\/images/g,
        'images.timona.edu.vn'
      );
      this.data.Baiviet = result;
    } else {
      let result = this.data.Baiviet[0].replace(
        /v1.timona.edu.vn\/images/g,
        'images.timona.edu.vn'
      );
      this.data.Baiviet = result;
    }

    // document.querySelectorAll('img').forEach(x => {
    //   let a: any = x.getAttribute('src')
    //   x.setAttribute('src', result)
    // })
  }
  onFileBrowse(event: any, i: number) {
    event.target as HTMLInputElement;
    let file = event.target.files[0];
    const formData = new FormData();
    formData.append('file', file);
    this._baivietService.uploadDriverHderma(formData).subscribe((res) => {
      if (res) {
        if (i == 99) {
          this.data.Image = res.idDrive;
        } else if (i == 98) {
          this.data.Imagenoibat = res.idDrive;
        } else if (i == 97) {
          this.data.ImageMobile = res.idDrive;
        } else {
          this.data.Baiviet[i].Image = res.idDrive;
        }
        this._baivietService.updateBaiviet(this.data).subscribe((res) => {});
      }
    });
  }

  ngOnInit(): void {
    this.route.params.subscribe((paramsId) => {
      this.id = paramsId['slug'];
      this.data = {};

      if (this.id) {
        this._baivietService.getBaivietDetail(this.id).subscribe();
        this._baivietService.baiviet$.subscribe((res) => {
          if (res) {
            this.data = res;
            
          }
        });
      }
    });
  }
}
