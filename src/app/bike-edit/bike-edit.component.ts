import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Bike } from '../bike';
import { BikeDataService } from '../bike-data.service';

@Component({
  selector: 'app-bike-edit',
  templateUrl: './bike-edit.component.html',
  styleUrls: ['./bike-edit.component.css']
})
export class BikeEditComponent implements OnInit {
  editBike: Bike = new Bike();

  saveBike() {
    this.bikeDateService.editBike(this.editBike).subscribe(p => this.router.navigate(["list"]));
  }

  constructor(private bikeDateService: BikeDataService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(param => {
      this.bikeDateService
      .getBike(+param["id"])
      .subscribe(p => (this.editBike = p));
    });
  }

}
