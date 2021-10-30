package com.Sell_Store.demo.Entity;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.IdClass;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.MapsId;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Setter
@Getter
@Entity
@Table(name="permissons",schema="seller_store")
@IdClass(PermissonID.class)

public class Permissons {
    @Id
    private long roleID;
    @Id
    private long typeID;
    @ManyToOne
    @MapsId("roleID")
    @JoinColumn(name = "role_id")
    private Permisson permisson;
    @ManyToOne
    @MapsId("typeID")
    @JoinColumn(name = "type_id")
    private TypeMember typeMember;
}
