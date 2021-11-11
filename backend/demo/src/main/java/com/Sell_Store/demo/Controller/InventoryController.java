package com.Sell_Store.demo.Controller;

import java.util.List;

import com.Sell_Store.demo.Entity.Inventory;
import com.Sell_Store.demo.Services.InventoryService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@Controller
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping(value = "inventory")
public class InventoryController {
    @Autowired
    private InventoryService inventoryService;
    @GetMapping("/get")
    public ResponseEntity<List<Inventory>> getAllInventories(){
        List<Inventory> list= inventoryService.getAllInventories();
        return ResponseEntity.status(HttpStatus.OK).body(list);
    } 
    @GetMapping("/get/{id}")
    public ResponseEntity<Inventory> getInventoryByID(@PathVariable(name = "id")int id){
        Inventory inventory = inventoryService.getInventoryByID(id);
        return ResponseEntity.status(HttpStatus.OK).body(inventory);
    } 
    @PostMapping("/add")
    public ResponseEntity<Inventory> addProductToInventory(@RequestBody Inventory inventory){
        Inventory inventory2 = inventoryService.addProductToInventory(inventory);
        return ResponseEntity.status(HttpStatus.OK).body(inventory2);
    }
   
}
