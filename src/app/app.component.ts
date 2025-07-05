import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { DashboardModule } from './dashboard/dashboard.module';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [HeaderComponent, DashboardModule],
})
export class AppComponent {}
