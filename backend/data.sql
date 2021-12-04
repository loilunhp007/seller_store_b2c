INSERT INTO `seller_store2`.`type_member` (`typeid`, `state`, `type_name`) VALUES ('1', '1', 'Admin');
INSERT INTO `seller_store2`.`type_member` (`typeid`, `state`, `type_name`) VALUES ('2', '1', 'Customer');
INSERT INTO `seller_store2`.`type_member` (`typeid`, `state`, `type_name`) VALUES ('3', '1', 'Staff');
INSERT INTO `seller_store2`.`type_member` (`typeid`, `state`, `type_name`) VALUES ('4', '1', 'Manager');

INSERT INTO `seller_store2`.`userdetail` (`uid`, `address`, `birthday`, `firstname`, `gmail`, `lastname`, `phone`, `state`, `timestamp`, `typemember_id`) VALUES ('user1', '124 võ thị sáu dĩ an bình dương', '1999-05-06 00:00:00', 'Lưu', 'duc@gmail.com', 'Anh Đức', '0824264121', '1', '2021-04-12 00:00:00', '1');
INSERT INTO `seller_store2`.`userdetail` (`uid`, `address`, `birthday`, `firstname`, `gmail`, `lastname`, `phone`, `state`, `timestamp`, `typemember_id`) VALUES ('user2', '123 đặng văn bi thủ đức', '1996-05-06 00:00:00', 'Phạm', 'loi@gmail.com', 'Văn Lợi', '0824264964', '1', '2021-04-12 00:00:00', '1');
INSERT INTO `seller_store2`.`userdetail` (`uid`, `address`, `birthday`, `firstname`, `gmail`, `lastname`, `phone`, `state`, `timestamp`, `typemember_id`) VALUES ('user3', '12 lý thường kiệt quận 1', '2002-02-03 00:00:00', 'Nguyễn', 'nguy@gmail.com', 'Di Nguy', '0824265896', '1', '2021-04-12 00:00:00', '3');
INSERT INTO `seller_store2`.`userdetail` (`uid`, `address`, `birthday`, `firstname`, `gmail`, `lastname`, `phone`, `state`, `timestamp`, `typemember_id`) VALUES ('user4', '156 phan xích long quận bình thạnh', '1998-02-03 00:00:00', 'Đặng', 'my@gmail.com', 'Tiểu My', '0824264565', '1', '2021-04-12 00:00:00', '4');
INSERT INTO `seller_store2`.`userdetail` (`uid`, `address`, `birthday`, `firstname`, `gmail`, `lastname`, `phone`, `state`, `timestamp`, `typemember_id`) VALUES ('user5', '12 phạm thế hiển quận 8', '1997-05-06 00:00:00', 'Nguyễn', 'tu@gmail.com', 'Thanh Tú', '0824264353', '1', '2021-04-12 00:00:00', '2');
INSERT INTO `seller_store2`.`userdetail` (`uid`, `address`, `birthday`, `firstname`, `gmail`, `lastname`, `phone`, `state`, `timestamp`, `typemember_id`) VALUES ('user6', '14 trần hưng đạo dĩ an bình dương', '1995-04-07 00:00:00', 'Huỳnh', 'chau@gmail.com', 'Ngọc Châu', '0824264565', '1', '2021-04-12 00:00:00', '4');
INSERT INTO `seller_store2`.`userdetail` (`uid`, `address`, `birthday`, `firstname`, `gmail`, `lastname`, `phone`, `state`, `timestamp`, `typemember_id`) VALUES ('user7', '123 trường chinh quận tân bình', '1995-05-08 00:00:00', 'Tô', 'ngoc@gmail.com', 'Thanh Ngọc', '0824264898', '1', '2021-04-12 00:00:00', '2');
INSERT INTO `seller_store2`.`userdetail` (`uid`, `address`, `birthday`, `firstname`, `gmail`, `lastname`, `phone`, `state`, `timestamp`, `typemember_id`) VALUES ('user8', '12 lê văn việt quận 9', '1998-02-03 00:00:00', 'Phan', 'hien@gmail.com', 'Văn Hiển', '0824264147', '1', '2021-04-12 00:00:00', '2');

