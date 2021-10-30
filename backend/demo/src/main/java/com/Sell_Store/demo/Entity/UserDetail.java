package com.Sell_Store.demo.Entity;
import lombok.*;

import java.sql.Timestamp;
import java.util.Date;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonFormat;

import org.hibernate.annotations.CreationTimestamp;

@Entity
@Data
@Getter
@Setter
@Table(name = "userdetail",schema="seller_store")
public class UserDetail {
    @Id
    @Column(name = "uid", columnDefinition = "nvarchar(20)",length=20)
    private String uid;
    @Column(name = "phone",columnDefinition = 
    "nvarchar(20)",length = 12)
    private String phone;
    @Column(name = "firstname",columnDefinition = 
    "nvarchar(20)",length = 20)
    private String firstname;
    @Column(name = "lastname",columnDefinition = 
    "nvarchar(20)",length = 20)
    private String lastname;
    @Column(name = "address",columnDefinition = 
    "nvarchar(100)",length = 100)
    private String address;
    @Column(name="birthday")
    @JsonFormat(pattern="yyyy-MM-dd")
    private Date birthday;
    @Column(name = "gmail",columnDefinition = 
    "nvarchar(20)",length = 20)
    private String gmail;
    @CreationTimestamp
    @Column(name="timestamp", nullable = false, updatable = false, insertable = false)
    private Timestamp timestamp;
    @Column(name = "state",columnDefinition = 
    "int")
    private int state;
    @OneToOne(cascade = CascadeType.ALL) 
    @JoinColumn(name = "typemember_id",referencedColumnName = "typeID")
    private TypeMember typeMember;
}
