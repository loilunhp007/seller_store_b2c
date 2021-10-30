package com.Sell_Store.demo.Controller;

import com.Sell_Store.demo.Entity.UserDetail;
import com.Sell_Store.demo.Services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.logging.*;
@Controller
@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping(path = "userdetail")
public class UserDetailController {
    @Autowired
    private UserService tvService;
    @GetMapping("/get")
    public ResponseEntity<?> getAllThanhVien(){
        List<UserDetail> lThanhVien=  tvService.getAllThanhVien();
        return ResponseEntity.status(HttpStatus.OK).body(lThanhVien);
    }
    @PostMapping({"/add"})
    public ResponseEntity<UserDetail> addThanhVien(@RequestBody UserDetail userDetail){
        try {   String matv = userDetail.getUid();
              UserDetail existUser = tvService.getUserDetailById(matv);
              UserDetail _userDetail = null;
              if(existUser == null){
                _userDetail= tvService.save(userDetail); 
              }               
               return ResponseEntity.status(HttpStatus.OK).body(_userDetail);
        } catch (Exception e) {
            e.printStackTrace();
            return new ResponseEntity<UserDetail>(userDetail, HttpStatus.EXPECTATION_FAILED);
        }

    }
    @GetMapping("/get/{id}")
    public ResponseEntity<UserDetail> getThanhVienByID(@PathVariable(name = "id")String id){
        UserDetail thanhvien = tvService.getUserDetailById(id);
        return ResponseEntity.status(HttpStatus.OK).body(thanhvien);
    }
    @PutMapping("/put/{matv}")
    public ResponseEntity<UserDetail> updateThanhVienByID(@PathVariable(name = "matv")String matv, @RequestBody UserDetail userDetail ){
        UserDetail thanhvien = tvService.getUserDetailById(matv);
        thanhvien.setPhone(userDetail.getPhone());
        thanhvien.setFirstname(userDetail.getFirstname());
        thanhvien.setLastname(userDetail.getLastname());
        thanhvien.setAddress(userDetail.getAddress());
        thanhvien.setGmail(userDetail.getGmail());
        thanhvien.setBirthday(userDetail.getBirthday());
        UserDetail tv2 = tvService.save(thanhvien);
        return ResponseEntity.status(HttpStatus.OK).body(tv2);
    }
    



    
}