INSERT INTO `seller_store2`.`account` (`uid`, `email`, `passwd`, `state`, `user_id`) VALUES ('1', 'duc@gmail.com', 'duc@12345', '1', 'user1');
INSERT INTO `seller_store2`.`account` (`uid`, `email`, `passwd`, `state`, `user_id`) VALUES ('2', 'loi@gmail.com', 'loi@12345', '1', 'user2');
INSERT INTO `seller_store2`.`account` (`uid`, `email`, `passwd`, `state`, `user_id`) VALUES ('3', 'nguy@gmail.com', 'nguy@12345', '1', 'user3');
INSERT INTO `seller_store2`.`account` (`uid`, `email`, `passwd`, `state`, `user_id`) VALUES ('4', 'my@gmail.com', 'my@12345', '1', 'user4');
INSERT INTO `seller_store2`.`account` (`uid`, `email`, `passwd`, `state`, `user_id`) VALUES ('5', 'tu@gmail.com', 'tu@12345', '1', 'user5');
INSERT INTO `seller_store2`.`account` (`uid`, `email`, `passwd`, `state`, `user_id`) VALUES ('6', 'mymy@gmail.com', 'mmy@12345', '1', 'user4');
INSERT INTO `seller_store2`.`account` (`uid`, `email`, `passwd`, `state`, `user_id`) VALUES ('7', 'vloi@gmail.com', 'vloi@12345', '1', 'user2');
INSERT INTO `seller_store2`.`account` (`uid`, `email`, `passwd`, `state`, `user_id`) VALUES ('8', 'chau@gmail.com', 'chau@12345', '1', 'user6');

INSERT INTO `seller_store2`.`category` (`cateid`, `tenloai`, `trangthai`) VALUES ('1', 'Áo', '1');
INSERT INTO `seller_store2`.`category` (`cateid`, `tenloai`, `trangthai`) VALUES ('2', 'Quần', '1');
INSERT INTO `seller_store2`.`category` (`cateid`, `tenloai`, `trangthai`) VALUES ('3', 'Phụ kiện', '1');
INSERT INTO `seller_store2`.`category` (`cateid`, `tenloai`, `trangthai`) VALUES ('4', 'Đầm ', '1');
INSERT INTO `seller_store2`.`category` (`cateid`, `tenloai`, `trangthai`) VALUES ('5', 'Váy', '1');
INSERT INTO `seller_store2`.`category` (`cateid`, `tenloai`, `trangthai`) VALUES ('6', 'Đồ bộ', '1');

