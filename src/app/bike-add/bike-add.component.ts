import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Bike } from '../bike';
import { BikeDataService } from '../bike-data.service';

@Component({
  selector: 'app-bike-add',
  templateUrl: './bike-add.component.html',
  styleUrls: ['./bike-add.component.css']
})
export class BikeAddComponent implements OnInit {

  newBike: Bike = new Bike();

  addBike() {
    this.bikeDataService.addBike(this.newBike).subscribe(
      p=>
      this.router.navigate(["list"]));
  }

  constructor(private bikeDataService: BikeDataService, private router : Router) { }

  ngOnInit() {
  }

}
