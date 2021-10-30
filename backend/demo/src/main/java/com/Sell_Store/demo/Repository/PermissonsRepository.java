package com.Sell_Store.demo.Repository;

import com.Sell_Store.demo.Entity.Permisson;
import com.Sell_Store.demo.Entity.PermissonID;

import org.springframework.data.jpa.repository.JpaRepository;

public interface PermissonsRepository extends JpaRepository<Permisson,PermissonID> {
    
}