INSERT INTO `seller_store2`.`product` (`pid`, `images`, `info`, `likes`, `percent_discount`, `price`, `product_name`, `special_from_time`, `special_to_time`, `state`, `views`, `cateid`) VALUES ('sp1', '\"[\'thun1.jpeg\',\'thun2.jpeg\',\'thun4.jpeg\',\'thun5.jpeg\']\"', '•  Freesize: Phom dưới 60kg\\r\\n•  Màu Sắc: Đen, Trắng\\r\\n•', '300', '20', '250000', 'Áo thun nữ kẻ sọc', '2021-04-12 00:00:00', '2021-04-20 00:00:00', '1', '150', '1');
INSERT INTO `seller_store2`.`product` (`pid`, `images`, `info`, `likes`, `percent_discount`, `price`, `product_name`, `special_from_time`, `special_to_time`, `state`, `views`, `cateid`) VALUES ('sp2', '\"[\'blz5.jpeg\',\'blz6.jpeg\',\'blz7.jpeg\',\'blz8.jpeg\']\"', 'Áo blazer là item không thể thiếu trong tủ đồ của nam giới khi ra đường. Áo blazer thích hợp khi thời tiết lạnh của mùa thu, hè', '350', '20', '289000', 'Áo blazer nam caro', '2021-04-12 00:00:00', '2021-05-25 00:00:00', '1', '150', '1');
INSERT INTO `seller_store2`.`product` (`pid`, `images`, `info`, `likes`, `percent_discount`, `price`, `product_name`, `special_from_time`, `special_to_time`, `state`, `views`, `cateid`) VALUES ('sp3', '\"[\'smi5.jpeg\',\'smi6.jpeg\']\"', '- Chất vải sờ mịn không bai, không nhăn, không xù.', '400', '10', '150000', 'Sơ mi nam trơn ', '2021-04-12 00:00:00', '2021-04-30 00:00:00', '1', '150', '1');
INSERT INTO `seller_store2`.`product` (`pid`, `images`, `info`, `likes`, `percent_discount`, `price`, `product_name`, `special_from_time`, `special_to_time`, `state`, `views`, `cateid`) VALUES ('sp4', '\"[\'v1.jpeg\',\'v2.jpeg\',\'v3.jpeg\']\"', 'Áo crop dài tay cổ tròn. Xuất xứ : Hàng Việt Nam. Chất liệu : Cotton dày dặn. Màu sắc : đen - trắng - nâu', '200', '20', '160000', 'Áo croptop nữ', '2021-11-12 00:00:00', '2021-12-20 00:00:00', '1', '150', '1');
INSERT INTO `seller_store2`.`product` (`pid`, `images`, `info`, `likes`, `percent_discount`, `price`, `product_name`, `special_from_time`, `special_to_time`, `state`, `views`, `cateid`) VALUES ('sp5', '\"[\'doll1.jpeg\',\'doll2.jpeg\']\"', 'Em váy đang rất hot đấy ạ, dáng cute hột me cúc bọc kết hợp bo tay thắt nơ siêu dễ thương cho mấy nàng style bánh bèo, xinh và nhiều thế này lẽ nào nàng ko chọn được 1 bộ cho riêng mình. HÀNG CHUẨN- DÁNG XINH- TỰ TIN XUỐNG PHỐ', '250', '20', '300000', 'Đầm Babydoll caro', '2021-12-12 00:00:00', '2021-12-20 00:00:00', '1', '150', '4');
INSERT INTO `seller_store2`.`product` (`pid`, `images`, `info`, `likes`, `percent_discount`, `price`, `product_name`, `special_from_time`, `special_to_time`, `state`, `views`, `cateid`) VALUES ('sp6', '\"[\'nut1.jpeg\',\'nut2.jpeg\',\'nut3.jpeg\',\'nut4.jpeg\']\"', 'Team nhẹ nhàng đơn giản basic không bao giờ lỗi mốt. Đầm trắng xoè cổ vuông phối nút gỗ. Chất liệu: cotton lót full đầm. Màu: đen - trắng - kem', '150', '15', '360000', 'Đầm cổ vuông phối nút', '2021-12-12 00:00:00', '2021-12-24 00:00:00', '1', '150', '4');
INSERT INTO `seller_store2`.`product` (`pid`, `images`, `info`, `likes`, `percent_discount`, `price`, `product_name`, `special_from_time`, `special_to_time`, `state`, `views`, `cateid`) VALUES ('sp7', '\"[\'bag1.jpeg\',\'bag2.jpeg\',\'bag3.jpeg\',\'bag4.jpeg\']\"', 'Chúng tôi chuyên cung cấp sỉ, lẻ Quần áo, phụ kiện thời trang theo mùa, mẫu mã đa dạng đủ những mẫu hót nhất theo xu hướng. Đa số là hàng tự sản xuất nên giá cả sẽ được cạnh tranh nhất, bao đẹp so với giá tiền.', '360', '20', '260000', 'Quần baggy nam ống rộng', '2021-12-12 00:00:00', '2021-12-25 00:00:00', '1', '150', '2');
INSERT INTO `seller_store2`.`product` (`pid`, `images`, `info`, `likes`, `percent_discount`, `price`, `product_name`, `special_from_time`, `special_to_time`, `state`, `views`, `cateid`) VALUES ('sp8', '\"[\'bg1.jpeg\',\'bg2.jpeg\',\'bg3.jpeg\',\'bg4.jpeg\']\"', 'Chúng tôi chuyên cung cấp sỉ, lẻ Quần áo, phụ kiện thời trang theo mùa, mẫu mã đa dạng đủ những mẫu hót nhất theo xu hướng. Đa số là hàng tự sản xuất nên giá cả sẽ được cạnh tranh nhất, bao đẹp so với giá tiền.', '500', '20', '280000', 'Quần baggy nữ lưng cao', '2021-12-12 00:00:00', '2021-12-25 00:00:00', '1', '150', '2');
INSERT INTO `seller_store2`.`product` (`pid`, `images`, `info`, `likes`, `percent_discount`, `price`, `product_name`, `special_from_time`, `special_to_time`, `state`, `views`, `cateid`) VALUES ('sp9', '\"[\'s1.jpeg\',\'s2.jpeg\',\'s3.jpeg\']\"', 'Chúng tôi chuyên cung cấp sỉ, lẻ Quần áo, phụ kiện thời trang theo mùa, mẫu mã đa dạng đủ những mẫu hót nhất theo xu hướng. Đa số là hàng tự sản xuất nên giá cả sẽ được cạnh tranh nhất, bao đẹp so với giá tiền.', '450', '15', '254000', 'Quần short đũi nữ', '2021-12-12 00:00:00', '2021-12-25 00:00:00', '1', '150', '2');
INSERT INTO `seller_store2`.`product` (`pid`, `images`, `info`, `likes`, `percent_discount`, `price`, `product_name`, `special_from_time`, `special_to_time`, `state`, `views`, `cateid`) VALUES ('sp10', '\"[\'non1.jpeg\',\'non2.jpeg\',\'non3.jpeg\']\"', 'MŨ BUCKET MARUKO idol Kpop BASIC trơn với giá cực ưu đãi: - Sẵn các màu: đen - be - Chất liệu kaki đẹp cực nha', '200', '10', '75000', 'Mũ Bucket trơn nữ', '2021-04-12 00:00:00', '2021-05-21 00:00:00', '1', '150', '3');

