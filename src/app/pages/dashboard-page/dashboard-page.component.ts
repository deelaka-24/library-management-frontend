import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from "../../common/nav/nav.component";

@Component({
  selector: 'app-dashboard-page',
  standalone: true,
  imports: [RouterOutlet, NavComponent],
  templateUrl: './dashboard-page.component.html',
  styleUrl: './dashboard-page.component.css',
})
export class DashboardPageComponent {}
