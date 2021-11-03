package com.Sell_Store.demo.Controller;

import java.util.List;

import com.Sell_Store.demo.Entity.Category;
import com.Sell_Store.demo.Services.CategoryService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@Controller
@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping(value = "category")
public class CategoryController {
    @Autowired
    private CategoryService categoryService;
    @GetMapping("/get")
    public ResponseEntity<List<Category>> getAllLoaiMay(){
        List<Category> loaimay = categoryService.getAllLoaiMay();
        return ResponseEntity.status(HttpStatus.OK).body(loaimay);
    }
    @GetMapping("/get/{tenloai}")
    public ResponseEntity<List<Category>> getAllByName(String tenloai){
        List<Category> loaimay = categoryService.getAllByName(tenloai);
        return ResponseEntity.status(HttpStatus.OK).body(loaimay);
    }

}
