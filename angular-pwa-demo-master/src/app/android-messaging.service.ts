import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AndroidMessagingService {
  private listeners: MessageListener[] = [];

  constructor() {
    this.listenForWindowMessage();
  }

  listenForWindowMessage() {
    window.addEventListener('message', (event: CustomEvent) => {
      this.handleWindowMessage(event.detail);
    });
  }

  handleWindowMessage(eventPayload: eventPayload) {
    if (eventPayload) {
      this.listeners.forEach(listener => {
        debugger;
        listener.onMessage(eventPayload)
      })
    }
  }

  addListener(messageListener: MessageListener) {
    this.listeners.push(messageListener);
  }

  removeListener(messageListener: MessageListener) {
    this.listeners = this.listeners.filter(currMessageListener => messageListener === messageListener);
  }
}

export interface MessageListener {
  onMessage(messageEvent: eventPayload)
}

export class eventPayload {
  eventType: string;
  payload: any;
}
