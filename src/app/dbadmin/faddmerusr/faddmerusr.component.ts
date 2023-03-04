import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Location } from '@angular/common';
@Component({
  selector: 'app-faddmerusr',
  templateUrl: './faddmerusr.component.html',
  styleUrls: ['./faddmerusr.component.css']
})
export class FaddmerusrComponent {
  addusr: FormGroup;
  constructor(private location: Location) {
    this.addusr = new FormGroup({
      merusr: new FormControl('', [Validators.required, Validators.minLength(3)]),
      merNID: new FormControl('', [Validators.required,Validators.pattern(/^[-+]?[0-9]+$/), Validators.maxLength(14),Validators.minLength(14)]),
      comReg: new FormControl('', Validators.required)
    });
  }
  submitaddusr() {
    console.log(this.addusr);

  }
  goBAck() {
    this.location.back();
  }
}
