package com.Sell_Store.demo.Repository;

import java.util.List;

import com.Sell_Store.demo.Entity.*;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface OrderDetailRepository extends JpaRepository<OrderDetail,OrderDetail_ID>{
    public List<OrderDetail> findByOrderID(String orderID);
    @Query(value = "SELECT sum(detail.user_pay) from  orders ord join order_detail detail on ord.orderid = detail.order_id where Month(ord.endTime)=?1 and ord.state='4'  group by detail.product_id",nativeQuery = true)
    public List<Long> findTotalItemGroupbyProductID(int thang);
    @Query(value = "SELECT sum(detail.quantity) from order_detail detail join orders ord on detail.order_id = ord.orderid where Month(ord.endTime)=?1 and ord.state=?2  group by detail.product_id",nativeQuery = true)
    public List<Long> thongkesoluong(int thang,int state);
    @Query(value="SELECT sum(ord.orderID) from orders ord join order_detail detail on ord.orderid = detail.order_id where Date(ord.startTime)=?1 and or.state=?2  group by detail.product_id",nativeQuery = true)
    public List<Long> thongkeNgay(String date,int state);
    public List<OrderDetail> findAllByProductID(String productID);
    
}
