import { Component } from '@angular/core';

@Component({
  selector: 'app-live-chat',
  templateUrl: './live-chat.component.html',
  styleUrls: ['./live-chat.component.css'],
})
export class LiveChatComponent {
  ngOnInit(): void {
    window.location.href = 'https://travelapp-production-1f8c.up.railway.app';
  }
}
