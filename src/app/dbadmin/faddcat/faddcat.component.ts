import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Location } from '@angular/common';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-faddcat',
  templateUrl: './faddcat.component.html',
  styleUrls: ['./faddcat.component.css']
})
export class FaddcatComponent {
  addCat: FormGroup;
  constructor(private location: Location , private api : ApiService) {
    this.addCat = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(3)])
    });
  }
  submitAddCat() {
    console.log(this.addCat.value);
    this.api.storeCategory(this.addCat.value).subscribe(res=>{
      console.log(res)
    })

  }
  goBAck() {
    this.location.back();
  }
}
