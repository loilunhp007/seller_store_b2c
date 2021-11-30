import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Userdetail } from '../entity/userdetail';

@Injectable({
  providedIn: 'root'
})
export class UserService {

constructor(private httpClient:HttpClient) { }

getUsers():Observable<any>{
     return this.httpClient.get<Userdetail[]>("http://localhost:8090/userdetail/get");
   }
   addUser(newUser: Userdetail):Observable<any> {
   return this.httpClient.post<Userdetail>('http://localhost:8080/userdetail/add', newUser);   
  }
  updateUser(userDetail: Userdetail):Observable<any> {
    return this.httpClient.put<Userdetail>('http://localhost:8090/userdetail/put/'+userDetail.id, userDetail);   
   }
   deleteUser(uid:string){
    return this.httpClient.delete<string>('http://localhost:8080/user/delete/'+uid)
  }
}
