import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Location } from '@angular/common';

@Component({
  selector: 'app-faddcustomerusr',
  templateUrl: './faddcustomerusr.component.html',
  styleUrls: ['./faddcustomerusr.component.css']
})
export class FaddcustomerusrComponent {
  addusr: FormGroup;
  constructor(private location: Location) {
    this.addusr = new FormGroup({
      maincenusr: new FormControl('', [Validators.required, Validators.minLength(3)]),
      maincenNID: new FormControl('', [Validators.required,Validators.pattern(/^[-+]?[0-9]+$/), Validators.maxLength(14),Validators.minLength(14)]),
      maincenPhNum:new FormControl('',[Validators.required,Validators.pattern(/^01[0125][0-9]{8}$/)]),
      maincenEmail:new FormControl('',[Validators.required,Validators.pattern(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)]),
      maincenAddr: new FormControl('', [Validators.required, Validators.minLength(3)]),
      maincenCity: new FormControl('', [Validators.required, Validators.minLength(3)]),
      catBrand: new FormControl('', [Validators.required, Validators.minLength(3)]),
      catItem: new FormControl('', [Validators.required, Validators.minLength(3)]),
      custPic: new FormControl('', Validators.required),
      carPic: new FormControl('', Validators.required),
      
    });
  }
  submitaddusr() {
    console.log(this.addusr);

  }
  goBAck() {
    this.location.back();
  }
}
