import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Location } from '@angular/common';

@Component({
  selector: 'app-faddcatmodel',
  templateUrl: './faddcatmodel.component.html',
  styleUrls: ['./faddcatmodel.component.css']
})
export class FaddcatmodelComponent {
  addCat: FormGroup;
  constructor(private location: Location) {
    this.addCat = new FormGroup({
      catModel: new FormControl('', [Validators.required, Validators.minLength(3)])
    });
  }
  submitAddCat() {
    console.log(this.addCat);

  }
  goBAck() {
    this.location.back();
  }
}
