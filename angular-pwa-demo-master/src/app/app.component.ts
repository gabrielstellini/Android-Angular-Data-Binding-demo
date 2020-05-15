import { Component } from '@angular/core';
import {PwaService} from './pwa.service';
declare const Android;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'PWADemo';

  constructor(private pwaService: PwaService) {
  }

  showAndroidToast() {
    Android.showToast("toast");
  }
}
