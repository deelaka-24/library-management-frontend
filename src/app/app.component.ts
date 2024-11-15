import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { initFlowbite } from 'flowbite';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LandingPageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    initFlowbite();
  }
  title = 'library-management-frontend';
}
