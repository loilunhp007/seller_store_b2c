package com.Sell_Store.demo.Entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Data
@Table(name = "category",schema="seller_store")
public class Category {
    @Id
    @Column(name="cateID")
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int cateID;
    private String tenloai;
    private int trangthai;
}
