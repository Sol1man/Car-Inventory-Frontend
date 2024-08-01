import { Component, OnInit } from '@angular/core';
import { car } from './car.model';
import { CarService } from '../car.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-car-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './car-list.component.html',
  styleUrl: './car-list.component.css',


})
export class CarListComponent implements OnInit{
  carList: car[] = [];

  constructor (private carService: CarService){}
  ngOnInit(): void {
    debugger;
    this.carService.getAllCars().subscribe((data: car[]) => {
      this.carList = data;
      console.log(this.carList);
    }, error => {
      console.error('Error fetching cars', error);
    });

  }

}
