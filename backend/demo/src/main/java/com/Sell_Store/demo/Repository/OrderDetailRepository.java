package com.Sell_Store.demo.Repository;

import java.util.List;

import com.Sell_Store.demo.Entity.*;

import org.json.JSONObject;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface OrderDetailRepository extends JpaRepository<OrderDetail,OrderDetail_ID>{
    public List<OrderDetail> findByOrderID(String orderID);
    @Query(value = "SELECT sum(ord.total),detail.product_id from  orders ord join order_detail detail on ord.orderid = detail.order_id where Month(ord.endTime)=?1 and ord.state='4'  group by detail.product_id",nativeQuery = true)
    public List<Object> findTotalItemGroupbyProductID(int thang);
    @Query(value = "SELECT sum(detail.quantity),detail.product_id from order_detail detail join orders ord on detail.order_id = ord.orderid where Month(ord.endTime)=?1 and ord.state=?2  group by detail.product_id",nativeQuery = true)
    public List<Object> thongkesoluong(int thang,int state);
    @Query(value="SELECT sum(ord.orderID),detail.product_id from orders ord join order_detail detail on ord.orderid = detail.order_id where Date(ord.startTime)=?1 and ord.state=?2  group by detail.product_id",nativeQuery = true)
    public List<Object> thongkeNgay(String date,int state);
    public List<OrderDetail> findAllByProductID(String productID);
    
}
