import { Injectable } from '@angular/core';
import { Overlay } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { FolderOverlayComponent, FolderOverlayRef } from './folder-overlay.component';

export interface PopoverParams {
}


@Injectable({
  providedIn: 'root'
})
export class PopoverService {

  constructor(private overlay: Overlay) { }

  open(params: PopoverParams) {
    const position = this.overlay.position()
      .global().centerHorizontally().centerVertically();
    const overlayRef = this.overlay.create({
      hasBackdrop: true,
      backdropClass: 'backdrop',
      width: 200, height: 200, panelClass: 'popover', positionStrategy: position
    });
    const folderPortal = new ComponentPortal(FolderOverlayComponent);
    overlayRef.attach(folderPortal);
    const folderRef = new FolderOverlayRef(overlayRef);
    overlayRef.backdropClick().subscribe( _ => folderRef.close());
    return folderRef;
  }
}
