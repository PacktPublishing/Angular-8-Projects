import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {EditorComponent} from './editor/editor.component';
import {ToolbarComponent} from './toolbar/toolbar.component';
import {TextEditorComponent} from './text-editor/text-editor.component';

@NgModule({
  declarations: [
    EditorComponent,
    ToolbarComponent,
    TextEditorComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TextEditorComponent
  ]
})
export class TextEditorModule {
}