INSERT INTO `seller_store2`.`cart` (`id`, `soluong`, `productid`, `uid`) VALUES ('1', '2', 'sp1', 'user8');
INSERT INTO `seller_store2`.`cart` (`id`, `soluong`, `productid`, `uid`) VALUES ('2', '1', 'sp2', 'user8');
INSERT INTO `seller_store2`.`cart` (`id`, `soluong`, `productid`, `uid`) VALUES ('3', '3', 'sp3', 'user8');
INSERT INTO `seller_store2`.`cart` (`id`, `soluong`, `productid`, `uid`) VALUES ('4', '5', 'sp1', 'user5');
INSERT INTO `seller_store2`.`cart` (`id`, `soluong`, `productid`, `uid`) VALUES ('5', '2', 'sp10', 'user8');
INSERT INTO `seller_store2`.`cart` (`id`, `soluong`, `productid`, `uid`) VALUES ('6', '1', 'sp10', 'user5');
INSERT INTO `seller_store2`.`cart` (`id`, `soluong`, `productid`, `uid`) VALUES ('7', '3', 'sp5', 'user7');
INSERT INTO `seller_store2`.`cart` (`id`, `soluong`, `productid`, `uid`) VALUES ('8', '2', 'sp6', 'user8');
INSERT INTO `seller_store2`.`cart` (`id`, `soluong`, `productid`, `uid`) VALUES ('9', '2', 'sp9', 'user5');
INSERT INTO `seller_store2`.`cart` (`id`, `soluong`, `productid`, `uid`) VALUES ('10', '2', 'sp4', 'user8');
INSERT INTO `seller_store2`.`cart` (`id`, `soluong`, `productid`, `uid`) VALUES ('11', '1', 'sp3', 'user5');
INSERT INTO `seller_store2`.`cart` (`id`, `soluong`, `productid`, `uid`) VALUES ('12', '1', 'sp4', 'user7');
INSERT INTO `seller_store2`.`cart` (`id`, `soluong`, `productid`, `uid`) VALUES ('13', '1', 'sp7', 'user5');
INSERT INTO `seller_store2`.`cart` (`id`, `soluong`, `productid`, `uid`) VALUES ('14', '3', 'sp8', 'user7');
INSERT INTO `seller_store2`.`cart` (`id`, `soluong`, `productid`, `uid`) VALUES ('15', '1', 'sp8', 'user8');
INSERT INTO `seller_store2`.`cart` (`id`, `soluong`, `productid`, `uid`) VALUES ('16', '2', 'sp7', 'user8');
INSERT INTO `seller_store2`.`cart` (`id`, `soluong`, `productid`, `uid`) VALUES ('17', '2', 'sp9', 'user8');
INSERT INTO `seller_store2`.`cart` (`id`, `soluong`, `productid`, `uid`) VALUES ('18', '1', 'sp10', 'user5');
INSERT INTO `seller_store2`.`cart` (`id`, `soluong`, `productid`, `uid`) VALUES ('19', '1', 'sp10', 'user7');
INSERT INTO `seller_store2`.`cart` (`id`, `soluong`, `productid`, `uid`) VALUES ('20', '1', 'sp5', 'user7');

