import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Location } from '@angular/common';
import { ApiService } from 'src/app/services/api.service';
@Component({
  selector: 'app-faddcatbrand',
  templateUrl: './faddcatbrand.component.html',
  styleUrls: ['./faddcatbrand.component.css']
})
export class FaddcatbrandComponent {
  addCat: FormGroup;
  constructor(private location: Location , private api: ApiService) {
    this.addCat = new FormGroup({
      brand: new FormControl('', [Validators.required, Validators.minLength(3)])
    });
  }
  submitAddCat() {
    console.log(this.addCat.value);
    this.api.storeBrands(this.addCat.value).subscribe(res=>{
      console.log(res)
    })

  }
  goBAck() {
    this.location.back();
  }
}
