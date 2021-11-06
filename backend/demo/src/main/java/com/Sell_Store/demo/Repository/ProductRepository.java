package com.Sell_Store.demo.Repository;

import java.util.List;

import com.Sell_Store.demo.Entity.*;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface ProductRepository extends JpaRepository<Product,String> {
    public List<Product> findByState(int trangthai);
    public List<Product> findByProductNameContains(String tensp);

    @Query(value = "SELECT * From Inventory inven INNER join Product p on inven.pid=p.pid where 1",nativeQuery=true)
    public List<Product> getAllInventoriesByProductID();
    
}   
