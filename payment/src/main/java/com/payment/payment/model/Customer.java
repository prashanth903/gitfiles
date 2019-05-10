package com.payment.payment.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection ="coupon")
public class Customer {

	@Id
	String username;
	
	int CouponCode;
	
		
	
	public Customer() {
		super();
	}

	public Customer(String username, int couponCode) {
		super();
		this.username = username;
		this.CouponCode = couponCode;
	}
	
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}

	public int getCouponCode() {
		return CouponCode;
	}

	public void setCouponCode(int couponCode) {
		CouponCode = couponCode;
	}
	
	
}
