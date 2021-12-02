import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Paymentmethod } from '../entity/paymentMethod';

@Injectable({
  providedIn: 'root'
})
export class PaymentserviceService {

  constructor(private httpClient:HttpClient) { }
  getAllPaymentMethod():Observable<any>{
    return this.httpClient.get<Paymentmethod[]>("http://localhost:8090/paymentmethod/get");
  }
  addPayment(payment:Paymentmethod):Observable<any>{
    return this.httpClient.post<Paymentmethod>("http://localhost:8090/paymentmethod/add",payment)
  }
  getPaymentMethodByID(id:number):Observable<any>{
    return this.httpClient.get<Paymentmethod[]>("http://localhost:8090/paymentmethod/get/"+id);
  }
}
