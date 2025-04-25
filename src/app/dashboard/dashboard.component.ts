import { Component } from '@angular/core';
import { routes } from '../app.routes';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { GoalsComponent } from './Features/goals/goals.component';

@Component({
  selector: 'app-dashboard',
  imports: [RouterOutlet,RouterLink,RouterLinkActive,GoalsComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

}
