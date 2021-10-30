package com.Sell_Store.demo.Entity;

import java.sql.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonFormat;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Getter
@Setter
@Table(name = "inventory",schema="seller_store")
public class Inventory {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;

    @ManyToOne
    @JoinColumn(name = "pid", referencedColumnName = ("pid"))
    private Product product;

    @Column(name = "quantity",columnDefinition = "int")
    private int quantity;
    @Column(name = "size",columnDefinition = "int")
    private int size;
    @Column(name = "height",columnDefinition = "double")
    private double height;
    @Column(name = "width",columnDefinition = "double")
    private double width;
    @Column(name = "length",columnDefinition = "double")
    private double length;
    @Column(name = "weight",columnDefinition = "double")
    private double weight;
    @Column(name = "price",columnDefinition = "double")
    private double price;
    @Column(name = "special_price",columnDefinition = "double")
    private double special_price;
    @Column(name = "special_from_time")
    @JsonFormat(pattern="yyyy-MM-dd")
    private Date special_from_time;
    @Column(name = "special_to_time")
    @JsonFormat(pattern="yyyy-MM-dd")
    private Date special_to_time;
}
