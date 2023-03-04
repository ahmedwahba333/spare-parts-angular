import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Location } from '@angular/common';
@Component({
  selector: 'app-faddcatbrand',
  templateUrl: './faddcatbrand.component.html',
  styleUrls: ['./faddcatbrand.component.css']
})
export class FaddcatbrandComponent {
  addCat: FormGroup;
  constructor(private location: Location) {
    this.addCat = new FormGroup({
      catBrand: new FormControl('', [Validators.required, Validators.minLength(3)])
    });
  }
  submitAddCat() {
    console.log(this.addCat);

  }
  goBAck() {
    this.location.back();
  }
}
