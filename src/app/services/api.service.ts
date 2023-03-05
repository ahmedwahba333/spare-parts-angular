import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getAllCategories(){
    return this.http.get<any>('http://localhost:8000/api/categories')
  }

  storeCategory(data : any){
    return this.http.post<any>('http://localhost:8000/api/categories/store' , data)
  }

  delCategory(id : any){
    return this.http.delete<any>(`http://localhost:8000/api/categories/delete/${id}`)
  }


    //////////////////////////BRANDS////////////////////////////////////

  getAllBrands(){
    return this.http.get<any>('http://localhost:8000/api/categorybrand')
  }


  storeBrands(data : any){
    return this.http.post<any>('http://localhost:8000/api/categorybrand/store' , data)
  }

  delBrands(id : any){
    return this.http.delete<any>(`http://localhost:8000/api/categorybrand/delete/${id}`)
  }
  //////////////////////////MODELS////////////////////////////////////

  getAllModel(){
    return this.http.get<any>('http://localhost:8000/api/categorymodel')
  }


  storeModel(data : any){
    return this.http.post<any>('http://localhost:8000/api/categorymodel/store' , data)
  }

  delModel(id : any){
    return this.http.delete<any>(`http://localhost:8000/api/categorymodel/delete/${id}`)
  }






  ///////////////////////////PRODUCT////////////////////////////////////

  getProduct(){
   return this.http.get<any>('http://localhost:8000/api/product')
  }
}
