import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Product } from '../entity/product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient:HttpClient) { }
  getProducts(){
    return this.httpClient.get<Product[]>("localhost:8090/products/get");
  }
  addProduct(product:Product): Observable<any>{
    return this.httpClient.post<Product>("localhost:8090/products/add",product);
  }
  updateProduct(product:Product){
    return this.httpClient.put<Product>("localhost:8090/products/put/"+product.productid,product);
  }
  deleteProduct(id:String){
    return this.httpClient.delete<Product>("localhost:8090/products/delete/"+id);
  }
}
