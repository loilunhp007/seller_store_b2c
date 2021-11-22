package com.Sell_Store.demo.Entity;

import lombok.*;

import java.sql.Blob;
import java.util.Collection;
import java.util.Date;
import java.util.Map;
import java.util.Set;
import java.util.List;
import javax.persistence.*;

import com.Sell_Store.demo.Utils.DatePrefixedSequenceIdGenerator;
import com.Sell_Store.demo.Utils.StringPrefixedSequenceIdGenerator;
import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonRawValue;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.util.JSONPObject;

import org.hibernate.annotations.GenericGenerator;
import org.hibernate.annotations.Type;
import org.json.JSONArray;
;

@Entity
@AllArgsConstructor
@Data
@NoArgsConstructor
@Table(name = "product",schema="seller_store")
public class Product{

    @Id
    @GenericGenerator(
        name = "p_seq", 
         strategy = "com.Sell_Store.demo.Utils.StringPrefixedSequenceIdGenerator",
        parameters = {
            @org.hibernate.annotations.Parameter(
                name = StringPrefixedSequenceIdGenerator.INCREMENT_PARAM, value = "1"),
            @org.hibernate.annotations.Parameter(
                name = StringPrefixedSequenceIdGenerator.VALUE_PREFIX_PARAMETER, value = "P_"),
                @org.hibernate.annotations.Parameter(
                name = StringPrefixedSequenceIdGenerator.NUMBER_FORMAT_PARAMETER, value = "%05d") })
           
    @GeneratedValue(generator = "p_seq",
        strategy = GenerationType.SEQUENCE)  
    @Column(name = "pid",columnDefinition = "nvarchar(20)", length = 50, nullable = false )
    private String productID;
    @OneToOne
    @JoinColumn(name = "cateID", referencedColumnName = "cateID")
    private Category category;
    @Column(name = "productName",columnDefinition = "nvarchar(20)", length = 50, nullable = false )
    private String productName;
    @Column(name = "images",columnDefinition = "json")
    @Lob
    @Convert(converter = JsonConverter.class)
    @JsonProperty("images")
    @JsonRawValue
    private JSONArray images;
    @Column(name = "info",columnDefinition = "nvarchar(20)", length = 200, nullable = false )
    private String info;
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
    @Column(name = "likes",columnDefinition = "int")
    private int likes;
    @Column(name = "views",columnDefinition = "int")
    private int views;
    @Column(name = "state",columnDefinition = "int")
    private int state;
    @OneToOne(mappedBy = "product",fetch = FetchType.LAZY)
    @JsonIgnoreProperties("product")
    private  Inventory inventory;
  
}
