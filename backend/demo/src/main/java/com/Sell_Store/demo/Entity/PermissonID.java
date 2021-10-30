package com.Sell_Store.demo.Entity;

import lombok.Setter;

import java.io.Serializable;
import java.util.Objects;

import javax.persistence.Column;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

public class PermissonID implements Serializable{
    @Column(name = "role_ID")
    private long roleID;
    @Column(name = "type_ID")
    private long typeID;

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        PermissonID that = (PermissonID) o;
        return roleID == that.roleID &&
                typeID == that.typeID;
    }

    @Override
    public int hashCode() {
        return Objects.hash(roleID, typeID);
    }
}
