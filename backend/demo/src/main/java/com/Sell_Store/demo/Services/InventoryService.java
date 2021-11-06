package com.Sell_Store.demo.Services;

import java.util.List;

import com.Sell_Store.demo.Entity.Inventory;
import com.Sell_Store.demo.Repository.InventoryRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;


@Service
@Transactional(rollbackFor = Exception.class)
public class InventoryService {
    @Autowired
    private InventoryRepository inventoryRepository;

    public List<Inventory> getAllInventories(){
        return inventoryRepository.findAll();
    }
    public Inventory getInventoryByID(int id){
        if(!inventoryRepository.findById(id).isEmpty())
        {return inventoryRepository.findById(id).get();
        }
        return null;
    }
    public Inventory addProductToInventory(Inventory inventory){
        return inventoryRepository.save(inventory);
    }
    public void deteleProductByID(int id){
        inventoryRepository.deleteById(id);
    }
   
}
