import { Component } from '@angular/core';
import { Overlay, OverlayConfig, ConnectedPositionStrategy } from '@angular/cdk/overlay';
import { PopoverService } from './popover/popover.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'overlay-tester';

  /**
   *
   */
  constructor(private popover: PopoverService) {
  }

  overlayClick() {
    const ref = this.popover.open({});
  }
}
