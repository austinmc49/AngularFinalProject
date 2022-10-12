import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BikeAddComponent } from './bike-add/bike-add.component';
import { BikeListComponent } from './bike-list/bike-list.component';
import { BikeEditComponent } from './bike-edit/bike-edit.component';

const routes: Routes = [
  {path: "", redirectTo: "list", pathMatch: "full" },
  {path: "list", component: BikeListComponent },
  {path: "add", component: BikeAddComponent},
  {path: "edit/:id", component: BikeEditComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