INSERT INTO `seller_store2`.`payment_method` (`payment_id`, `payment_name`, `state`) VALUES ('1', 'Trực tiếp', '1');
INSERT INTO `seller_store2`.`payment_method` (`payment_id`, `payment_name`, `state`) VALUES ('2', 'Trực tuyến', '0');

INSERT INTO `seller_store2`.`transport` (`tid`, `fee`, `name`) VALUES ('1', '30000', 'Hỏa Tốc');
INSERT INTO `seller_store2`.`transport` (`tid`, `fee`, `name`) VALUES ('2', '50000', 'Giao Hàng Tiết Kiệm');
INSERT INTO `seller_store2`.`transport` (`tid`, `fee`, `name`) VALUES ('3', '40000', 'Giao Hàng Nhanh');

INSERT INTO `seller_store2`.`orders` (`orderid`, `endtime`, `starttime`, `state`, `total`, `payment_id`, `uid`) VALUES ('1', '2021-04-15 00:00:00', '2021-04-11 00:00:00', '2', '1', '1', 'user8');
INSERT INTO `seller_store2`.`orders` (`orderid`, `endtime`, `starttime`, `state`, `total`, `payment_id`, `uid`) VALUES ('2', '2021-02-12 00:00:00', '2021-02-08 00:00:00', '3', '1', '1', 'user5');
INSERT INTO `seller_store2`.`orders` (`orderid`, `endtime`, `starttime`, `state`, `total`, `payment_id`, `uid`) VALUES ('3', '2021-04-12 00:00:00', '2021-07-12 00:00:00', '1', '1', '1', 'user5');
INSERT INTO `seller_store2`.`orders` (`orderid`, `endtime`, `starttime`, `state`, `total`, `payment_id`, `uid`) VALUES ('4', '2021-10-20 00:00:00', '2021-10-17 00:00:00', '1', '1', '1', 'user8');
INSERT INTO `seller_store2`.`orders` (`orderid`, `endtime`, `starttime`, `state`, `total`, `payment_id`, `uid`) VALUES ('5', '2021-11-21 00:00:00', '2021-11-18 00:00:00', '1', '1', '1', 'user7');
INSERT INTO `seller_store2`.`orders` (`orderid`, `endtime`, `starttime`, `state`, `total`, `payment_id`, `uid`) VALUES ('6', '2021-12-05 00:00:00', '2021-12-01 00:00:00', '2', '1', '1', 'user5');
INSERT INTO `seller_store2`.`orders` (`orderid`, `endtime`, `starttime`, `state`, `total`, `payment_id`, `uid`) VALUES ('7', '2021-10-29 00:00:00', '2021-10-25 00:00:00', '2', '1', '1', 'user5');
INSERT INTO `seller_store2`.`orders` (`orderid`, `endtime`, `starttime`, `state`, `total`, `payment_id`, `uid`) VALUES ('8', '2021-10-25 00:00:00', '2021-10-15 00:00:00', '3', '1', '1', 'user8');
INSERT INTO `seller_store2`.`orders` (`orderid`, `endtime`, `starttime`, `state`, `total`, `payment_id`, `uid`) VALUES ('9', '2021-11-23 00:00:00', '2021-11-12 00:00:00', '4', '1', '1', 'user7');
INSERT INTO `seller_store2`.`orders` (`orderid`, `endtime`, `starttime`, `state`, `total`, `payment_id`, `uid`) VALUES ('10', '2021-12-09 00:00:00', '2021-12-04 00:00:00', '1', '1', '1', 'user8');


