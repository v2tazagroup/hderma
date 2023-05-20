import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PreloadAllModules, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/shared/material.module';
import { EditorModule } from '@tinymce/tinymce-angular';
import { CommentComponent } from './comment.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    MaterialModule,
    ReactiveFormsModule,
    EditorModule,
    RouterModule.forChild([
      {
        path: '',
        component: CommentComponent,
        children:[
        
        ]
      },
    ]),
  ],
  exports: [RouterModule],
  declarations: [CommentComponent],
})
export class CommentModule {}
