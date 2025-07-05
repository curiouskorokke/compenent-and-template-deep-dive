import { Component } from '@angular/core';
import { ServerStatus } from './server-status.interface';

@Component({
  selector: 'app-server-status',
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css',
})
export class ServerStatusComponent {
  status: ServerStatus = 'unknown';
}
