import { Component, OnInit } from '@angular/core';
import { OverlayRef } from '@angular/cdk/overlay';

@Component({
  selector: 'app-folder-overlay',
  templateUrl: './folder-overlay.component.html',
  styleUrls: ['./folder-overlay.component.css']
})
export class FolderOverlayComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

export class FolderOverlayRef {
  constructor(private overlayRef: OverlayRef) {}

  close(): void {
    this.overlayRef.dispose();
  }
}
