package com.Sell_Store.demo.Entity;

import java.sql.Date;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

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
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    @OneToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "p_id",referencedColumnName = "pid")
    private Product product;
    @Column(name = "quantity",columnDefinition = "int")
    private int quantity;
    @Column(name = "price",columnDefinition = "double")
    private double price;
    @Column(name = "percent_discount",columnDefinition = "int")
    private int percent_discount;
    @Column(name = "special_from_time")
    @JsonFormat(pattern="yyyy-MM-dd")
    private Date special_from_time;
    @Column(name = "special_to_time")
    @JsonFormat(pattern="yyyy-MM-dd")
    private Date special_to_time;
}
