package com.Sell_Store.demo.Repository;

import java.util.List;

import com.Sell_Store.demo.Entity.*;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface OrderDetailRepository extends JpaRepository<OrderDetail,OrderDetail_ID>{
    public List<OrderDetail> findByOrderID(String orderID);
    /*(@Query(value = "SELECT sum(ctdh.thanhtoan) from CTDatHang ctdh join DatHang dh on ctdh.madh = dh.madh where dh.matvban=?1 and Month(dh.ngaytao)=?2  group by ctdh.masp",nativeQuery = true)
    public List<Long> findTotalItemGroupbyProductID(String matv,int thang);
    @Query(value = "SELECT sum(ctdh.soluong) from CTDatHang ctdh join DatHang dh on ctdh.madh = dh.madh where dh.matvban=?1 and Month(dh.ngaytao)=?2  group by ctdh.masp",nativeQuery = true)
    public List<Long> thongkesoluong(String matv,int thang);*/
    public List<OrderDetail> findAllByProductID(String productID);
    
}
