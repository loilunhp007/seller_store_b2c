import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cart } from '../entity/cart';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private httpClient:HttpClient) { 
  }
  getCartItems(uid:String):Observable<any>{
    return this.httpClient.get<Cart[]>('http://localhost:8090/cart/get/'+uid)
  }
  addToCart(uid:string,productID:String):Observable<any>{
    return this.httpClient.post<Cart>('http://localhost:8090/cart/add/'+uid+'/'+productID,null)  
  }
  plusCart(uid:string,productID:String):Observable<any>{
    return this.httpClient.put<Cart>('http://localhost:8090/cart/put/plus/'+uid+'/'+productID,null);
  }
  minusCart(uid:string,productID:String):Observable<any>{
    return this.httpClient.put<Cart>('http://localhost:8090/cart/put/minus/'+uid+'/'+productID,null);
  }
  deleteCartItem(uid:string,productID:String):Observable<any>{
    return this.httpClient.delete<Cart>('http://localhost:8090/cart/delete/'+uid+'/'+productID);
  }
  deleteCart(uid:string):Observable<any>{
    return this.httpClient.delete<Cart>('http://localhost:8090/cart/delete/cart/'+uid);
  }
}
