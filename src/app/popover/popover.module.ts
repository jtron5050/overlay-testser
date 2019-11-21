import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverlayModule } from '@angular/cdk/overlay';
import { FolderOverlayComponent } from './folder-overlay.component';



@NgModule({
  declarations: [FolderOverlayComponent],
  imports: [
    CommonModule,
    OverlayModule
  ],
  entryComponents: [FolderOverlayComponent]
})
export class PopoverModule { }
