package com.Sell_Store.demo.Repository;

import com.Sell_Store.demo.Entity.Inventory;

import org.springframework.data.jpa.repository.JpaRepository;

public interface InventoryRepository extends JpaRepository<Inventory,Integer> {
    
}
