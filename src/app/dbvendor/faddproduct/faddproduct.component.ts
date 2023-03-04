import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Location } from '@angular/common';

@Component({
  selector: 'app-faddproduct',
  templateUrl: './faddproduct.component.html',
  styleUrls: ['./faddproduct.component.css']
})
export class FaddproductComponent {
  addCat: FormGroup;
  constructor(private location: Location) {
    this.addCat = new FormGroup({
      catBrand: new FormControl('', [Validators.required, Validators.minLength(3)]),
      catModel: new FormControl('', [Validators.required, Validators.minLength(3)]),
      catYear: new FormControl('', [Validators.required, Validators.min(1900),Validators.max(2023)]),
      catItem: new FormControl('', [Validators.required, Validators.minLength(3)]),
      catItemDesc: new FormControl('', [Validators.required, Validators.minLength(3)]),
      catPrice: new FormControl('', [Validators.required, Validators.min(1)]),
      catCountry: new FormControl('', [Validators.required, Validators.minLength(3)]),
      catPic: new FormControl('', Validators.required)
      
    }); 
  }
  
  submitAddCat() {
    console.log(this.addCat);

  }
  goBAck() {
    this.location.back();
  }
}
