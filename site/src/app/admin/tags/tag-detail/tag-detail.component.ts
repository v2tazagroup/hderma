import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DanhmucService } from '../../danhmuc/danhmuc.service';
import { TagsService } from '../tags.service';

@Component({
  selector: 'tazagroup-tag-detail',
  templateUrl: './tag-detail.component.html',
  styleUrls: ['./tag-detail.component.scss'],
})
export class TagDetailComponent implements OnInit {
  tag: any;
  theme: any;
  selectedFiles?: FileList;
  percentage = 0;
  selectTheme: any;
  id!: string;
  constructor(
    private route: ActivatedRoute,
    private _tagService: TagsService,
    private _danhmucService: DanhmucService
  ) {}
  nest = (items: any[], id = '', link = 'pid'): any => {
    if (items) {
      return items
        ?.filter((item) => item[link] == id)
        .map((item) => ({
          ...item,
          children: this.nest(items, item.id),
        }));
    }
  };
  onFileBrowse(event: any) {
    event.target as HTMLInputElement;
    let file = event.target.files[0];
    const formData = new FormData();
    formData.append('file', file);
    this._danhmucService.uploadDriver(formData).subscribe((res) => {
      if (res) {
          this.tag.Image = res.idDrive;
      }
    });
  }
  onSubmit() {
    this._tagService.postTag(this.tag).subscribe();
  }
  updateTag() {
    this._tagService.updateTag(this.tag).subscribe((res) => {
      if (res) {
        alert('Cập nhật thành công');
      }
    });
  }

  ngOnInit(): void {
    this.tag = {
      Tieude: '',
      Loaitag: 0,
      Image: '',
      Ordering: 0,
    };
    this.route.params.subscribe((paramsId) => {
      this.id = paramsId['id'];
      if (this.id) {
        this._tagService.getTagDetail(this.id).subscribe();
        this._tagService.tag$.subscribe((res) => {
          if (res) {
            this.tag = res;
          }
        });
      }
    });
  }
}
