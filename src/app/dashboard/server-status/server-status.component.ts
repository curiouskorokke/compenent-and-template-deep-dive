import { Component, Input } from '@angular/core';
import { ServerStatus } from './server-status.interface';

@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css',
})
export class ServerStatusComponent {
  status: ServerStatus = 'online';
}
