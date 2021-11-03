import { Injectable } from '@angular/core';
import { Product } from '../entity/product';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient:HttpClient) { }
  getProducts(){
    return this.httpClient.get<Product[]>("http://localhost:8090/products/get");
  }
  addProduct(product:Product): Observable<any>{
    return this.httpClient.post<Product>("http://localhost:8090/products/add",product);
  }
  updateProduct(product:Product){
    return this.httpClient.put<Product>("http://localhost:8090/products/put/"+product.productID,product);
  }
  deleteProduct(id:String){
    return this.httpClient.delete<Product>("http://localhost:8090/products/delete/"+id);
  }
}
