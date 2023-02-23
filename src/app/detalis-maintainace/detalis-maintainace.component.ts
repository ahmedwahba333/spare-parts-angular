import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';
// import $ from 'jquery';
@Component({
  selector: 'app-detalis-maintainace',
  templateUrl: './detalis-maintainace.component.html',
  styleUrls: ['./detalis-maintainace.component.css'],
})
export class DetalisMaintainaceComponent {
  maintaincecenter_data: any = [
    {
      id: 1,
      title: 'شركة هاى تك لخدمة وسائل النقل',

      description: 'قطع غيار سيارات وكماليات ',

      image:
        'https://cdn.yellowpages.com.eg/static/modules/uploads/logos/hi-tech-for-commercial-vehicles-service-co-logo_454001_2023_wa.jpg?11220',
      rating: {
        rate: 3.9,
        count: 120,
      },
      address: 'القطعة 73, امتداد المنطقة الصناعية الثالثة',
    },
    {
      id: 2,
      title: ' شركة مصر للمحركات',

      description: 'مراكز اصلاح السيارات  ',

      image:
        'https://cdn.yellowpages.com.eg/static/modules/uploads/logos/misr-motors-co-logo_4609_2018.jpg?11220',
      rating: {
        rate: 3.9,
        count: 120,
      },
      address: '212 ش السودان, ميدان لبنان ',
    },
    {
      id: 3,
      title: 'شركة اليسر لصناعة هياكل السيارات',

      description: '  تصنيع واصلاح ودهان هياكل سيارات   ',

      image:
        'https://cdn.yellowpages.com.eg/static/modules/uploads/logos/el-youssr-co-for-cars-body-manufacturing-logo_634654_2023_sh.jpg?11220',
      rating: {
        rate: 3.9,
        count: 120,
      },
      address: 'الكيلو 27  طريق اسكندرية القاهرة الصحراوى',
    },
    {
      id: 4,
      title: ' مركز الوطنية لخدمة وصيانة السيارات',

      description: 'مراكز اصلاح السيارات  ',

      image:
        'https://cdn.yellowpages.com.eg/static/modules/uploads/logos/el-watania-service-center-logo_672983_2021__wa_63359.jpg?11220',
      rating: {
        rate: 3.9,
        count: 120,
      },
      address: 'مركز البر اقبلي',
    },
    {
      id: 5,
      title: ' الشركة الهندسية المصرية لخدمات السيارات - ثرى اس',

      description: 'مراكز اصلاح السيارات  ',

      image:
        'https://cdn.yellowpages.com.eg/static/modules/uploads/logos/398103_ps_itm.jpg?11220',
      rating: {
        rate: 3.9,
        count: 120,
      },
      address: 'الطريق الدائري امتداد كارفور   ',
    },
    {
      id: 6,
      title: '   الشركة العالمية للاطارات والبطاريات',

      description: 'مراكز اصلاح السيارات  ',

      image:
        'https://cdn.yellowpages.com.eg/static/modules/uploads/logos/el-alameya-for-tires-batteries-logo_59303-_2022_sh.jpg?11220',
      rating: {
        rate: 3.9,
        count: 120,
      },
      address: ' ش جسر البحروالخلفاوي151',
    },
  ];
  id: string = '';
  maintaceitemdetalis: any;
  currentrate: any ;
  constructor(private Activerouter: ActivatedRoute) {}
  ngOnInit(): void {
    this.id = this.Activerouter.snapshot.params['id'];
    this.maintaceitemdetalis = this.maintaincecenter_data.find(
      (e: any) => e.id == Number(this.id)
    );
    console.log(this.maintaceitemdetalis);
  }
}
