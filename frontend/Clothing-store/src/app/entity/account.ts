import { Userdetail } from './userdetail';
export class Account {
  uid: number;
  email: string;
  password: string;
  state: number;
  userDetail:Userdetail
  constructor(email: string, password: string){
    this.email = email;
    this.password = password;
  }
}
