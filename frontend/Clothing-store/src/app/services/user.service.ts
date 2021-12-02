import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Account } from '../entity/account';
import { TypeMember } from '../entity/type-member';
import { UserDetail } from '../entity/user-detail';
import { Userdetail } from '../entity/userdetail';

@Injectable({
  providedIn: 'root'
})
export class UserService {

constructor(private httpClient:HttpClient) { }

getUsers():Observable<any>{
     return this.httpClient.get<Userdetail[]>("http://localhost:8090/userdetail/get");
   }
  updateUser(userDetail: Userdetail):Observable<any> {
    return this.httpClient.put<Userdetail>('http://localhost:8090/userdetail/put/'+userDetail.id, userDetail);   
   }
   deleteUser(uid:string){
    return this.httpClient.delete<string>('http://localhost:8090/user/delete/'+uid)
  }
  getUserByID(id:string):Observable<any>{
    return this.httpClient.get<Userdetail>('http://localhost:8090/userdetail/get/'+id)
  }
  addUserDetail(UserDetail: UserDetail):Observable<any> {
    return this.httpClient.post<UserDetail>('http://localhost:8090/userdetail/add', UserDetail);   
   }
   addUser(newUser: Account):Observable<any> {
    return this.httpClient.post<Account>('http://localhost:8090/user/add', newUser);   
   }
   getType():Observable<any>{
     return this.httpClient.get<TypeMember>("http://localhost:8090/user/gettype");
   }
}
