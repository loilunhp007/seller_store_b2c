package com.Sell_Store.demo.Repository;

import java.util.List;

import com.Sell_Store.demo.Entity.Inventory;
import com.Sell_Store.demo.Entity.Product;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface InventoryRepository extends JpaRepository<Inventory,Integer> {
    
   public Inventory findByProduct(Product product);
}
