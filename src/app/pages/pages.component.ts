import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-pages',
  standalone: true,
  imports: [CommonModule,RouterOutlet],
  templateUrl: './pages.component.html'
})
export class PagesComponent {

}
