import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { faEdit, faLock, faTrash, faUnlock } from '@fortawesome/free-solid-svg-icons';
import { Account } from 'src/app/entity/account';
import { TypeMember } from 'src/app/entity/type-member';
import { UserDetail } from 'src/app/entity/user-detail';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-ql-nhanvien',
  templateUrl: './ql-nhanvien.component.html',
  styleUrls: ['./ql-nhanvien.component.css']
})
export class QlNhanvienComponent implements OnInit {
  isToggle:boolean=false;
  staffForm:FormGroup
 
  staffForm2 = this.formBuilder.group({
    staffFirstName2: ['',Validators.required],
    staffLastName2: ['',Validators.required],
    staffPhone2: ['',[
                    Validators.required,
                    Validators.pattern('^((\\+84-?)|0)?[0-9]{10}$')
                ]],
    staffEmail2: ['',[
                    //^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$
                    //^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$
                    Validators.required,
                    Validators.email
                ]],
    staffAddress2:['',
    [
      Validators.minLength(20),
    ]],
    staffBirthDay2:['',Validators.required]   ,
    type:['']         
  })
  isToggle2:boolean=true
  constructor(private userService:UserService,
    public datepipe: DatePipe,
    private route:Router,
    private formBuilder:FormBuilder) { }
  users:Array<UserDetail> = [] 
  date:Date = new Date();
  days:string;
  faTrash=faTrash;
  faEdit = faEdit;
  faLock = faLock;
  faUnLock = faUnlock;
  selectedType:number=1
  userDetail:UserDetail
  p:number=1
  userType:number
  roles:Array<TypeMember>
  ngOnInit(): void {
    this.getUser();
    this.getType();
    this.staffForm = this.formBuilder.group({
      staffFirstName: ['',Validators.required],
      staffLastName: ['',Validators.required],
      staffPhone: ['',[
                      Validators.required,
                      Validators.pattern('^((\\+84-?)|0)?[0-9]{10}$')
                  ]],
      staffEmail: ['',[
                      //^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$
                      //^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$
                      Validators.required,
                      Validators.email
                  ]],
      staffAddress:['',
      [
        Validators.minLength(20),
      ]],
      staffBirthDay:['',Validators.required],         
    })
    this.userType = this.getFirstNumberFromString(JSON.parse(sessionStorage.getItem('type')))
    this.permissonCheck(this.userType);
  }
  permissonCheck(type:Number){
    if(this.userType==1){
        return true;
    }else{
        if(this.userType==4){
          return true;
        }
        alert("You dont have permission")
        this.route.navigate(['/admin/thongke'])
        return false;
    }
  }
  getFirstNumberFromString(s:string){
    let a:number = Number(s.replace( /[^\d].*/, '' ))
    return a ; // creates array from matches
  }
  
  getType(){
    this.userService.getType().subscribe(Response=>{
      this.roles = Response;
      console.log(this.roles)
    })
  }
  getUser(){
    this.userService.getUsers().subscribe(Response=>{
      let nhanviens :Array<UserDetail>=[]
      nhanviens = Response;
      nhanviens.forEach(e=>{
        if(e.typeMember.typeID!=2){
          this.users.push(e);
        }
      })
      for(let i=0;i<this.users.length;i++){
        let date2 = new Date(this.users[i].timestamp);
        this.days=Math.floor((this.date.getTime() -  date2.getTime())/(1000*3600*24))+'';
        this.datepipe.transform(this.users[i].timestamp, 'yyyy-mm-dd')
      }
      console.log(this.users)
    },(error)=>{
      alert("something wrong happens")
    })
     
   
  }

