import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http : HttpClient) { }

  getAllData(){
    return this.http.get(`https://fakestoreapi.com/products`)
  }

  getbrandAdata(){
    return this.http.get(`https://fakestoreapi.com/products/category/jewelery`)
  }

  getbrandBdata(){
    return this.http.get(`https://fakestoreapi.com/products/category/electronics`)
  }

  getbrandCdata(){
    return this.http.get(`https://fakestoreapi.com/products/category/men's clothing`)
  }

  getbrandddata(){
    return this.http.get(`https://fakestoreapi.com/products/category/women's clothing`)
  }

}
