import { Component, OnInit } from '@angular/core';
import { Bike } from '../bike';
import { BikeDataService } from '../bike-data.service';

@Component({
  selector: 'app-bike-list',
  templateUrl: './bike-list.component.html',
  styleUrls: ['./bike-list.component.css']
})
export class BikeListComponent implements OnInit { 
  bikes: Bike[];

  getBikes() : void {
    this.bikeDataService.getBikes().subscribe(b => (this.bikes = b));
  }

  deleteBike(id: number): void {
    this.bikeDataService.deleteBike(id).subscribe(p => this.getBikes());
  }


  constructor(private bikeDataService : BikeDataService) { }

  ngOnInit() {
    this.getBikes();
  }

}
