package com.Sell_Store.demo.Entity;

import lombok.*;

import java.sql.Timestamp;
import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Data
@Setter
@Getter
@Table(name = "orders",schema="seller_store")
public class Order {
    @Id
    @Column(name = "orderID",columnDefinition = "nvarchar(20)",nullable = false)
    private String orderID;
    @ManyToOne
    @JoinColumn(name = "uid")
    private UserDetail userDetail;
    @Column(name="starttime", nullable = false, updatable = false, insertable = false)
    private Timestamp startTime;
    @Column(name="endtime", nullable = false, updatable = true, insertable = true)
    private Timestamp endTime;
    @Column(name = "total",columnDefinition = "double",nullable = false)
    private Double total;
    @Column(name = "state",columnDefinition = "int",nullable = false)
    private int state;
}