  public popup_themnv(){
    
    this.isToggle = !this.isToggle
  
  console.log(this.isToggle);
}
public popup_themnv2(){
    
  this.isToggle2 = !this.isToggle2
}
  reloadCurrentRoute() {
    let currentUrl = this.route.url;
    this.route.navigateByUrl('/', {skipLocationChange: true}).then(() => {
        this.route.navigate([currentUrl]);
        console.log(currentUrl);
    });
  }
  deleteUserDetail(user:UserDetail){
    console.log("delete");
  }
  blockUser(user:UserDetail){
        if(user.state == 1){
          user.state=0
          this.userService.updateUser(user).subscribe(
            Response1=>{
              console.log(Response1)
              this.reloadCurrentRoute();
            }
          )
        }
        else{
          if(user.state == 0){
            user.state= 1
          this.userService.updateUser(user).subscribe(
            Response1=>{
              console.log(Response1)
              this.reloadCurrentRoute();
            }
          )
          }
        }
    
}
selectedUserType(event){
  this.selectedType= event.target.value
}
validate( str:string){
  str.toLowerCase();
  return str;
}
get f1(){ return this.staffForm.controls}
get staffFirstName(){
  return this.staffForm.get('staffFirstName')
}
get staffLastName(){
  return this.staffForm.get('staffLastName')
}
get staffPhone(){
  return this.staffForm.get('staffPhone')
}
get staffEmail(){
  return this.staffForm.get('staffEmail')
}
get staffAddress(){
  return this.staffForm.get("staffAddress");
}
get staffBirthDay(){
  return this.staffForm.get("staffBirthDay");
}
get type(){
  return this.staffForm.get("type");
}
get f2(){ return this.staffForm2.controls}
get staffFirstName2(){
  return this.staffForm2.get('staffFirstName2')
}
get staffLastName2(){
  return this.staffForm2.get('staffLastName2')
}
get staffPhone2(){
  return this.staffForm2.get('staffPhone2')
}
get staffEmail2(){
  return this.staffForm2.get('staffEmail2')
}
get staffAddress2(){
  return this.staffForm2.get("staffAddress");
}
get staffBirthDay2(){
  return this.staffForm2.get("staffBirthDay");
}
get type2(){
  return this.staffForm2.get("type2");
}
newStaff(){
  //userDetail
  let ac = new Account();
  ac.email =this.validate(this.f1.staffEmail.value);
  ac.password = "123456aA";       
   this.userService.checkExistUser(ac).subscribe(Response=>{
     console.log(Response.user);
     if(Response.user=='empty'){
      this.getType();
      this.userDetail = new UserDetail();
        this.userDetail.typeMember =this.roles.find(e=>e.typeID==this.selectedType);
        this.userDetail.id="U_"
        this.userDetail.firstname = this.validate(this.f1.staffFirstName.value);
        this.userDetail.lastname = this.validate(this.f1.staffLastName.value);
        this.userDetail.phone = this.validate(this.f1.staffPhone.value);
        this.userDetail.gmail = this.validate(this.f1.staffEmail.value);
        this.userDetail.address = this.validate(this.f1.staffAddress.value);
        let date2:string = this.datepipe.transform(this.staffBirthDay.value,"yyyy-MM-dd")
        this.userDetail.birthday = date2;
        this.userDetail.state= 1;
        console.log(this.userDetail)
        this.userService.addUserDetail(this.userDetail).subscribe(
          (data)=>{
            
            ac.state=1;
            ac.userDetail= data;

            this.userService.addUser(ac).subscribe(
                    (user)=>{          
                      console.log(ac);
                      alert("Tạo nhân viên thành công")
                        this.reloadCurrentRoute();
                    },
                    (error)=>{
                      alert("Có lỗi xảy ra vui lòng thử lại sau")
                    }
                  );       
            }),
            (error)=>{ alert("Có lỗi xảy ra vui lòng thử lại sau")}
     }else{
       alert("Email is exist");
     }
   })
       //user
  }
  DisplayUserInfo(user:UserDetail){
    this.staffFirstName2.setValue(user.firstname)
    this.staffPhone2.setValue(user.phone)
    this.staffAddress2.setValue(user.address)
    this.staffLastName2.setValue(user.lastname);
    this.staffBirthDay2.setValue(user.birthday);
    this.staffEmail2.setValue(user.gmail)
    this.type2.setValue(user.typeMember.typeID)
  }
  updateUser(){
    let user2 = new UserDetail();
        user2.firstname = this.validate(this.staffFirstName2.value)
        user2.lastname = this.validate(this.staffLastName2.value)
        user2.phone = this.validate(this.staffPhone2.value)
        user2.gmail = this.validate(this.staffEmail2.value)
        user2.birthday= this.staffBirthDay2.value;
        user2.address = this.validate(this.staffAddress2.value)
        user2.typeMember= this.roles.find(x=>x.typeID==this.type2.value);
        if(confirm("Bạn có chắc ?")){
          this.userService.updateUser(user2).subscribe(
            Response=>{
              alert("Update Sucess")
              this.reloadCurrentRoute();
            },
            (error)=>{
              console.error(error);
             // alert("Update Sucess")
              
            }
            
          )
        }
        

      
    
  }

}
