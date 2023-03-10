import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-db-ven-home',
  templateUrl: './db-ven-home.component.html',
  styleUrls: ['./db-ven-home.component.css']
})
export class DbVenHomeComponent implements OnInit{
  ngOnInit(): void {
  $(document).ready(function () {
    // Users
    $(".total-users").click(function () {
      $(".total-users-details").fadeToggle("slow");
      $(".total-merchant-users-details-info").hide();
      $(".total-Maintenance-users-details-info").hide();
      $(".total-Normal-users-details-info").hide();
      $(".total-users-details-pending").hide();
      $(".total-orders-parent").hide();
      $(".total-category-parent").hide();
    });
  
    $(".total-Merchant-Users").click(function () {
      $(".total-merchant-users-details-info").fadeToggle("slow");
      $(".total-Maintenance-users-details-info").hide();
    });
  
    $(".total-Maintenance-Center-Users").click(function () {
      $(".total-Maintenance-users-details-info").fadeToggle("slow");
      $(".total-merchant-users-details-info").hide();
    });
  
    // pending
    $(".total-pending").click(function () {
      $(".total-users-details-pending").fadeToggle("slow");
      $(".total-merchant-users-details-info").hide();
      $(".total-Maintenance-users-details-info").hide();
      $(".total-Normal-users-details-info").hide();
      $(".total-users-details").hide();
      $(".total-orders-parent").hide();
      $(".total-category-parent").hide();
    });
  
    // orders
    $(".total-orders").click(function () {
      $(".total-orders-parent").fadeToggle("slow");
      $(".total-merchant-users-details-info").hide();
      $(".total-Maintenance-users-details-info").hide();
      $(".total-Normal-users-details-info").hide();
      $(".total-users-details").hide();
      $(".total-users-details-pending").hide();
      $(".total-category-parent").hide();
    });
  
    // category
    $(".total-items").click(function () {
      $(".total-category-parent").fadeToggle("slow");
      $(".total-merchant-users-details-info").hide();
      $(".total-Maintenance-users-details-info").hide();
      $(".total-Normal-users-details-info").hide();
      $(".total-users-details").hide();
      $(".total-users-details-pending").hide();
      $(".total-orders-parent").hide();
    });
  });
}

}
