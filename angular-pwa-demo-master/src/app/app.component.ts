import { Component } from '@angular/core';
import {PwaService} from './pwa.service';
import {eventPayload, AndroidMessagingService, MessageListener} from "./android-messaging.service";
declare const Android;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements MessageListener{
  title = 'PWADemo';
  buttonStatus = 'Unpressed';

  constructor(private pwaService: PwaService,
              private androidMessagingService: AndroidMessagingService) {
    this.androidMessagingService.addListener(this)
  }

  showAndroidToast() {
    Android.showToast("toast");
  }

  onMessage(messageEvent: eventPayload) {

    if(messageEvent.eventType === 'testEvent') {
      this.buttonStatus = messageEvent.payload;
    }

  }
}

export function buttonPressedEvent(){
  console.log('Called')
}
