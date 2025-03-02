import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, DashboardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'TopScore - Campaign Dashboard';
}
