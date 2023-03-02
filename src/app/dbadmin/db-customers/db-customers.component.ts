import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { sortLabel, search } from '../myFunctions';
@Component({
  selector: 'app-db-customers',
  templateUrl: './db-customers.component.html',
  styleUrls: ['./db-customers.component.css']
})
export class DbCustomersComponent implements OnInit, AfterViewInit {
  private sort = new sortLabel;
  search = new search;
  myObj = new search;

  // start buttons events
  @ViewChild('merchNameBTn') merchNameBTn!: ElementRef;
  @ViewChild('merchNIDBTn') merchNIDBTn!: ElementRef;
  @ViewChild('merchPhoneBTn') merchPhoneBTn!: ElementRef;
  @ViewChild('merchEmailBTn') merchEmailBTn!: ElementRef;
  @ViewChild('merchAddressBTn') merchAddressBTn!: ElementRef;
  @ViewChild('merchCityBTn') merchCityBTn!: ElementRef;
  @ViewChild('carBrandBTn') carBrandBTn!: ElementRef;
  @ViewChild('carModelBTn') carModelBTn!: ElementRef;
  @ViewChild('yearBTn') yearBTn!: ElementRef;
  @ViewChild('genderBTn') genderBTn!: ElementRef;
  @ViewChild('merchStatusBTn') merchStatusBTn!: ElementRef;
  @ViewChild('searchInput') searchInput!: ElementRef;
  // merchNameBTn: any;
  // merchNIDBTn: any;
  // merchPhoneBTn: any;
  // merchEmailBTn: any;
  // merchAddressBTn: any;
  // merchCityBTn: any;
  // carBrandBTn: any;
  // carModelBTn: any;
  // yearBTn: any;
  // genderBTn: any;
  // merchStatusBTn: any;
  // end buttons events

  // start parameter 1 in search functions
  customerName = document.getElementsByClassName("customerName");
  customerNID = document.getElementsByClassName("customerNID");
  customerPhone = document.getElementsByClassName("customerPhone");
  customerEmail = document.getElementsByClassName("customerEmail");
  customerAddress = document.getElementsByClassName("customerAddress");
  customerCity = document.getElementsByClassName("customerCity");
  carBrand = document.getElementsByClassName("carBrand");
  carModel = document.getElementsByClassName("carModel");
  carYear = document.getElementsByClassName("carYear");
  customerGender = document.getElementsByClassName("customerGender");
  customerStatus = document.getElementsByClassName("customerStatus");
  // end parameter 1 in search functions

  // start parameter 2 in search functions
  searchValue: any;
  // end parameter 2 in search functions


  constructor() {
    // this.merchNameBTn = document.getElementById("merchNameBTn");
    // this.merchNIDBTn = document.getElementById("merchNIDBTn");
    // this.merchPhoneBTn = document.getElementById("merchPhoneBTn");
    // this.merchEmailBTn = document.getElementById("merchEmailBTn");
    // this.merchAddressBTn = document.getElementById("merchAddressBTn");
    // this.merchCityBTn = document.getElementById("merchCityBTn");
    // this.carBrandBTn = document.getElementById("carBrandBTn");
    // this.carModelBTn = document.getElementById("carModelBTn");
    // this.yearBTn = document.getElementById("yearBTn");
    // this.genderBTn = document.getElementById("genderBTn");
    // this.merchStatusBTn = document.getElementById("merchStatusBTn");
    // start parameter 2 in search functions
    this.searchValue = document.getElementById("search");
    // end parameter 2 in search functions 
  }
  ngAfterViewInit() {
    this.merchNameBTn.nativeElement.addEventListener("click", () => {
      this.myObj.searchKeyUp(
        this.customerName,
        this.searchInput.nativeElement.value
      );

      this.merchNIDBTn.nativeElement.addEventListener("click", () => {
        this.myObj.searchKeyUp(this.customerNID, this.searchValue.value);
      });
      this.merchPhoneBTn.nativeElement.addEventListener("click", () => {
        this.myObj.searchKeyUp(
          this.customerPhone,
          this.searchInput.nativeElement.value
        );
      });

      this.merchEmailBTn.nativeElement.addEventListener("click", () => {
        this.myObj.searchKeyUp(
          this.customerEmail,
          this.searchInput.nativeElement.value
        );
      });
      this.merchAddressBTn.nativeElement.addEventListener("click", () => {
        this.myObj.searchKeyUp(
          this.customerAddress,
          this.searchInput.nativeElement.value
        );
      });
      this.merchCityBTn.nativeElement.addEventListener("click", () => {
        this.myObj.searchKeyUp(
          this.customerCity,
          this.searchInput.nativeElement.value
        );
      });

      this.carBrandBTn.nativeElement.addEventListener("click", () => {
        this.myObj.searchKeyUp(this.carBrand, this.searchInput.nativeElement.value);
      });

      this.carModelBTn.nativeElement.addEventListener("click", () => {
        this.myObj.searchKeyUp(this.carModel, this.searchInput.nativeElement.value);
      });
      this.yearBTn.nativeElement.addEventListener("click", () => {
        this.myObj.searchKeyUp(this.carYear, this.searchInput.nativeElement.value);
      });
      this.genderBTn.nativeElement.addEventListener("click", () => {
        this.myObj.searchKeyUp(
          this.customerGender,
          this.searchInput.nativeElement.value
        );
      });

      this.merchStatusBTn.nativeElement.addEventListener("click", () => {
        this.myObj.searchKeyUp(
          this.customerStatus,
          this.searchInput.nativeElement.value
        );
      });


    });
  }
  ngOnInit(): void {
    this.sort.jQueryLogic();
  }
}
