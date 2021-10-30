package com.Sell_Store.demo.Entity;

import lombok.*;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
@AllArgsConstructor
@NoArgsConstructor
@Data
@Setter
@Getter
@Entity

@Table(name = "type_member",schema="seller_store")
public class TypeMember {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long typeID;
    @Column(name = "type_name",columnDefinition = 
    "nvarchar(50)",length = 50,nullable = false)
    private String typeName;
    @Column(name = "state", columnDefinition = "int",nullable = false)
    private int state;
}