INSERT INTO `seller_store2`.`order_detail` (`order_id`, `product_id`, `delivery_address`, `destination`, `price`, `quantity`, `total`, `user_pay`, `tid`) VALUES ('1', 'sp5', '162 võ thị sáu dĩ an', '162 võ thị sáu dĩ an', '300000', '1', '300000', '300000', '1');
INSERT INTO `seller_store2`.`order_detail` (`order_id`, `product_id`, `delivery_address`, `destination`, `price`, `quantity`, `total`, `user_pay`, `tid`) VALUES ('2', 'sp8', '162 võ thị sáu dĩ an', '162 võ thị sáu dĩ an', '280000', '1', '280000', '280000', '2');
INSERT INTO `seller_store2`.`order_detail` (`order_id`, `product_id`, `delivery_address`, `destination`, `price`, `quantity`, `total`, `user_pay`, `tid`) VALUES ('3', 'sp1', '12 đặng văn bi quận', '12 đặng văn bi quận', '250000', '1', '250000', '250000', '3');
INSERT INTO `seller_store2`.`order_detail` (`order_id`, `product_id`, `delivery_address`, `destination`, `price`, `quantity`, `total`, `user_pay`, `tid`) VALUES ('4', 'sp2', '162 võ thị sáu dĩ an', '162 võ thị sáu dĩ an', '289000', '1', '289000', '289000', '1');
INSERT INTO `seller_store2`.`order_detail` (`order_id`, `product_id`, `delivery_address`, `destination`, `price`, `quantity`, `total`, `user_pay`, `tid`) VALUES ('5', 'sp3', '12 đặng văn bi quận', '12 đặng văn bi quận', '150000', '1', '150000', '150000', '2');
INSERT INTO `seller_store2`.`order_detail` (`order_id`, `product_id`, `delivery_address`, `destination`, `price`, `quantity`, `total`, `user_pay`, `tid`) VALUES ('6', 'sp2', '12 đặng văn bi quận', '12 đặng văn bi quận', '289000', '1', '289000', '289000', '1');
INSERT INTO `seller_store2`.`order_detail` (`order_id`, `product_id`, `delivery_address`, `destination`, `price`, `quantity`, `total`, `user_pay`, `tid`) VALUES ('7', 'sp8', '14 trần hưng đạo', '14 trần hưng đạo', '280000', '1', '280000', '280000', '3');
INSERT INTO `seller_store2`.`order_detail` (`order_id`, `product_id`, `delivery_address`, `destination`, `price`, `quantity`, `total`, `user_pay`, `tid`) VALUES ('8', 'sp9', '14 trần hưng đạo', '14 trần hưng đạo', '254000', '1', '254000', '254000', '1');
INSERT INTO `seller_store2`.`order_detail` (`order_id`, `product_id`, `delivery_address`, `destination`, `price`, `quantity`, `total`, `user_pay`, `tid`) VALUES ('9', 'sp9', '123 trường chinh', '123 trường chinh', '254000', '1', '254000', '254000', '2');
INSERT INTO `seller_store2`.`order_detail` (`order_id`, `product_id`, `delivery_address`, `destination`, `price`, `quantity`, `total`, `user_pay`, `tid`) VALUES ('10', 'sp8', '123 trường chinh', '123 trường chinh', '280000', '1', '280000', '280000', '2');

