import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Location } from '@angular/common';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-faddcatmodel',
  templateUrl: './faddcatmodel.component.html',
  styleUrls: ['./faddcatmodel.component.css']
})
export class FaddcatmodelComponent {
  addCat: FormGroup;
  constructor(private location: Location , private api: ApiService) {
    this.addCat = new FormGroup({
      model: new FormControl('', [Validators.required, Validators.minLength(3)]),
      year: new FormControl('', [Validators.required])
    });
  }
  submitAddCat() {
    console.log(this.addCat.value);
    this.api.storeModel(this.addCat.value).subscribe(res=>{
      console.log(res)
    })

  }
  goBAck() {
    this.location.back();
  }
}
