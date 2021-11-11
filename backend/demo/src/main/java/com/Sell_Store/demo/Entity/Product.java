package com.Sell_Store.demo.Entity;

import lombok.*;

import java.sql.Blob;
import java.util.Collection;
import java.util.List;
import java.util.Set;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonRawValue;
import com.fasterxml.jackson.databind.util.JSONPObject;

@Entity
@AllArgsConstructor
@Data
@NoArgsConstructor
@Getter
@Setter
@Table(name = "product",schema="seller_store")
public class Product{

    @Id
    @Column(name = "pid",columnDefinition = "nvarchar(20)", length = 50, nullable = false )
    private String productID;
    @OneToOne
    @JoinColumn(name = "cateID", referencedColumnName = "cateID")
    private Category category;
    @Column(name = "productName",columnDefinition = "nvarchar(20)", length = 50, nullable = false )
    private String productName;
    @Column(name = "images",columnDefinition = "json")
    @JsonRawValue
    private String images;
    @Column(name = "info",columnDefinition = "nvarchar(20)", length = 200, nullable = false )
    private String info;
    @Column(name = "likes",columnDefinition = "int")
    private int likes;
    @Column(name = "views",columnDefinition = "int")
    private int views;
    @Column(name = "state",columnDefinition = "int")
    private int state;
    @OneToOne(mappedBy = "product",fetch = FetchType.LAZY)
    @JsonIgnoreProperties("product")
    private Inventory inventory;
}
