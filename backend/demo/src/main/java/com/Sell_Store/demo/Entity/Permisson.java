package com.Sell_Store.demo.Entity;

import lombok.*;

import javax.persistence.*;

@AllArgsConstructor
@NoArgsConstructor
@Entity
@Data
@Setter
@Getter
@Table(name = "permisson",schema="seller_store")
public class Permisson {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "roleID")
    private long roleID;
    @Column(name = "name",columnDefinition = "nvarchar(20)",length = 50,nullable = false)
    private String name;
    @Column(name = "describes",columnDefinition = "nvarchar(20)",length = 100,nullable = false)
    private String describes;
    @Column(name = "state",columnDefinition = "int",nullable = false)
    private int state;
}
