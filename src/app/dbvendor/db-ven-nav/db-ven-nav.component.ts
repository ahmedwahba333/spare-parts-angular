import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-db-ven-nav',
  templateUrl: './db-ven-nav.component.html',
  styleUrls: ['./db-ven-nav.component.css']
})
export class DbVenNavComponent implements OnInit{
  public darkBtnChecked: any;
  public myBody: any = document.getElementById("myBody");
  public darkFun(): void {
    if (!this.myBody.hasAttribute("data-bs-theme")) {
      localStorage.setItem("darkKey", "data-bs-theme");
      localStorage.setItem("darkValue", "dark");
      this.myBody.setAttribute(
        localStorage.getItem("darkKey"),
        localStorage.getItem("darkValue")
      );
    } else {
      this.myBody.removeAttribute("data-bs-theme");
      localStorage.removeItem("darkKey");
      localStorage.removeItem("darkValue");
    }

  };


  ngOnInit() {
    if (
      localStorage.getItem("darkKey") == "data-bs-theme" &&
      localStorage.getItem("darkValue") == "dark"
    ) {
      this.myBody.setAttribute(
        localStorage.getItem("darkKey"),
        localStorage.getItem("darkValue")
      );
      this.darkBtnChecked = document.getElementById("darkBtnChecked");
      this.darkBtnChecked.setAttribute("checked", "true");
    }
  }
}