INSERT INTO `seller_store2`.`comment` (`orderid`, `pid`, `noidung`, `sao`) VALUES ('1', 'sp5', 'Đẹp đáng tiền nha quý zị^^\\r\\nĐóng gói khỏi chê lại đc tặng quà nữa', '5 sao');
INSERT INTO `seller_store2`.`comment` (`orderid`, `pid`, `noidung`, `sao`) VALUES ('2', 'sp8', '\'Hàng rất tốt đúng như hình và giao cx rất nhanh nữa, mik rất ưng, đóng gói rất tỉ mỉ. Mik sẽ tiếp tụ ủng hộ shop', '5 sao');
INSERT INTO `seller_store2`.`comment` (`orderid`, `pid`, `noidung`, `sao`) VALUES ('3', 'sp1', 'Đẹp đáng tiền nha quý zị^^\\r\\nĐóng gói khỏi chê lại đc tặng quà nữa', '4 sao');
INSERT INTO `seller_store2`.`comment` (`orderid`, `pid`, `noidung`, `sao`) VALUES ('4', 'sp2', 'Đẹp đáng tiền nha quý zị^^\\r\\nĐóng gói khỏi chê lại đc tặng quà nữa', '5 sao');
INSERT INTO `seller_store2`.`comment` (`orderid`, `pid`, `noidung`, `sao`) VALUES ('5', 'sp3', 'Đẹp đáng tiền nha quý zị^^\\r\\nĐóng gói khỏi chê lại đc tặng quà nữa', '5 sao');
INSERT INTO `seller_store2`.`comment` (`orderid`, `pid`, `noidung`, `sao`) VALUES ('6', 'sp2', 'Đẹp đáng tiền nha quý zị^^\\r\\nĐóng gói khỏi chê lại đc tặng quà nữa', '4 sao');
INSERT INTO `seller_store2`.`comment` (`orderid`, `pid`, `noidung`, `sao`) VALUES ('7', 'sp8', '\'Hàng rất tốt đúng như hình và giao cx rất nhanh nữa, mik rất ưng, đóng gói rất tỉ mỉ. Mik sẽ tiếp tụ ủng hộ shop', '5 sao');
INSERT INTO `seller_store2`.`comment` (`orderid`, `pid`, `noidung`, `sao`) VALUES ('8', 'sp9', '\'Hàng rất tốt đúng như hình và giao cx rất nhanh nữa, mik rất ưng, đóng gói rất tỉ mỉ. Mik sẽ tiếp tụ ủng hộ shop', '4 sao');
INSERT INTO `seller_store2`.`comment` (`orderid`, `pid`, `noidung`, `sao`) VALUES ('9', 'sp9', '\'Hàng rất tốt đúng như hình và giao cx rất nhanh nữa, mik rất ưng, đóng gói rất tỉ mỉ. Mik sẽ tiếp tụ ủng hộ shop', '5 sao');
INSERT INTO `seller_store2`.`comment` (`orderid`, `pid`, `noidung`, `sao`) VALUES ('10', 'sp8', '\'Hàng rất tốt đúng như hình và giao cx rất nhanh nữa, mik rất ưng, đóng gói rất tỉ mỉ. Mik sẽ tiếp tụ ủng hộ shop', '4 sao');






