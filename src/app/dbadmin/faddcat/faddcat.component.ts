import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Location } from '@angular/common';

@Component({
  selector: 'app-faddcat',
  templateUrl: './faddcat.component.html',
  styleUrls: ['./faddcat.component.css']
})
export class FaddcatComponent {
  addCat: FormGroup;
  constructor(private location: Location) {
    this.addCat = new FormGroup({
      catName: new FormControl('', [Validators.required, Validators.minLength(3)])
    });
  }
  submitAddCat() {
    console.log(this.addCat);

  }
  goBAck() {
    this.location.back();
  }
}
