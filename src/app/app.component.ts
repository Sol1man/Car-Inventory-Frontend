import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {CarListComponent}  from './car-list/car-list.component'
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CarListComponent, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',


})
export class AppComponent {
  title = 'cars-frontend';
  
}
